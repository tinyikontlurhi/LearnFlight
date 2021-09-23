using System.ComponentModel.DataAnnotations;

namespace api.gateway.DTOs
{
    public class OrganizationDTO
    {
        [Required]
        public string name { get; set; }

        [Required]
        public string email { get; set; }

        [Required]
        public string phone { get; set; }

        [Required]
        public string address { get; set;}

        public string password { get; set;}
    }
}