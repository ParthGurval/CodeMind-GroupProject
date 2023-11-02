import React,{createContext,useState} from 'react';

export const EmployeeContext = createContext()

export const EmployeeProvider =({children})=>{

    const [employees,setEmployee] =useState([])


    //add Employee Function
    const addEmployee =(employee)=>{
        setEmployee([...employees,employee])
    }

    //update Employee Function
    const updateEmployee = (id, updateEmployee) => {

        setEmployee(
            employees.map((employee) => employee.id === id ? updateEmployee : employee)
        )
    }

    //Delete Employee Function
    const deleteEmployee = (id) => {

        setEmployee(employees.filter((employee) => employee.id !== id))
    }

    //view Employee Function
    const viewEmployee = (id) => {
        return employees.find((employee) => employee.id === id);
      };

      console.log(viewEmployee);

      


    return(
        <EmployeeContext.Provider value={{employees,addEmployee, updateEmployee, deleteEmployee, viewEmployee}}>
            {children}
        </EmployeeContext.Provider>
    )

}