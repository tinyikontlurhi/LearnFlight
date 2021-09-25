using System;
using service.organization.data;
using service.organization.interfaces;

namespace service.organization.Repository
{
    public class RepositoryWrapper : IRepositoryWrapper
    {

        private DataContext dataContext;
        private IOrganizationRepository organizationRepository;

        public IOrganizationRepository Organization
        {
            get
            {
                if (this.organizationRepository == null)
                {
                    this.organizationRepository = new OrganizationRepository(dataContext);
                }

                return this.organizationRepository;
            }
        }

        public void save()
        {
            this.dataContext.SaveChanges();
        }
    }
}
