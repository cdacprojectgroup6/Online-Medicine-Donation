using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineMedicineDonationAPI_New.Data;
using OnlineMedicineDonationAPI_New.DTOs;
using OnlineMedicineDonationAPI_New.Models;

namespace OnlineMedicineDonationAPI_New.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MedicinesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public MedicinesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/medicines
        [HttpGet]
        public async Task<IActionResult> GetAllMedicines()
        {
            try
            {
                var medicines = await _context.Medicines.ToListAsync();
                return Ok(medicines);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // GET: api/medicines/pending
        [HttpGet("pending")]
        public async Task<IActionResult> GetPendingMedicines()
        {
            try
            {
                var medicines = await _context.Medicines
                    .Where(m => m.Status == "Pending")
                    .ToListAsync();

                return Ok(medicines);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // PATCH: api/medicines/{id}/status
        [HttpPatch("{id}/status")]
        public async Task<IActionResult> UpdateMedicineStatus(int id, [FromBody] StatusUpdateDto dto)
        {
            try
            {
                var medicine = await _context.Medicines.FindAsync(id);
                if (medicine == null)
                    return NotFound("Medicine not found.");

                medicine.Status = dto.Status; // "Verified" or "Rejected"
                await _context.SaveChangesAsync();

                return Ok(new { message = "Status updated successfully.", medicine });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
