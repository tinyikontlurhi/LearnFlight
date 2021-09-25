using System;
using System.ComponentModel.DataAnnotations;

namespace service.organization.dtos
{
    public class OrganizationDTO
    {
        [Required(ErrorMessage = "Organization name is required")]
        public string name { get; set; }

        [Required(ErrorMessage = "Organization email is required")]
        public string email { get; set; }

        [Required(ErrorMessage = "Organization phone is required")]
        public string phone { get; set; }

        [Required(ErrorMessage = "Organization address is required")]
        public string address { get; set; }

        [Required(ErrorMessage = "Organization password is required")]
        public string password { get; set; }
    }
}
