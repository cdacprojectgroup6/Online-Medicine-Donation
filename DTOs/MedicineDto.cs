using System;

namespace OnlineMedicineDonationAPI_New.DTOs
{
    public class MedicineDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime ExpiryDate { get; set; }
        public int Quantity { get; set; }
        public int DonorID { get; set; }
    }
}
