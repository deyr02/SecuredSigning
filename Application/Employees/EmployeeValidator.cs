using Domain;
using FluentValidation;

namespace Application.Employees
{
    public class EmployeeValidator : AbstractValidator<Employee>
    {
        public EmployeeValidator()
        {
            RuleFor(x=> x.FirstName).NotEmpty();
            RuleFor(x=> x.LastName).NotEmpty();
            RuleFor(x=> x.FullAddress).NotEmpty();
            RuleFor(x=> x.MaillingAdress).NotEmpty();
            RuleFor(x=> x.Email).NotEmpty();
            RuleFor(x=> x.PhoneNumber).NotEmpty();
            RuleFor(x=> x.CitizenshipStatus).NotEmpty();
            RuleFor(x=> x.EmploymentStartDate).NotEmpty();
            RuleFor(x=> x.EmploymentType).NotEmpty();
            RuleFor(x=> x.Position).NotEmpty();
            RuleFor(x=> x.EmergencyContactName).NotEmpty();
            RuleFor(x=> x.EmergencyConteactPhoneNUmber).NotEmpty();
            RuleFor(x=> x.EmergencyContactRelationship).NotEmpty();
            RuleFor(x=> x.IsSigned).NotEmpty();
        }
    }
}