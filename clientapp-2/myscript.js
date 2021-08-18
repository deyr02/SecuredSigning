function CreateEmployeeFormViewModel(){
    var self = this;
    
    self.webActivity = ko.observable('');
    self.webData = ko.observable({});

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

    function setEmployee( value){
        window.localStorage.setItem(
            "secured_sigining_employee_id", value
        );
    }





    self.handleSubmit = function(){
        var errors = ko.validation.group(self);
        if(errors().length > 0){
            errors.showAllMessages();
            return;
        }

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
            self.webActivity("Form is being submitted.")

           setTimeout(() => {
                fetch('https://rdey-secured-signing.herokuapp.com/employee', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                })
                .then(response => response.json())
                .then(data => {
                    self.webActivity('Form data have been submitted.')
                    self.hasBeenSubmitted(true);
                    //savign id in the local store
                    //so that it can be retrieve in the pdfdoenload page.
                    setEmployee(formData.id);
                    console.log('Success:', data);

                })
                .catch((error) => {
                console.error('Error:', error);
                self.webActivity('Form data could not saved.')

            });

           }, 2000);
             

   
    }
}


const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new CreateEmployeeFormViewModel(), knockoutApp);


