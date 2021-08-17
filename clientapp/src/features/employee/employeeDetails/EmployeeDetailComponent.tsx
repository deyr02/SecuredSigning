import jsPDF from 'jspdf';
import { observer } from 'mobx-react-lite';
import { ReactElement } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Header, Icon, Segment, Table } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import NotFound from '../../errors/NotFound';
import EmployeeDetailTable from './EmployeeDetailTable';


export default observer( function EmployeeDetailComponent(){
    const {employeeStore} = useStore();
    const {selectedEmployee}= employeeStore;
    const{id} = useParams<{id:string}>();

    useEffect(()=>{
        if(id){
         
            employeeStore.loadSelectedEmployee(id);     
        }
           

    },[employeeStore, id])

    function generatePdf (){
        var doc = new jsPDF("p", "pt", "a4");
        const elment:HTMLElement|null = document.querySelector("#copiedToPdf");
        if(elment){
            doc.html(elment, {
                        callback: function(pdf){
                            pdf.save(selectedEmployee?.firstName + ".pdf");
                        }
                    });
        }
       
    }

    return(
        <>
        {employeeStore.loadingInitial? (<LoadingComponent/>):
        (employeeStore.getSelectedEmployee?.id === undefined? (<NotFound/>):(
            <>
            <Segment  clearing>
                        <EmployeeDetailTable selectedEmployee={selectedEmployee}/>
                    
                    <div className='employee-control'>
                             <Button className="delete-button" as={Link} to={`/edit/${selectedEmployee?.id}`}
                               
                             > Edit Details </Button>
                            <Button className="view-button" onClick={generatePdf}> Download details as PDF</Button>
                           
                        </div>
            </Segment>
              <div id= "pdf">
                <div id="copiedToPdf" >
            <Header className="detail-header" textAlign='center' size='huge'  > <Icon name='user' /> Employee Details</Header>

                <div className = 'row'>
                    <div className = "row-header">Employee Credentials</div>
                </div>
                <div className='row'>
                    <div className='level'>Employee Name</div>
                    <div className='level-value'>{selectedEmployee?.firstName + " "+ selectedEmployee?.lastName}</div>
                </div>
                <div className='row'>
                    <div className='level'>Full Address</div>
                    <div className='level-value'>{selectedEmployee?.fullAddress}</div>
                </div>
                <div className='row'>
                    <div className='level'>Mailling Address</div>
                    <div className='level-value'>{selectedEmployee?.maillingAdress}</div>
                </div>
                <div className='row'>
                    <div className='level'>Email</div>
                    <div className='level-value'>{selectedEmployee?.email}</div>
                </div>
                <div className='row'>
                    <div className='level'> Phone number</div>
                    <div className='level-value'>{selectedEmployee?.phoneNumber}</div>
                </div>
                <div className='row'>
                    <div className='level'>Citizenship Stauts</div>
                    <div className='level-value'>{selectedEmployee?.citizenshipStatus}</div>
                </div>
                <div className='row'>
                    <div className='level'>Employment Type</div>
                    <div className='level-value'>{selectedEmployee?.employmentType}</div>
                </div>
                <div className='row'>
                    <div className='level'>Employment Start Date</div>
                    <div className='level-value'>{selectedEmployee?.employmentStartDate.toString().split('T')[0]}</div>
                </div>
                <div className='row'>
                    <div className='level'>Position</div>
                    <div className='level-value'>{selectedEmployee?.position}</div>
                </div>
                 <div className = 'row'>
                    <div className = "row-header">Emergency Contact</div>
                </div>
                <div className='row'>
                    <div className='level'> Name</div>
                    <div className='level-value'>{selectedEmployee?.emergencyContactName}</div>
                </div>
                <div className='row'>
                    <div className='level'>Relationship</div>
                    <div className='level-value'>{selectedEmployee?.emergencyContactRelationship}</div>
                </div>
                <div className='row'>
                    <div className='level'>Contact</div>
                    <div className='level-value'>{selectedEmployee?.emergencyConteactPhoneNUmber}</div>
                </div>
                 <div className = 'row'>
                    <div className = "row-header">Signature</div>
                </div>
                <div className='row'>
                    <div className='level'>Signature</div>
                    <div className='level-value'>{selectedEmployee?.isSigned? "Digitally signed by acceptiing 'terms and condition'.": "Not Signed"}</div>
                </div>
                        
                </div> 
            </div>
            </>

        ))}
        </>
    );
})