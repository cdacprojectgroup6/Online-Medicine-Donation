using Microsoft.EntityFrameworkCore;
using OnlineMedicineDonationAPI_New.Models;

namespace OnlineMedicineDonationAPI_New.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<MedicineDonation> MedicineDonations { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Hospital> Hospitals { get; set; }

        public DbSet<Medicine> Medicines { get; set; }
        public DbSet<NGO> NGOs { get; set; }
        public DbSet<Request> Requests { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("Users");
            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Role).HasDefaultValue("User");
                entity.Property(e => e.PasswordResetToken).IsRequired(false);
                entity.Property(e => e.ResetTokenExpiry).IsRequired(false);
            });
        }
    }
}
