using System;
namespace service.organization.models
{
    public class District
    {
        public int Id { get; set; }

        public string code { get; set; }

        public string name { get; set; }

        public string seat { get; set; }

        public string area { get; set; }

        public long population { get; set; }

        public double populationDensity { get; set; }
    }
}
