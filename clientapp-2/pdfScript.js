
function employeeDataViewModel(){
    self.fullName = ko.observable("");
    self.fullAddress = ko.observable("");
    self.maillingAddress = ko.observable("");
    self.email = ko.observable("");
    self.phoneNumber = ko.observable("");
    self.citizenshipStatus = ko.observable("");
    self.employmentStartDate = ko.observable("");
    self.employmentType = ko.observable("");
    self.position = ko.observable("");
    self.emergencyContactName = ko.observable("");
    self.emergencyContactRelationship = ko.observable("");
    self.emergencyConteactPhoneNUmber = ko.observable("");
    self.isSigned = ko.observable("");

    self.emplyyeeObject = ko.observable({});

    self.customBind= function(_emplyeeObject){
        self.fullName(_emplyeeObject.firstName +" "+ _emplyeeObject.lastName);
        self.fullAddress(_emplyeeObject.fullAddress);
        self.maillingAddress(_emplyeeObject.maillingAddress);
        self.email(_emplyeeObject.email);
        self.phoneNumber(_emplyeeObject.phoneNumber);
        self.citizenshipStatus(_emplyeeObject.citizenshipStatus);
        self.employmentStartDate(_emplyeeObject.employmentStartDate.toString().split('T')[0]);
        self.employmentType(_emplyeeObject.employmentType);
        self.position(_emplyeeObject.position);
        self.emergencyContactName(_emplyeeObject.emergencyContactName);
        self.emergencyContactRelationship(_emplyeeObject.emergencyContactRelationship);
        self.emergencyConteactPhoneNUmber(_emplyeeObject.emergencyConteactPhoneNUmber);
        self.isSigned(_emplyeeObject.isSigned?"Digitally signed by acceptiing 'terms and condition'.": "Not Signed")
    }

    self.getEmployeeData = function(){
        const Id = '7323f6e4-d15d-491a-af58-c6f7926f9930';  //localStorage.getItem("secured_sigining_employee_id");
        $.ajax({
            url:`https://rdey-secured-signing.herokuapp.com/employee/${Id}`,
            dataType:'json'
         }).done(function(data){
             self.emplyyeeObject(data);
             customBind(data);
            console.log(data);
         }).error(function(error){
            console.log(error);
         });

    }
    self.getEmployeeData();
   
}

const pdfDownloader = document.querySelector("#knockout-pdf");
    const pdfViewModel = new employeeDataViewModel();
    pdfViewModel.getEmployeeData;
    ko.applyBindings(pdfViewModel, pdfDownloader);
$(document).ready( function(){
    
});
