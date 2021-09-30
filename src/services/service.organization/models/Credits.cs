using System;
namespace service.organization.models
{
    public class Credits
    {
        public int Id { get; set; }

        public DateTime expirationDate { get; set; }

        public string creditName { get; set; }

        public double amountUsed { get; set; }

        public double amountRemaining { get; set; }

        public Organization organization { get; set; }
    }
}
