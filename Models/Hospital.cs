
using System.ComponentModel.DataAnnotations;

namespace OnlineMedicineDonationAPI_New.Models
{
    public class Hospital
    {
        [Key]
        public int HospitalID { get; set; }

        [Required, MaxLength(100)]
        public string Name { get; set; }

        [Required, EmailAddress]
        public string Email { get; set; }

        [MaxLength(15)]
        public string Phone { get; set; }

        [MaxLength(255)]
        public string Address { get; set; }

        [MaxLength(50)]
        public string City { get; set; }

        [MaxLength(50)]
        public string State { get; set; }

        [MaxLength(10)]
        public string Pincode { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
