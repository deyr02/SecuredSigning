import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Button, List } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

export default observer( function EmployeeTable(){
    const{employeeStore}= useStore();
    return (
    
        <List divided animated verticalAlign= 'middle'>
            {
                employeeStore.getEmployeeRegistry.map(employee =>(
                    <List.Item key={ employee.id} className='user-item'>
                        <List.Content>
                            <List.Icon name="user" className='user-card-icon' size='huge' verticalAlign='middle'></List.Icon>
                            <List.Content>
                                <List.Content className="user-info">Name    : {employee.firstName + " "+ employee.lastName}</List.Content>
                                <List.Content className="user-info">Position: {employee.position}</List.Content>
                            </List.Content>
                        </List.Content>
                        <List.Content floated='right'>
                            <Button className="view-button"> More <span>Details</span></Button>
                        </List.Content>
                    </List.Item>
                ))
            }
            
        </List>

    );
})