using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Employees
{
    public class Details
    {
        public class Query : IRequest<Result<Employee>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<Employee>>
        {
            private readonly DataContext _dataContext;
            public Handler(DataContext dataContext)
            {
                this._dataContext = dataContext;
            }

            public async Task<Result<Employee>> Handle(Query request, CancellationToken cancellationToken)
            {
                var employee = await _dataContext.Employees.FindAsync(request.Id);
                return Result<Employee>.Success(employee);
            }
        }
    }
}