using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace service.organization.models
{
    public class Organization
    {

        public int Id { get; set; }

        public string name { get; set; }

        public string email { get; set; }

        public string phone { get; set; }

        public string address { get; set; }

        public byte[] passwordHash { get; set; }

        public byte[] passwordSalt { get; set; }

        public DateTime lastLogin { get; set; }

        public ICollection<Invoice> invoices { get; set; }

        public ICollection<Account> accounts { get; set; }

        public ICollection<Contact> contacts { get; set; }

        public ICollection<Credits> credits { get; set; }
    }
}
