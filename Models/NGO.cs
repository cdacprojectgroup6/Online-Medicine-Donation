namespace OnlineMedicineDonationAPI_New.Models
{
    public class NGO
    {
        public int NGOID { get; set; }
        public int UserID { get; set; }
        public string OrganizationName { get; set; }
        public string Address { get; set; }
        public ICollection<Request> Requests { get; set; }
        public string Status { get; set; } = "Pending"; // Approved, Rejected

    }
}
