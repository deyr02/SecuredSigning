import { createContext, useContext } from "react";
import EmployeeStroe from "./employeeStore";
import ModalStore from "./modalStore";


interface Store {
    employeeStore: EmployeeStroe
    modalStore: ModalStore
}

export const store:Store = {
    employeeStore: new EmployeeStroe(),
    modalStore: new ModalStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}