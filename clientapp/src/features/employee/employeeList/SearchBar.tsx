import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import * as React from 'react';
import { FormField, Icon, Label } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

export default observer (function SearchBar(){
    const{employeeStore} = useStore();
   const validationSchema = Yup.object({
        employeeName:Yup.string().required("please input Employee name.")
    });
    return(
        <Formik
            initialValues = {{employeeName: ''}}
            validationSchema = {validationSchema}
            onSubmit= {(values)=>employeeStore.searchEmployee(values.employeeName) }
        >
              {({handleSubmit, isSubmitting, isValid, dirty})=>(

                <Form onSubmit={handleSubmit} autoComplete = "off" >
                    <FormField className="search-box">
                         <Field  name="employeeName" className= "search-input" placeholder='Search By Employee Name'/>
                         <Icon className="search-box-icon" name='search'  circular link onClick={handleSubmit}  type='submit'/>
                    </FormField>
                   
                     <ErrorMessage
                            name = "employeeName"
                            render= {error => <Label basic color='red' content= {error}/>}
                          />
                </Form>
            )}

        </Formik>
    )
});