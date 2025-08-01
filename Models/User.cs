using System.ComponentModel.DataAnnotations;

namespace OnlineMedicineDonationAPI_New.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required, EmailAddress]
        public string Email { get; set; }

        [Required]
        public string PasswordHash { get; set; }  // Store hashed password

        public string Role { get; set; } = "User";  // Default role
        public string PasswordResetToken { get; set; }
        public DateTime? ResetTokenExpiry { get; set; }

    }
}
