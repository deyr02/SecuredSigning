import React from 'react';
import { Container } from 'semantic-ui-react';
import EmployeeDetailComponent from '../../features/employee/employeeDetails/EmployeeDetailComponent';
import EmployeeListMain from '../../features/employee/employeeList/EmployeeListMain';
import './style.css';

function App() {
  return (
    <Container className = 'main-container'>
          {/* <EmployeeListMain /> */}
          <EmployeeDetailComponent/>
    </Container>
    
  );
}

export default App;
