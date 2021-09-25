using System;
using service.organization.data;
using service.organization.interfaces;
using service.organization.models;

namespace service.organization.Repository
{
    public class OrganizationRepository : RepositoryBase<Organization>, IOrganizationRepository
    {
       public OrganizationRepository(DataContext dataContext): base(dataContext)
        {

        }
    }
}
