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
                        PhoneNumber= "02102960832",
                        CitizenshipStatus= "Pending",
                        EmploymentStartDate= DateTime.Now,
                        EmploymentType= "FullTime",
                        Position= "Software developer",
                        EmergencyContactName= "Will Smith",
                        EmergencyContactRelationship= "Brother",
                        EmergencyConteactPhoneNUmber= "02102960832",
                        IsSigned= true,
                    },
                    new Employee
                    {
                        FirstName= "Will",
                        LastName= "Smith",
                        FullAddress= "6/4 Mount view Road, Sandringham, Auckland, 1015, New Zealand",
                        MaillingAdress= "6/4 Mount view Road, Sandringham, Auckland, 1015, New Zealand",
                        Email= "sam_smith@email.com",
                        PhoneNumber= "02102960832",
                        CitizenshipStatus= "Pending",
                        EmploymentStartDate= DateTime.Now,
                        EmploymentType= "FullTime",
                        Position= "Software developer",
                        EmergencyContactName= "Sam Smith",
                        EmergencyContactRelationship= "Brother",
                        EmergencyConteactPhoneNUmber= "02102960832",
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