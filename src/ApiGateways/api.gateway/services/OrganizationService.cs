using System;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using api.gateway.Data;
using api.gateway.DTOs;
using api.gateway.Interfaces;
using api.gateway.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Xplora_Api.DTOs;

namespace api.gateway.services
{
    public class OrganizationService
    {
        private readonly DataContext _context;

        private readonly ITokenService _tokenService;

        public OrganizationService(DataContext context, ITokenService tokenService) {
            _context = context;
            _tokenService = tokenService;
        }

        public async Task<PayloadDTO> PostOrganization(OrganizationDTO organization) {
            
            try {
                if (await OrganizationExists(organization.email)) {
                    return null;
                }

                using var hmac = new HMACSHA512();
                    
                var newOrganization = new Organization {
                    name = organization.name,
                    email = organization.email,
                    phone = organization.phone,
                    address = organization.address,
                    passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(organization.password)),
                    passwordSalt = hmac.Key
                };

                _context.Organizations.Add(newOrganization);
                await _context.SaveChangesAsync();

                return new PayloadDTO {
                    email = organization.email,
                    token = _tokenService.CreateToken(newOrganization)
                };

            } catch (Exception ex) {
                Console.WriteLine(ex.Message);
                return null;
            }
        }

         private async Task<bool> OrganizationExists(string email) {
            return await _context.Organizations.AnyAsync(x => x.email == email.ToLower());
        }

        public async Task<PayloadDTO> Login(LoginDTO loginDTO) {

            var organization = await _context.Organizations.SingleOrDefaultAsync(x => x.email == loginDTO.email.ToLower());

            if (organization == null) {
                return null;
            }

            using var hmac = new HMACSHA512(organization.passwordSalt);

            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDTO.password));

            for (int i = 0; i < computedHash.Length; i++) {
                if(computedHash[i] != organization.passwordHash[i]) {
                    return null;
                }
            }

            return new PayloadDTO {
                name = organization.name,
                email = loginDTO.email,
                token = _tokenService.CreateToken(organization)
            };
        }
    }
}