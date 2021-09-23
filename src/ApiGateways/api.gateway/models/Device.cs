using System;

namespace api.gateway.models
{
    public class Device
    {
        public int Id { get; set; }

        public string name { get; set; }

        public string status { get; set; }

        public string model { get; set; }

        public string manufacturer { get; set; }

        public string lastDataReceived { get; set; }

        public string imageURL { get; set; }

        public DateTime lastMaintenanceDate { get; set; }

        
    }
}