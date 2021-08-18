function CreateEmployeeFormViewModel(){
    var self = this;

    self.firstName = ko.observable("").extend({
        required: true,
        minLength: 2,
        maxLength:50
    });
    self.lastName = ko.observable("").extend({
        required: true,
        minLength: 2,
        maxLength:50
    });


    self.fullAddress = ko.observable("").extend({
        required: true,
        minLength: 2,
        maxLength:250
    });
    self.maillingAddress = ko.observable("").extend({
        required: true,
        minLength: 2,
        maxLength:250
    });
    self.email = ko.observable("").extend({
        required: true,
        email:true
    });
    self.phoneNumber = ko.observable("").extend({
        required: true,
        minLength: 2,
        maxLength:50
    }).extend({pattern:{
        message: '"Please input a valid phone number (+xxxxxxxxxxxxx)"',
         params: /^(\+[0-9]{2,}[0-9]{4,}[0-9]*)(x?[0-9]{1,})?$/
    }});
    self.citizenshipStatus = ko.observable("").extend({
        required: true,
        minLength: 2,
        maxLength:50
    });
    self.employmentStartDate = ko.observable("").extend({
        required: true,
        minLength: 2,
        maxLength:50
    });
    self.employmentType = ko.observable("").extend({
        required: true,
        minLength: 2,
        maxLength:50
    });
    self.position = ko.observable("").extend({
        required: true,
        minLength: 2,
        maxLength:50
    });
    self.emergencyContactName = ko.observable("").extend({
        required: true,
        minLength: 2,
        maxLength:50
    });
    self.emergencyContactRelationship = ko.observable("").extend({
        required: true,
        minLength: 2,
        maxLength:50
    });
    self.emergencyConteactPhoneNUmber = ko.observable("").extend({
        required: true,
        minLength: 2,
        maxLength:50
    }).extend({pattern:{
        message: '"Please input a valid phone number (+xxxxxxxxxxxxx)"',
         params: /^(\+[0-9]{2,}[0-9]{4,}[0-9]*)(x?[0-9]{1,})?$/
    }});
    self.isSigned = ko.observable("").extend({
    equal: { params: true, message: 'You must accept the terms and conditions.' }
  });
   

    self.hasBeenSubmitted = ko.observable(false);

function uuid() {
  let bytes = window.crypto.getRandomValues(new Uint8Array(32));
  const randomBytes = () => (bytes = bytes.slice(1)) && bytes[0];

  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => 
      (c ^ randomBytes() & 15 >> c / 4).toString(16)
    );
}




async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}



    self.handleSubmit = function(){
        var errors = ko.validation.group(self);
        if(errors().length > 0){
            errors.showAllMessages();
            return;
        }

       // self.hasBeenSubmitted(true);
       //     "id": uuid(),
        //     "firstName": self.firstName(),
        //     "lastName": self.lastName(),
        //     "fullAddress": self.fullAddress(),
        //    "maillingAdress": self.maillingAddress(),
        //     "email": self.email(),
        //     "phoneNumber": self.phoneNumber(),
        //     "citizenshipStatus": self.citizenshipStatus(),
        //     "employmentStartDate": self.employmentStartDate(),
        //     "employmentType": self.employmentType(),
        //     "position": self.position(),
        //     "emergencyContactName": self.emergencyContactName(),
        //     "emergencyContactRelationship": self.emergencyContactRelationship(),
        //     "emergencyConteactPhoneNUmber": self.emergencyConteactPhoneNUmber,
        //     "isSigned": self.isSigned()

//          id: uuid(),
//   firstName: "Sam client-2",
//   lastName: "Smith",
//   fullAddress: "6/4 Mount view Road, Sandringham, Auckland, 1015, New Zealand",
//   maillingAdress: "6/4 Mount view Road, Sandringham, Auckland, 1015, New Zealand",
//   email: "sam_smith@email.com",
//   phoneNumber: "+6402102960832",
//   citizenshipStatus: "Pending",
//   employmentStartDate: new Date(),
//   employmentType: "Fulltime",
//   position: "Software developer",
//   emergencyContactName: "Will Smith",
//   emergencyContactRelationship: "Brother",
//   emergencyConteactPhoneNUmber: "+6402102960832",
//   isSigned: true

        console.log("submitting the form")
        var formData = {
   
 
       
            id: uuid(),
            firstName: self.firstName(),
            lastName: self.lastName(),
            fullAddress: self.fullAddress(),
            maillingAdress: self.maillingAddress(),
            email: self.email(),
            phoneNumber: self.phoneNumber(),
            citizenshipStatus: self.citizenshipStatus(),
            employmentStartDate: self.employmentStartDate(),
            employmentType: self.employmentType(),
            position: self.position(),
            emergencyContactName: self.emergencyContactName(),
            emergencyContactRelationship: self.emergencyContactRelationship(),
            emergencyConteactPhoneNUmber: self.emergencyConteactPhoneNUmber(),
            isSigned: self.isSigned()
            
        }
        
        console.log(formData)

    

            fetch('https://rdey-secured-signing.herokuapp.com/employee', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                })
                .then(response => response.json())
                .then(data => {
                console.log('Success:', data);
                })
                .catch((error) => {
                console.error('Error:', error);
            });

             self.hasBeenSubmitted(true);

   
    }
}


const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new CreateEmployeeFormViewModel(), knockoutApp);

//http://localhost:5000/employee application/json 538 - 200 - application/json;+charset=utf-8 30.3862ms