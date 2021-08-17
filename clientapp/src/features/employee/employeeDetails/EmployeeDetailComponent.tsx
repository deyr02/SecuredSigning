import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Header, Icon, Segment, Table } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import NotFound from '../../errors/NotFound';


export default observer( function EmployeeDetailComponent(){
    const {employeeStore} = useStore();
    const {selectedEmployee}= employeeStore;
    const{id} = useParams<{id:string}>();

    useEffect(()=>{
        if(id){
         
            employeeStore.loadSelectedEmployee(id);     
        }
           

    },[employeeStore, id])

    return(
        <>
        {employeeStore.loadingInitial? (<LoadingComponent/>):
        (employeeStore.getSelectedEmployee?.id === undefined? (<NotFound/>):(
            <Segment clearing>
                        <Header className="detail-header" textAlign='center' size='huge'  > <Icon name='user' /> Employee Details</Header>

                        <Table padded celled inverted striped selectable>
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
                                        <Table.Cell collapsing>Joining Date</Table.Cell>
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
                    
                    <div className='employee-control'>
                             <Button className="delete-button" as={Link} to={`/edit/${selectedEmployee?.id}`}
                               
                             > Edit Details </Button>
                            <Button className="view-button"> Download details as PDF</Button>
                           
                        </div>
                    </Segment>

        ))}
        </>
    );
})