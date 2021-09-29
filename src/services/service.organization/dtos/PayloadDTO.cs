using System;
namespace service.organization.dtos
{
    public class PayloadDTO
    {
        public int id { get; set;}
        public string name { get; set; }

        public string email { get; set; }

        public string token { get; set; }
    }
}
