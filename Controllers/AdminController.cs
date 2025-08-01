using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineMedicineDonationAPI_New.Data;
using OnlineMedicineDonationAPI_New.DTOs;
using OnlineMedicineDonationAPI_New.Models;
using OnlineMedicineDonationAPI_New.Services;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



namespace OnlineMedicineDonationAPI_New.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin")]
    public class AdminController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AdminController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Admin
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Admin>>> GetAdmins()
        {
            return await _context.Admins.ToListAsync();
        }

        [AllowAnonymous]
        // POST: api/Admin/register
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] Admin admin)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (_context.Admins.Any(a => a.Email == admin.Email))
                return BadRequest("Admin already exists!");

            admin.PasswordHash = BCrypt.Net.BCrypt.HashPassword(admin.PasswordHash);
            _context.Admins.Add(admin);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Admin registered successfully" });
        }

        [AllowAnonymous]
        // POST: api/Admin/login
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] Admin login)
        {
            var admin = await _context.Admins.FirstOrDefaultAsync(a => a.Email == login.Email);
            if (admin == null || !BCrypt.Net.BCrypt.Verify(login.PasswordHash, admin.PasswordHash))
                return Unauthorized("Invalid credentials");

            // Inject JwtService using DI or create a new one manually if needed
            var jwtService = new JwtService(new ConfigurationBuilder().AddJsonFile("appsettings.json").Build());
            var token = jwtService.GenerateToken(new User
            {
                Id = admin.AdminId,
                Email = admin.Email,
                Role = admin.Role
            });

            return Ok(new { message = "Login successful", token, adminId = admin.AdminId, role = admin.Role });
        }


        // GET: api/Admin/all-medicines
        [HttpGet("all-medicines")]
        public async Task<IActionResult> GetAllMedicines()
        {
            var medicines = await _context.MedicineDonations.ToListAsync();
            return Ok(medicines);
        }

        // PUT: api/Admin/update-donation-status/{id}
        [HttpPut("update-donation-status/{id}")]
        public async Task<IActionResult> UpdateDonationStatus(int id, [FromBody] StatusUpdateDto dto)
        {
            var donation = await _context.MedicineDonations.FindAsync(id);
            if (donation == null) return NotFound("Donation not found");

            donation.Status = dto.Status;
            await _context.SaveChangesAsync();
            return Ok(new { message = "Donation status updated", donation });
        }

        // GET: api/Admin/all-requests
        [HttpGet("all-requests")]
        public async Task<IActionResult> GetAllRequests()
        {
            var requests = await _context.Requests.ToListAsync();
            return Ok(requests);
        }

        // PUT: api/Admin/update-request-status/{id}
        [HttpPut("update-request-status/{id}")]
        public async Task<IActionResult> UpdateRequestStatus(int id, [FromBody] StatusUpdateDto dto)
        {
            var request = await _context.Requests.FindAsync(id);
            if (request == null) return NotFound("Request not found");

            request.Status = dto.Status;
            await _context.SaveChangesAsync();
            return Ok(new { message = "Request status updated", request });
        }

    }
}
