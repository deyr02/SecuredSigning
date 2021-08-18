using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (!context.Employees.Any())
            {
                var employees = new List<Employee>(){
                    new Employee
                    {
                        FirstName= "Sam",
                        LastName= "Smith",
                        FullAddress= "6/4 Mount view Road, Sandringham, Auckland, 1015, New Zealand",
                        MaillingAdress= "6/4 Mount view Road, Sandringham, Auckland, 1015, New Zealand",
                        Email= "sam_smith@email.com",
                        PhoneNumber= "+6402102960832",
                        CitizenshipStatus= "Pending",
                        EmploymentStartDate= DateTime.Now,
                        EmploymentType= "Fulltime",
                        Position= "Software developer",
                        EmergencyContactName= "Will Smith",
                        EmergencyContactRelationship= "Brother",
                        EmergencyConteactPhoneNUmber= "+6402102960832",
                        IsSigned= true,
                    },
                    new Employee
                    {
                        FirstName= "Will",
                        LastName= "Smith",
                        FullAddress= "6/4 Mount view Road, Sandringham, Auckland, 1015, New Zealand",
                        MaillingAdress= "6/4 Mount view Road, Sandringham, Auckland, 1015, New Zealand",
                        Email= "sam_smith@email.com",
                        PhoneNumber= "+6402102960832",
                        CitizenshipStatus= "Pending",
                        EmploymentStartDate= DateTime.Now,
                        EmploymentType= "Fulltime",
                        Position= "Software developer",
                        EmergencyContactName= "Sam Smith",
                        EmergencyContactRelationship= "Brother",
                        EmergencyConteactPhoneNUmber= "+6402102960832",
                        IsSigned= true,
                    },
                     new Employee
                    {
                        FirstName= "Jane",
                        LastName= "Smith",
                        FullAddress= "6/4 Mount view Road, Sandringham, Auckland, 1015, New Zealand",
                        MaillingAdress= "6/4 Mount view Road, Sandringham, Auckland, 1015, New Zealand",
                        Email= "jane_smith@email.com",
                        PhoneNumber= "+6402102960832",
                        CitizenshipStatus= "Pending",
                        EmploymentStartDate= DateTime.Now,
                        EmploymentType= "Fulltime",
                        Position= "Software developer",
                        EmergencyContactName= "Sam Smith",
                        EmergencyContactRelationship= "Brother",
                        EmergencyConteactPhoneNUmber= "+6402102960832",
                        IsSigned= true,
                    },
                     new Employee
                    {
                        FirstName= "jacob",
                        LastName= "Smith",
                        FullAddress= "6/4 Mount view Road, Sandringham, Auckland, 1015, New Zealand",
                        MaillingAdress= "6/4 Mount view Road, Sandringham, Auckland, 1015, New Zealand",
                        Email= "sam_smith@email.com",
                        PhoneNumber= "+6402102960832",
                        CitizenshipStatus= "Pending",
                        EmploymentStartDate= DateTime.Now,
                        EmploymentType= "Fulltime",
                        Position= "Software developer",
                        EmergencyContactName= "Sam Smith",
                        EmergencyContactRelationship= "Brother",
                        EmergencyConteactPhoneNUmber= "+6402102960832",
                        IsSigned= true,
                    },
                     new Employee
                    {
                        FirstName= "David",
                        LastName= "Smith",
                        FullAddress= "6/4 Mount view Road, Sandringham, Auckland, 1015, New Zealand",
                        MaillingAdress= "6/4 Mount view Road, Sandringham, Auckland, 1015, New Zealand",
                        Email= "sam_smith@email.com",
                        PhoneNumber= "+6402102960832",
                        CitizenshipStatus= "Pending",
                        EmploymentStartDate= DateTime.Now,
                        EmploymentType= "Fulltime",
                        Position= "Software developer",
                        EmergencyContactName= "Sam Smith",
                        EmergencyContactRelationship= "Brother",
                        EmergencyConteactPhoneNUmber= "+6402102960832",
                        IsSigned= true,
                    },
                     new Employee
                    {
                        FirstName= "Jhon",
                        LastName= "Smith",
                        FullAddress= "6/4 Mount view Road, Sandringham, Auckland, 1015, New Zealand",
                        MaillingAdress= "6/4 Mount view Road, Sandringham, Auckland, 1015, New Zealand",
                        Email= "sam_smith@email.com",
                        PhoneNumber= "+6402102960832",
                        CitizenshipStatus= "Pending",
                        EmploymentStartDate= DateTime.Now,
                        EmploymentType= "Fulltime",
                        Position= "Software developer",
                        EmergencyContactName= "Sam Smith",
                        EmergencyContactRelationship= "Brother",
                        EmergencyConteactPhoneNUmber= "+6402102960832",
                        IsSigned= true,
                    },
                     new Employee
                    {
                        FirstName= "William",
                        LastName= "Smith",
                        FullAddress= "6/4 Mount view Road, Sandringham, Auckland, 1015, New Zealand",
                        MaillingAdress= "6/4 Mount view Road, Sandringham, Auckland, 1015, New Zealand",
                        Email= "sam_smith@email.com",
                        PhoneNumber= "+6402102960832",
                        CitizenshipStatus= "Pending",
                        EmploymentStartDate= DateTime.Now,
                        EmploymentType= "Fulltime",
                        Position= "Software developer",
                        EmergencyContactName= "Sam Smith",
                        EmergencyContactRelationship= "Brother",
                        EmergencyConteactPhoneNUmber= "+6402102960832",
                        IsSigned= true,
                    }
                };


                foreach (var emp in employees)
                {
                    context.Employees.Add(emp);
                }
                await context.SaveChangesAsync();
            }
        }
    }
}