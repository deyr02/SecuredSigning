import { ErrorMessage, Field, Formik } from 'formik';
import { values } from 'mobx';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Form, FormField, Header, Label, Segment } from 'semantic-ui-react';
import { date, string } from 'yup/lib/locale';
import { Employee } from '../../../app/models/employee';
import { useStore } from '../../../app/stores/store';
import * as Yup from "yup";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import CustomDateInput from '../../../app/form/CustomDateInput';
import CustomCheckBox from '../../../app/form/CustomCheckBox';
import CustomTextInput from '../../../app/form/CustomTextInput';
import CustomSelectInput from '../../../app/form/CustomSelectInput';
import {v4 as uuid} from "uuid";

export default observer(function EmployeeForm(){

    const[employee, setEmployee] = useState<Employee>(new Employee());
   // const{id} =useParams<{id:string}>();
    const {employeeStore} = useStore();
    const {loadSelectedEmployee, getSelectedEmployee} = employeeStore;
     const employmentType = [
        {text: 'Full Time', value: 'Full-time'},
        {text: 'Part Time', value: 'Part-time'},
        {text: 'Casual', value: 'Casual'},
        
    ]

    const validationSchema = Yup.object({
        
        firstName: Yup.string().max(50, "First name should be below 50 characters")
            .required("Please input first name."),
        lastName: Yup.string().max(50, "Last name should be below 50 characters")
            .required("Please input last name."),
        fullAddress: Yup.string().required("please input full Address.").max(250, "Full address should be below 250 characters"),
        maillingAdress: Yup.string().required("please input mailling Address.").max(250, "Mailing address should be below 250 characters"),
        email: Yup.string().email().required("Please input your email address"),
        phoneNumber: Yup.string().required("Please input your phone number")
            .matches(/^(\+[0-9]{2,}[0-9]{4,}[0-9]*)(x?[0-9]{1,})?$/, "Please input a valid phone number"),
        citizenshipStatus : Yup.string().max (50, "CitizenShip Status shoulc be below 50 characters")
            .required("Pleasse input your citizenship status"),
        employmentStartDate: Yup.date().required("Please input employment start Date").nullable(),
        employmentType: Yup.string().required("Please select employment type"),
        position: Yup.string(). required("Please input position").max(50, "Position should be below 50 characters"),
        emergencyContactName: Yup.string().required("Please input emergency contact Name")
            .max(50, "Emergency contact name should be below 50 characters."),
        emergencyContactRelationship:Yup.string().required("Please input relationship with emergency contact ")
            .max(50, "Emergency contact relationship should be below 50 characters."),
        emergencyConteactPhoneNUmber: Yup.string().required("Please input your phone number")
            .matches(/^(\+[0-9]{2,}[0-9]{4,}[0-9]*)(x?[0-9]{1,})?$/, "Please input a valid phone number"),
        isSigned: Yup.boolean().isTrue("You need to accept terms and conditions").required( "You need to accept terms and conditions")
        
    });

 

    useEffect( ()=>{
       employeeStore.loadSelectedEmployee("7ac6a0ab-905c-406a-8b54-246983c1e6e8").then(() => setEmployee(new Employee(employeeStore.getSelectedEmployee)));
         
    }, [employeeStore])

    function handleFormSubmit(emp:Employee) {
        if (emp.id === '') {
            emp.id = uuid();
            employeeStore.createEmployee(emp);
            console.log(emp)
            // createActivity(newActivity).then(() => history.push(`/activities/${newActivity.id}`))
        } else {
           // updateActivity(activity).then(() => history.push(`/activities/${activity.id}`))
           employeeStore.updateEmployee(emp);
        }
    }
   

    return(
        <Segment clearing>
            <Header size='huge' content = "Employee info" sub color="teal"/>
            <Formik
                validationSchema = {validationSchema}
                enableReinitialize = {true}
                initialValues = {employee}
            
                
            
                onSubmit = {(values)=> handleFormSubmit(values) }
            >
                {({handleSubmit, isValid, isSubmitting, errors, dirty})=>(

                    <Form
                     className='ui form' 
                     onSubmit={handleSubmit}  
                     autoComplete='off'
                    >
                      
                         <CustomTextInput placeholder="FirstName" name = "firstName"  label="First Name"/>
                        <CustomTextInput placeholder="Last name" name = "lastName" label= "Last Name"/>
                        <CustomTextInput  placeholder="Full Address" name = "fullAddress" label= "Full Address"/>
                        <CustomTextInput  placeholder="Mailling Address" name = "maillingAdress" label= "Mailling Address"/>
                        <CustomTextInput  placeholder="Eamil" name = "email" label= "Email"/>
                        <CustomTextInput  placeholder="Phone Number with country code (+xxxxxxxx)" name = "phoneNumber" label="Phone Number"/>
                        <CustomTextInput placeholder="Citizenship Status" name = "citizenshipStatus" label= "Citizenship Status"/>
                        <CustomDateInput placeholderText = "Employment start date" dateFormat="dd-MM-yyyy"  name = "employmentStartDate" />                            
                        <CustomSelectInput options={employmentType} placeholder="Employement Type" name = "employmentType" label="Employment Type"/>
                        <CustomTextInput placeholder="Position" name = "position" label="Position"/>
                        
                         <Header size="huge" content = "Emergency contact details" sub color="teal"/>
                        <CustomTextInput placeholder="Emergency Contact Name" name = "emergencyContactName" label="Name"/>
                        <CustomTextInput placeholder="Relationship" name = "emergencyContactRelationship" label="Relation"/>
                        <CustomTextInput placeholder="Contact Number" name = "emergencyConteactPhoneNUmber" label = "Contact Number"/>

                        <CustomCheckBox placeholder="Is Signed" name = "isSigned" type="checkbox" label= "(Terms and Condition)"/>

                        <Button
                            disabled = {isSubmitting ||!dirty ||!isValid}
                            loading={isSubmitting} floated="right"
                            positive type='submit' content= "Submit"
                        />
                        <Button floated='right' type='button' content="Cancel"/>


                    </Form>
                )}


            </Formik>

        </Segment>
    )
})