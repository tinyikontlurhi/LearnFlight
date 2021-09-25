using System;
using System.Linq;
using System.Linq.Expressions;
using System.Collections.Generic;

namespace service.organization.interfaces
{
    public interface IRepositoryBase<T>
    {
        IQueryable<T> findAll();
        IQueryable<T> findByCondition(Expression<Func<T, bool>> expression);
        void create(T entity);
        void update(T entity);
        void delete(T entity);
    }
}
