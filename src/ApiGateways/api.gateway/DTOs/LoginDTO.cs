using System.ComponentModel.DataAnnotations;

namespace api.gateway.DTOs
{
    public class LoginDTO
    {
        [Required]
        public string email { get; set; }

        [Required]
        public string password { get; set; }
    }
}