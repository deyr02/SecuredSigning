import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Container } from 'semantic-ui-react';
import About from '../../features/about/About';
import EmployeeDetailComponent from '../../features/employee/employeeDetails/EmployeeDetailComponent';
import EmployeeListMain from '../../features/employee/employeeList/EmployeeListMain';
import EmployeeForm from '../../features/employee/form/EmployeeForm';
import NotFound from '../../features/errors/NotFound';
import ServerError from '../../features/errors/ServerError';
import TestErrors from '../../features/errors/TestError';
import Home from '../../features/home/Home';
import ModalContainer from '../common/modalContainer';
import Navbar from './navbar/Navbar';
import './style.css';

function App() {
  return (
    <>
    <ToastContainer position='bottom-right' hideProgressBar/>
    <ModalContainer/>
    <Navbar></Navbar>
      <Container  style={{marginTop:'7em'}} >
          <Route exact path='/' component={Home}/>
          <Switch>
              <Route exact path='/employees' component={EmployeeListMain} />
              <Route  path='/create' component={EmployeeForm} />
              <Route  path='/edit/:id' component={EmployeeForm} />
              <Route  path='/details/:id' component={EmployeeDetailComponent} />
              <Route  path='/about' component={About} />
              <Route  path ='/errors' component={TestErrors} />
              <Route  path ='/server-error' component={ServerError} />
              <Route path='/not-found' component={NotFound}/>
          </Switch>
           
            
      </Container>
    </>
    
  );
}

export default App;
