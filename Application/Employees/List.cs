using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Employees
{
    public class List
    {
        public class Query : IRequest<Result<List<Employee>>>
        {

        }

        public class Handler : IRequestHandler<Query, Result<List<Employee>>>
        {
            private readonly DataContext _dataContext;
            public Handler(DataContext dataContext)
            {
                this._dataContext = dataContext;
            }

            public async Task<Result<List<Employee>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Employee>>.Success(await _dataContext.Employees.ToListAsync(cancellationToken));
            }
        }
    }
}