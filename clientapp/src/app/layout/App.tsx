import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import About from '../../features/about/About';
import EmployeeDetailComponent from '../../features/employee/employeeDetails/EmployeeDetailComponent';
import EmployeeListMain from '../../features/employee/employeeList/EmployeeListMain';
import EmployeeForm from '../../features/employee/form/EmployeeForm';
import Home from '../../features/home/Home';
import ModalContainer from '../common/modalContainer';
import Navbar from './navbar/Navbar';
import './style.css';

function App() {
  return (
    <>
    <ModalContainer/>
    <Navbar></Navbar>
      <Container  style={{marginTop:'7em'}} >
          <Route exact path='/' component={Home}/>
          <Switch>
              <Route exact path='/employees' component={EmployeeListMain} />
              <Route exact path='/create' component={EmployeeForm} />
              <Route exact path='/edit/:id' component={EmployeeForm} />
              <Route exact path='/details/:id' component={EmployeeDetailComponent} />
              <Route exact path='/about' component={About} />
            
          </Switch>
            {/* <EmployeeListMain /> */}
            {/* <EmployeeDetailComponent/> */}
            {/* <EmployeeForm/> */}
            
      </Container>
    </>
    
  );
}

export default App;
