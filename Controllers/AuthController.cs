using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineMedicineDonationAPI_New.Data;
using OnlineMedicineDonationAPI_New.DTOs;
using OnlineMedicineDonationAPI_New.Models;
using OnlineMedicineDonationAPI_New.Services;
using System.Security.Cryptography;
using System.Text;

namespace OnlineMedicineDonationAPI_New.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly JwtService _jwtService;

        public AuthController(AppDbContext context, JwtService jwtService)
        {
            _context = context;
            _jwtService = jwtService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDto dto)
        {
            try
            {
                if (await _context.Users.AnyAsync(u => u.Email == dto.Email))
                    return BadRequest("Email already registered.");

                var user = new User
                {
                    Name = dto.Name,
                    Email = dto.Email,
                    PasswordHash = HashPassword(dto.Password),
                    Role = "User",
                    PasswordResetToken = ""  // prevent null insert
                };


                _context.Users.Add(user);
                await _context.SaveChangesAsync();

                return Ok("User registered successfully.");
            }
            catch (Exception ex)
            {
                // Log ex here
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }


        private string HashPassword(string password)
        {
            using var sha256 = SHA256.Create();
            var bytes = Encoding.UTF8.GetBytes(password);
            var hash = sha256.ComputeHash(bytes);
            return Convert.ToBase64String(hash);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto dto)
        {
            Console.WriteLine($"Login attempt for email: {dto.Email}");

            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == dto.Email);
            if (user == null || !VerifyPassword(dto.Password, user.PasswordHash))
            {
                Console.WriteLine("Invalid credentials");
                return Unauthorized("Invalid credentials");
            }

            var token = _jwtService.GenerateToken(user);
            Console.WriteLine("Token generated: " + token);

            return Ok(new { token });
        }


        private bool VerifyPassword(string password, string storedHash)
        {
            return HashPassword(password) == storedHash;
        }
        [HttpPost("forgot-password")]
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordDto dto)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == dto.Email);
            if (user == null)
                return BadRequest("Email not found.");

            // Generate token
            var resetToken = Guid.NewGuid().ToString();
            user.PasswordResetToken = resetToken;
            user.ResetTokenExpiry = DateTime.UtcNow.AddMinutes(15); // valid for 15 minutes
            await _context.SaveChangesAsync();

            // Instead of sending email, return the reset URL in response
            var resetUrl = $"http://localhost:5173/reset-password?token={resetToken}";

            return Ok(new { message = "Password reset link generated.", resetUrl });
        }



        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword(ResetPasswordDto dto)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u =>
                u.PasswordResetToken == dto.Token &&
                u.ResetTokenExpiry > DateTime.UtcNow);

            if (user == null)
                return BadRequest("Invalid or expired token.");

            user.PasswordHash = HashPassword(dto.NewPassword);
            user.PasswordResetToken = null;
            user.ResetTokenExpiry = null;

            await _context.SaveChangesAsync();

            return Ok("Password has been reset successfully.");
        }

    }
}
