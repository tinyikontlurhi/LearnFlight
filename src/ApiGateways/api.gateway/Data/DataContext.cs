using System;
using api.gateway.models;
using Microsoft.EntityFrameworkCore;

namespace api.gateway.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Province> provinces { get; set; }
        public DbSet<District> District { get; set; }

        public DbSet<Device> Devices { get; set; }

        public DbSet<Organization> Organizations { get; set;}
    }
}
