using System;

namespace OnlineMedicineDonationAPI_New.Models
{
    public class Request
    {
        public int RequestID { get; set; }
        public int NGOID { get; set; }
        public string MedicineName { get; set; }
        public int Quantity { get; set; }
        public DateTime RequestDate { get; set; }
        public string Status { get; set; }  // Pending / Approved / Rejected
        public NGO NGO { get; set; }
    }
}
