
export interface Employee{
       id: string;
        firstName: string;
        lastName: string;
        fullAddress: string;
        maillingAdress: string;
        email: string;
        phoneNumber: string;
        citizenshipStatus: string;
        employmentStartDate: Date;
        employmentType: string;
        position: string;
        emergencyContactName: string;
        emergencyContactRelationship: string;
        emergencyConteactPhoneNUmber: string;
        isSigned: boolean;
}

export class Employee implements Employee{
        id = '';
        firstName = "";
        lastName = "";
        fullAddress = "";
        maillingAdress = "";
        email = "";
        phoneNumber = "";
        citizenshipStatus = "";
        employmentStartDate = new Date();
        employmentType = "";
        position = "";
        emergencyContactName = "";
        emergencyContactRelationship = "";
        emergencyConteactPhoneNUmber = "";
        isSigned = false;

        constructor(emp?:Employee){
                if(emp){
                        this.id = emp.id;
                        this.firstName = emp.firstName
                        this.lastName = emp.lastName;
                        this.fullAddress = emp.fullAddress;
                        this.maillingAdress = emp.maillingAdress;
                        this.email = emp.email;
                        this.phoneNumber = emp.phoneNumber;
                        this.citizenshipStatus = emp.citizenshipStatus;
                        this.employmentStartDate = new Date( emp.employmentStartDate);
                        this.employmentType = emp.employmentType;
                        this.position = emp.position;
                        this.emergencyContactName = emp.emergencyContactName;
                        this.emergencyContactRelationship = emp.emergencyContactRelationship;
                        this.emergencyConteactPhoneNUmber = emp.emergencyConteactPhoneNUmber;
                        this.isSigned = emp.isSigned;
                }
                

        }
        
}

