using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineMedicineDonationAPI_New.Data;
using OnlineMedicineDonationAPI_New.DTOs;
using OnlineMedicineDonationAPI_New.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineMedicineDonationAPI_New.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NGOController : ControllerBase
    {
        private readonly AppDbContext _context;

        public NGOController(AppDbContext context)
        {
            _context = context;
        }

        // POST: api/NGO/register
        [HttpPost("register")]
        public async Task<IActionResult> RegisterNGO([FromBody] NGO ngo)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _context.NGOs.Add(ngo);
            await _context.SaveChangesAsync();

            return Ok(new { message = "NGO registered successfully", ngo });
        }

        // GET: api/NGO
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NGO>>> GetAllNGOs()
        {
            return await _context.NGOs.Include(n => n.Requests).ToListAsync();
        }

        // GET: api/NGO/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<NGO>> GetNGO(int id)
        {
            var ngo = await _context.NGOs.Include(n => n.Requests).FirstOrDefaultAsync(n => n.NGOID == id);
            if (ngo == null)
                return NotFound("NGO not found");

            return Ok(ngo);
        }

        // PUT: api/NGO/update-status/{id}
        [HttpPut("update-status/{id}")]
        public async Task<IActionResult> UpdateStatus(int id, [FromBody] StatusUpdateDto dto)
        {
            var ngo = await _context.NGOs.FindAsync(id);
            if (ngo == null)
                return NotFound("NGO not found");

            ngo.Status = dto.Status;
            await _context.SaveChangesAsync();

            return Ok(new { message = "NGO status updated", ngo });
        }

        // DELETE: api/NGO/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNGO(int id)
        {
            var ngo = await _context.NGOs.FindAsync(id);
            if (ngo == null)
                return NotFound("NGO not found");

            _context.NGOs.Remove(ngo);
            await _context.SaveChangesAsync();

            return Ok(new { message = "NGO deleted successfully" });
        }
    }
}
