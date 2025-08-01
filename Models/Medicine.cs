
namespace OnlineMedicineDonationAPI_New.Models
{
    public class Medicine
    {
        public int MedicineID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime ExpiryDate { get; set; }
        public int Quantity { get; set; }
        public int DonorID { get; set; }
        public string Status { get; set; }  // Pending / Verified / Donated
        public DateTime CreatedAt { get; set; }
    }
}
