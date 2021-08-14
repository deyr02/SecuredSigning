import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useStore } from '../../../app/stores/store';

export default observer(function SearchText(){
    const {employeeStore} = useStore();
    return(
        <div>
            { employeeStore.searchReslutText?(<div>{employeeStore.searchReslutText}</div>):void(0)}
        </div>
    )
})