using Microsoft.EntityFrameworkCore;
using service.organization.models;

namespace service.organization.data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Organization> organization { get; set; }

        public DbSet<District> district { get; set; }

        public DbSet<Province> province { get; set; }

        public DbSet<Invoice> invoice { get; set; }
    }
}