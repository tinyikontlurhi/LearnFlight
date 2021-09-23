using System;
using System.Collections.Generic;

namespace api.gateway.models
{
    public class Organization
    {
        public int Id { get; set;}

        public string name { get; set; }

        public string email { get; set; }

        public string phone { get; set; }
        public string address { get; set;}

        public virtual ICollection<District> districts { get; set; }
        public byte[] passwordHash { get; set; }

        public byte[] passwordSalt { get; set; }
        
        public DateTime lastLogin { get; set; }
    }
}