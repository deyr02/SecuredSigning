import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Button, List } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import MessageComponent from '../../appMessage/MessageComponent';

export default observer( function EmployeeTable(){
    const{employeeStore, modalStore}= useStore();
    return (
    
        <List divided animated verticalAlign= 'middle' >
            {
                employeeStore.getEmployeeRegistry.map(employee =>(
                    <div key={ employee.id} className='employee-item'>
                        <div className="employee-info">
                            <div className="employee-icon">
                                <i className='user icon'></i>
                            </div>
                            <div className="employee-details">
                                    <div className="info">Name    : {employee.firstName + " "+ employee.lastName}</div>
                                    <div className="info">Position: {employee.position}</div>
                            </div>
                        </div>
                        
                        <div className='employee-control'>
                             <Button className="delete-button" 
                                onClick={()=> modalStore.openModal(
                                <MessageComponent 
                                    messageType ='warning'
                                    message = {`Do you really want to delete employee named " ${employee.firstName + " "+ employee.lastName}" ?`}
                                    confirm = {()=> employeeStore.deleteEmployee(employee.id)}
                                />)}
                             > Delete </Button>
                            <Button className="view-button"  as={Link} to={`/details/${employee.id}`}> More <span>Details</span></Button>
                           
                        </div>
                    </div>
                ))
            }
            <div className="reload"><Button href='#' onClick={()=>window.location.reload()}>Reload Employee</Button></div>
        </List>

    );
})