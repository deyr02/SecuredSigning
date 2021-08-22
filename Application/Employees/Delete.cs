using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using MediatR;
using Persistence;

namespace Application.Employees
{
    public class Delete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _dataContext;
            public Handler(DataContext dataContext)
            {
                this._dataContext = dataContext;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var employee = await _dataContext.Employees.FindAsync(request.Id);
                // if(employee == null) return null;

                _dataContext.Employees.Remove(employee);
                var result = await _dataContext.SaveChangesAsync() > 0;
                if (!result) return Result<Unit>.Failure("Faild to delete Employee details");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}