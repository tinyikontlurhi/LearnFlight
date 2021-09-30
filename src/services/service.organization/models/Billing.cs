using System;
namespace service.organization.models
{
    public class Billing
    {
        public int Id { get; set; }

        public int service_id { get; set; }

        public Invoice invoice { get; set; }

        public DateTime issueDate { get; set; }

        public double total { get; set; }

    }
}
