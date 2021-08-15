import React from 'react';
import { Container } from 'semantic-ui-react';
import EmployeeDetailComponent from '../../features/employee/employeeDetails/EmployeeDetailComponent';
import EmployeeListMain from '../../features/employee/employeeList/EmployeeListMain';
import EmployeeForm from '../../features/employee/form/EmployeeForm';
import './style.css';

function App() {
  return (
    <Container className = 'main-container'>
          {/* <EmployeeListMain /> */}
          {/* <EmployeeDetailComponent/> */}
          <EmployeeForm/>
    </Container>
    
  );
}

export default App;
