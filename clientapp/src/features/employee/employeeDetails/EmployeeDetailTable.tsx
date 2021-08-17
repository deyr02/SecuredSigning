import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Header, Icon, Table } from 'semantic-ui-react';
import { Employee } from '../../../app/models/employee';

interface Props{
    selectedEmployee?:Employee
}

export default observer(function EmployeeDetailTable({selectedEmployee}:Props){
    return(
        <>
            <Header className="detail-header" textAlign='center' size='huge'  > <Icon name='user' /> Employee Details</Header>

            <Table padded celled inverted selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell className="table-header" textAlign='center'  colSpan="2">Employee Credentials</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                            <Table.Cell collapsing>Employee Name</Table.Cell>
                            <Table.Cell>{selectedEmployee?.firstName + " " + selectedEmployee?.lastName}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                            <Table.Cell collapsing>Address</Table.Cell>
                            <Table.Cell>{selectedEmployee?.fullAddress}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                            <Table.Cell collapsing>Mailing Address</Table.Cell>
                            <Table.Cell>{selectedEmployee?.maillingAdress}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                            <Table.Cell collapsing>Email</Table.Cell>
                            <Table.Cell>{selectedEmployee?.email}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                            <Table.Cell collapsing>Phone Number</Table.Cell>
                            <Table.Cell>{selectedEmployee?.phoneNumber}</Table.Cell>
                    </Table.Row>
                        <Table.Row>
                            <Table.Cell collapsing>Citizenship Status</Table.Cell>
                            <Table.Cell>{selectedEmployee?.citizenshipStatus}</Table.Cell>
                    </Table.Row>
                        <Table.Row>
                            <Table.Cell collapsing>Employment Type</Table.Cell>
                            <Table.Cell>{selectedEmployee?.employmentType}</Table.Cell>
                    </Table.Row>
                        <Table.Row>
                            <Table.Cell collapsing>Employment start date</Table.Cell>
                            <Table.Cell>{selectedEmployee?.employmentStartDate.toString().split('T')[0]}</Table.Cell>
                    </Table.Row> 
                        <Table.Row>
                            <Table.Cell collapsing>Position</Table.Cell>
                            <Table.Cell>{selectedEmployee?.position}</Table.Cell>
                    </Table.Row>
                        <Table.Row>
                        <Table.HeaderCell className ='table-header' textAlign='center'  colSpan="2">Emergency Contact</Table.HeaderCell>
                    </Table.Row> 
                        <Table.Row>
                            <Table.Cell collapsing>Name</Table.Cell>
                            <Table.Cell>{selectedEmployee?.emergencyContactName}</Table.Cell>
                    </Table.Row>
                        <Table.Row>
                            <Table.Cell collapsing>Relationship</Table.Cell>
                            <Table.Cell>{selectedEmployee?.emergencyContactRelationship}</Table.Cell>
                    </Table.Row>
                        <Table.Row>
                            <Table.Cell collapsing>Phone Number</Table.Cell>
                            <Table.Cell>{selectedEmployee?.emergencyConteactPhoneNUmber}</Table.Cell>
                    </Table.Row>
                        <Table.Row>
                        <Table.HeaderCell className='table-header' textAlign='center'  colSpan="2">Signature</Table.HeaderCell>
                    </Table.Row> 
                        <Table.Row>
                            <Table.Cell collapsing>Signature</Table.Cell>
                            <Table.Cell>{selectedEmployee?.isSigned? "Digitally signed by acceptiing 'terms and condition'.": "Not Signed"}</Table.Cell>
                    </Table.Row>

                </Table.Body>
            </Table>
        </>
    )
})