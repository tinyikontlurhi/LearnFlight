using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using service.organization.data;
using service.organization.dtos;
using service.organization.services;

namespace service.organization.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly OrganizationService _organizationService;

        public AccountController(DataContext context, OrganizationService organizationService)
        {
            _context = context;
            _organizationService = organizationService;
        }

        [HttpPost("login")]
        public async Task<ActionResult<PayloadDTO>> login(LoginDTO loginDTO)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var organization = await _organizationService.Login(loginDTO);

            if (organization == null)
            {
                return Unauthorized("Invalid username or password");
            }

            return Ok(organization);

        }
    }
}