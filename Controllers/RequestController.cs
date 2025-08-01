using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineMedicineDonationAPI_New.Data;
using OnlineMedicineDonationAPI_New.DTOs;
using OnlineMedicineDonationAPI_New.Models;

namespace OnlineMedicineDonationAPI_New.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RequestsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public RequestsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/requests
        [HttpGet]
        public async Task<IActionResult> GetAllRequests()
        {
            try
            {
                var requests = await _context.Requests
                    .Include(r => r.NGO)
                    .ToListAsync();

                return Ok(requests);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // GET: api/requests/pending
        [HttpGet("pending")]
        public async Task<IActionResult> GetPendingRequests()
        {
            try
            {
                var requests = await _context.Requests
                    .Include(r => r.NGO)
                    .Where(r => r.Status == "Pending")
                    .ToListAsync();

                return Ok(requests);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // PATCH: api/requests/{id}/status
        [HttpPatch("{id}/status")]
        public async Task<IActionResult> UpdateRequestStatus(int id, [FromBody] StatusUpdateDto dto)
        {
            try
            {
                var request = await _context.Requests.FindAsync(id);
                if (request == null)
                    return NotFound("Request not found.");

                request.Status = dto.Status; // "Approved" or "Rejected"
                await _context.SaveChangesAsync();

                return Ok(new { message = "Request status updated successfully.", request });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
