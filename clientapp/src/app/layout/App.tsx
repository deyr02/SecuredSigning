import React from 'react';
import { Container } from 'semantic-ui-react';
import EmployeeListMain from '../../features/employee/employeeList/EmployeeListMain';
import './style.css';

function App() {
  return (
    <Container className = 'main-container'>
          <EmployeeListMain />
    </Container>
    
  );
}

export default App;
