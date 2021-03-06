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
           const result = await agent.Emp.list();
            this.employeeRegistry = result;
            runInAction(()=>{
                    this.loadingInitial= false;    
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
           this.setSearchResultText("No emplyee Found by the given name. " );
       
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
            throw error;
        }
    }
     updateEmployee = async (emp:Employee) => {
        try {
            await agent.Emp.update(emp);
            runInAction(() => {
                this.selectedEmployee = emp;
            });
           
        } catch (error) {
             throw error;
        }
    }

    deleteEmployee = async (id: string) => {
        this.loadingInitial = true;
        try {
            await agent.Emp.delete(id).then(()=>{
                  runInAction(() => {
                      this.loadEmployees();
                    this.loadingInitial = false;
                })
            });
         
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loadingInitial = false;
            })
        }
    }



    getEmployeeById = (id:string)=>{
        this.employeeRegistry.forEach(element => {
            if(element.id === id){
                return Employee;
            }
        });
    }



    /*--------------------------------------*/
    /* html rendering--------------------------------------*/
    /*--------------------------------------*/

    isMenuvisible = false;

    toggleMenuOption =()=>{
     
        this.isMenuvisible = !this.isMenuvisible;
     
    }
    
}