import { createContext, useContext } from "react";
import EmployeeStroe from "./employeeStore";


interface Store {
    employeeStore: EmployeeStroe
}

export const store:Store = {
    employeeStore: new EmployeeStroe(),
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}