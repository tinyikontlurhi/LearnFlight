using System;
using service.organization.interfaces;

namespace service.organization.Repository
{
    public interface IRepositoryWrapper
    {
        IOrganizationRepository Organization { get; }

        void save();

    }
}
