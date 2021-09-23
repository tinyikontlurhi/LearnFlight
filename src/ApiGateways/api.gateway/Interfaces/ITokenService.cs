using api.gateway.models;

namespace api.gateway.Interfaces
{
    public interface ITokenService
    {
         string CreateToken(Organization organization);
    }
}