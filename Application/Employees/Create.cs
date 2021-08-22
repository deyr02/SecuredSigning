using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Employees
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Employee Employee { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Employee).SetValidator(new EmployeeValidator());
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                this._context = context;

            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var uniqueEmailCheck = await _context.Employees.FirstOrDefaultAsync(x => x.Email == request.Employee.Email);

                if (uniqueEmailCheck != null)
                {
                    return Result<Unit>.Failure("The email address is already registered");
                }

                _context.Employees.Add(request.Employee);

                var result = await _context.SaveChangesAsync() > 0;
                if (!result) return Result<Unit>.Failure("Failed to Create new Employee details");
                return Result<Unit>.Success(Unit.Value);

            }
        }

    }

}