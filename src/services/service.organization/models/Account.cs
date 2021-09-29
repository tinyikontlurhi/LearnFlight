using System;
namespace service.organization.models
{
    public class Account
    {
        public int Id { get; set; }

        public byte[] cardNumberHash { get; set; }

        public byte[] cardNumberSalt { get; set; }

        public string cardName { get; set; }

        public string expires { get; set; }

        public bool isActive { get; set; }

        public Organization organization { get; set; }
    }
}
