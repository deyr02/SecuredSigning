import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { history } from '../..';
import { Employee } from "../models/employee";
import { store } from "../stores/store";

//Artificial sleep
const sleep = (delay:number)=>{
    return new Promise((resolve)=>{
        setTimeout( resolve, delay);
    })
}

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(async response => {
    // if (process.env.NODE_ENV === 'development') 
    await sleep(1000);
    return response;
}, (error: AxiosError) => {
    const { data, status, config } = error.response!;
    switch (status) {
        case 400:
            //bad request
            if(typeof data === "string"){
                toast.error(data);
            }
            //not a guid
           if (config.method === 'get' && data.errors.hasOwnProperty('id')) {
                history.push('/not-found');
                window.location.reload();
            }
            //validation error
            if (data.errors) {
                const modalStateErrors = [];
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        modalStateErrors.push(data.errors[key])
                    }
                }
                throw modalStateErrors.flat();
            } 

            break;
        case 401:
            toast.error('Unauthorized');
            break;

       
        case 404:    
            history.push('/not-found');
             window.location.reload();
            break;
        
        case 500:
         
            store.commonStore.setServerError(data);
            break;
       
    }
    return Promise.reject(error);
})

const responseBody = <T>(response: AxiosResponse<T>) => response.data;
const requests = {
    get:<T>(url:string)=> axios.get<T>(url).then(responseBody),
    post:<T>(url:string, body:{})=> axios.post<T> (url, body).then(responseBody),
    put: <T>(url:string, body:{})=> axios.put<T>(url, body).then(responseBody),
    del:<T>(url:string) => axios.delete<T>(url).then(responseBody)
}

const Emp = {
    list: () => axios.get<Employee[]>('/employee').then(responseBody),
    details: (id: string)=> requests.get<Employee>(`/employee/${id}`),
    create: (employee: {}) => requests.post<void>('/employee', employee),
    update:(employee:{})=> requests.put<void>('/employee', employee ),
    delete:(id:string) => requests.del<void>(`/employee/${id}`)
}

const agent ={Emp}
export default agent;