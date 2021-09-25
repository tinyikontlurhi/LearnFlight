using System;
using System.ComponentModel.DataAnnotations;

namespace service.organization.dtos
{
    public class LoginDTO
    {
        [Required(ErrorMessage = "Organization email is required")]
        public string email { get; set; }

        [Required(ErrorMessage = "Organization password is required")]
        public string password { get; set; }
    }
}
