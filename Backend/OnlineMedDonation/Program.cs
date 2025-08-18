using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using OnlineMedDonation.Models;
using System.Text;
using System.IO;

var builder = WebApplication.CreateBuilder(args);

// Configure DbContext 
builder.Services.AddDbContext<MedDonationContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        new MySqlServerVersion(new Version(8, 0, 32))
    ));

// ✅ Add Controllers
builder.Services.AddControllers();

// ✅ CORS: Allow all origins (for dev/flexibility)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// ✅ JWT Authentication
var jwtKey = builder.Configuration["Jwt:Key"];
var jwtIssuer = builder.Configuration["Jwt:Issuer"];
var jwtAudience = builder.Configuration["Jwt:Audience"];

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = jwtIssuer,
        ValidAudience = jwtAudience,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey))
    };

    options.Events = new JwtBearerEvents
    {
        OnMessageReceived = context =>
        {
            var accessToken = context.Request.Headers["Authorization"];
            if (!string.IsNullOrEmpty(accessToken) && accessToken.ToString().StartsWith("Bearer "))
            {
                context.Token = accessToken.ToString().Substring("Bearer ".Length).Trim();
            }
            return Task.CompletedTask;
        }
    };
});

// ✅ Authorization
builder.Services.AddAuthorization();

// ✅ Swagger (always enabled)
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// ✅ Middleware
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

// ✅ Serve static files and default to index.html
app.UseDefaultFiles();
app.UseStaticFiles();

app.UseRouting();
app.UseCors("AllowAll");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

// ✅ SPA fallback for client-side routing (e.g., React/Vue/Angular with Vite)
app.Use(async (context, next) =>
{
    await next();

    if (context.Response.StatusCode == 404 &&
        !Path.HasExtension(context.Request.Path.Value) &&
        !context.Request.Path.Value.StartsWith("/api"))
    {
        context.Request.Path = "/index.html";
        await next();
    }
});

app.Run();
