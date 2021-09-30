using System;
namespace service.organization.models
{
    public class Contact
    {
        public int Id { get; set; }

        public string phone { get; set; }

        public string email { get; set; }

        public string firstName { get; set; }

        public string address { get; set; }

        public string province { get; set; }

        public string country { get; set; }

        public string companyName { get; set; }

        public Organization organization { get; set; }
    }
}
