using System;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using service.organization.data;
using service.organization.dtos;
using service.organization.models;

namespace service.organization.services
{
    public class OrganizationService : ControllerBase
    {
        private readonly DataContext _context;

        private readonly ITokenService _tokenService;

        public OrganizationService(DataContext context, ITokenService tokenService)
        {
            _context = context;
            _tokenService = tokenService;
        }

        public async Task<IActionResult> PostOrganization(OrganizationDTO organization)
        {

            try
            {
                if (await OrganizationExists(organization.email))
                {
                    return BadRequest("Account already exists. Please use different details");
                }

                using var hmac = new HMACSHA512();

                var newOrganization = new Organization
                {
                    name = organization.name,
                    email = organization.email,
                    phone = organization.phone,
                    address = organization.address,
                    passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(organization.password)),
                    passwordSalt = hmac.Key
                };

                _context.organization.Add(newOrganization);
                await _context.SaveChangesAsync();

                return Ok( new PayloadDTO {
                    email = organization.email,
                    token = _tokenService.CreateToken(newOrganization)
                });

            }
            catch (Exception ex)
            {
                System.Console.WriteLine(ex.Message);
                return StatusCode(500);
            }
        }

        private async Task<bool> OrganizationExists(string email)
        {
            return await _context.organization.AnyAsync(x => x.email == email.ToLower());
        }

        public async Task<PayloadDTO> Login(LoginDTO loginDTO)
        {

            var organization = await _context.organization.SingleOrDefaultAsync(x => x.email == loginDTO.email.ToLower());

            if (organization == null)
            {
                return null;
            }

            using var hmac = new HMACSHA512(organization.passwordSalt);

            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDTO.password));

            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != organization.passwordHash[i])
                {
                    return null;
                }
            }

            return new PayloadDTO
            {
                id = organization.Id,
                name = organization.name,
                email = loginDTO.email,
                token = _tokenService.CreateToken(organization)
            };
        }
    }
}
