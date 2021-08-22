import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import EmployeeStroe from "./employeeStore";
import ModalStore from "./modalStore";


interface Store {
    employeeStore: EmployeeStroe;
    modalStore: ModalStore;
    commonStore: CommonStore;
}

export const store:Store = {
    employeeStore: new EmployeeStroe(),
    modalStore: new ModalStore(),
    commonStore: new CommonStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}