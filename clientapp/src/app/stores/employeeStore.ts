import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Employee } from "../models/employee";


export default class EmployeeStroe{

    employeeRegistry:Employee[] = [];
    selectedEmployee:Employee|undefined= undefined;
    loadingInitial = false;
    searchReslutText:string|undefined = undefined;
    constructor(){
        makeAutoObservable(this);
    }


    loadEmployees = async ()=> {

        this.loadingInitial = true;
        try{
            await agent.Emp.list().then(response =>{
                runInAction(()=>{
                    this.employeeRegistry = response;
                    this.loadingInitial= false;
                
                })
            })
        }
        catch (error)
        {
            console.log(error);
            runInAction(()=> this.loadingInitial=false);
        }
    }

    get getEmployeeRegistry (){
        return this.employeeRegistry;
    }
     setEmployeeRegistery(employees:Employee[]){
         this.employeeRegistry = [];
        this.employeeRegistry = employees;
    }
    setSearchResultText(text:string|undefined){
        this.searchReslutText = text;
    }

    searchEmployee = async (name:string)=>{
       try{
            await agent.Emp.list().then(response =>{
                runInAction(()=>{
                    this.employeeRegistry = response;
                    this.loadingInitial= false;
                
                })
            })
        }
        catch (error)
        {
            console.log(error);
            runInAction(()=> this.loadingInitial=false);
        }
        this.setSearchResultText(undefined);
       let tempEmployeeRegistry: Employee[] = [];
       this.employeeRegistry.forEach(emp => {
           const empName = emp.firstName + " "+ emp.lastName;
           const serchResult = empName.toLowerCase().search(name.toLowerCase());
           if(serchResult >= 0){
               tempEmployeeRegistry.push(emp);
           }
       });
       if(tempEmployeeRegistry.length > 0){
        this.setEmployeeRegistery(tempEmployeeRegistry);
       }
       else{
           this.setSearchResultText("No emplyee Found by  given name. " );
       
        }
       
    }

    loadSelectedEmployee = async(id:string) =>{
        this.loadingInitial = true;
        runInAction(()=> this.selectedEmployee = undefined);
        try{
            await agent.Emp.details(id).then(response =>{
                runInAction(()=>{
                    this.selectedEmployee = response;
                    this.loadingInitial= false;
                });
            });

        }
        catch(error){
            runInAction(()=>{
                this.loadingInitial = false;
                console.log(error);
            })
        }

    }

    get getSelectedEmployee (){
        return this.selectedEmployee;
    }


     createEmployee = async (emp:Employee) => {
        try {
            await agent.Emp.create(emp);
            runInAction(() => {
                this.selectedEmployee = emp;
            })
        } catch (error) {
            console.log(error);
        }
    }
     updateEmployee = async (emp:Employee) => {
        try {
            await agent.Emp.update(emp);
            runInAction(() => {
                this.selectedEmployee = emp;
            })
        } catch (error) {
            console.log(error);
        }
    }
}