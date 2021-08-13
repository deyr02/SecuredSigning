using System;
namespace Domain
{
    public class Employee
    {

        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullAddress { get; set; }
        public string MaillingAdress { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string CitizenshipStatus { get; set; }
        public DateTime EmploymentStartDate { get; set; }
        public string EmploymentType { get; set; }
        public string Position { get; set; }

        public string EmergencyContactName { get; set; }
        public string EmergencyContactRelationship { get; set; }
        public string EmergencyConteactPhoneNUmber { get; set; }

        public bool IsSigned { get; set; }


    }
}