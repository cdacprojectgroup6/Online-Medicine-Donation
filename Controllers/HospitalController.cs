using Microsoft.AspNetCore.Mvc;

using Microsoft.EntityFrameworkCore;

using System.Collections.Generic;
using System.Threading.Tasks;
using OnlineMedicineDonationAPI_New.Data;
using OnlineMedicineDonationAPI_New.Models;

namespace OnlineMedicineDonationAPI_New.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HospitalController : ControllerBase
    {
        private readonly AppDbContext _context;

        public HospitalController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Hospital
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Hospital>>> GetHospitals()
        {
            return await _context.Hospitals.ToListAsync();
        }

        // GET: api/Hospital/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Hospital>> GetHospital(int id)
        {
            var hospital = await _context.Hospitals.FindAsync(id);
            if (hospital == null)
                return NotFound();
            return hospital;
        }

        // POST: api/Hospital
        [HttpPost]
        public async Task<ActionResult<Hospital>> PostHospital(Hospital hospital)
        {
            _context.Hospitals.Add(hospital);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetHospital), new { id = hospital.HospitalID }, hospital);
        }

        // PUT: api/Hospital/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHospital(int id, Hospital hospital)
        {
            if (id != hospital.HospitalID)
                return BadRequest();

            _context.Entry(hospital).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/Hospital/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHospital(int id)
        {
            var hospital = await _context.Hospitals.FindAsync(id);
            if (hospital == null)
                return NotFound();

            _context.Hospitals.Remove(hospital);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}

