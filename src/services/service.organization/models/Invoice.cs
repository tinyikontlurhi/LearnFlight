using System;
namespace service.organization.models
{
    public class Invoice
    {
        public int Id { get; set; }

        public DateTime issueDate { get; set; }

        public DateTime dueDate { get; set; }

        public string type { get; set; }

        public string status { get; set; }

        public string currency { get; set; }

        public double amount { get; set; }

        public string billingPeriod { get; set; }

        public Organization organization { get; set; }

    }
}
