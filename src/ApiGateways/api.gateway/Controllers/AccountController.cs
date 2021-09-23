using System.Threading.Tasks;
using api.gateway.Data;
using api.gateway.DTOs;
using api.gateway.services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Xplora_Api.DTOs;

namespace api.gateway.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly OrganizationService _organizationService;
        
        public AccountController(DataContext context, OrganizationService organizationService) {
            _context = context;
            _organizationService = organizationService;
        }

        [HttpPost("login")]
        public async Task<ActionResult<PayloadDTO>> login(LoginDTO loginDTO) {
            if (!ModelState.IsValid)
                return BadRequest();

            var organization = await _organizationService.Login(loginDTO);

            if (organization == null) {
                return Unauthorized("Invalid username or password");
            }

            return Ok(organization);

        }
       
    }
}