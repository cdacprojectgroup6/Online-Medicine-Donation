using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineMedicineDonationAPI_New.Data;
using OnlineMedicineDonationAPI_New.Models;

namespace OnlineMedicineDonationAPI_New.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class DonationsController : ControllerBase
    {
        private readonly AppDbContext _context;
        public DonationsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetDonations()
        {
            var donations = await _context.MedicineDonations.ToListAsync();
            return Ok(donations);
        }

        [HttpPost]
        public async Task<IActionResult> CreateDonation(MedicineDonation donation)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _context.MedicineDonations.Add(donation);
            await _context.SaveChangesAsync();
            return Ok(donation);
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteDonation(int id)
        {
            var donation = await _context.MedicineDonations.FindAsync(id);
            if (donation == null)
                return NotFound();

            _context.MedicineDonations.Remove(donation);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
