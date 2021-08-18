import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useEffect } from 'react';
import { Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import EmployeeTable from './EmployeeTable';
import SearchBar from './SearchBar';
import SearchText from './SearchText';

export default observer( function EmployeeListMain(){

    const{employeeStore}= useStore();
    useEffect(()=>{
        employeeStore.setEmployeeRegistery([]);
        employeeStore.loadEmployees();
    }, [employeeStore])

    return (
        <>
            {employeeStore.loadingInitial ?(<LoadingComponent/>):
            (
                <Segment>
                    <SearchBar></SearchBar>
                    <SearchText></SearchText>
                    <EmployeeTable></EmployeeTable>
                </Segment>
            )}
            
        </>
    )
})