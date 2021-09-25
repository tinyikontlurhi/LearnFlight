using System;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using service.organization.data;
using service.organization.interfaces;

namespace service.organization.Repository
{
    public class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {
        public DataContext dataContext { get; set; }

        public RepositoryBase(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        public IQueryable<T> findAll()
        {
            return dataContext.Set<T>().AsNoTracking();
        }

        public IQueryable<T> findByCondition(Expression<Func<T, bool>> expression)
        {
            return dataContext.Set<T>().Where(expression).AsNoTracking();
        }

        public void create(T entity)
        {
            dataContext.Set<T>().Add(entity);
        }

        public void update(T entity)
        {
            dataContext.Set<T>().Update(entity);
        }

        public void delete(T entity)
        {
            dataContext.Set<T>().Remove(entity);
        }
    }
}
