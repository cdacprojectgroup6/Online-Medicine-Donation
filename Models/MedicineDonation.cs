using System.ComponentModel.DataAnnotations;

namespace OnlineMedicineDonationAPI_New.Models
{
    public class MedicineDonation
    {
        public int Id { get; set; }

        [Required]
        public string DonorName { get; set; } = null!;

        [Required, EmailAddress]
        public string DonorEmail { get; set; } = null!;

        [Required]
        public string MedicineName { get; set; } = null!;

        [Required]
        public int Quantity { get; set; }

        public string? Notes { get; set; }

        public DateTime DonationDate { get; set; } = DateTime.UtcNow;

        public string Status { get; set; } = "Pending"; // Approved, Rejected

    }
}
