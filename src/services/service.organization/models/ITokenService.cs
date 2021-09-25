using System;
namespace service.organization.models
{
    public interface ITokenService
    {
        string CreateToken(Organization organization);
    }
}
