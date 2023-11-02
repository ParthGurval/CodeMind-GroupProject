import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import "./crudStyle.css";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import { EmployeeContext } from "../CRUD_using_context_api/EmployeeStore";


const EmployeeList = () => {
  const { employees,deleteEmployee } = useContext(EmployeeContext);

  const navigate = useNavigate();

  const handleDelete =(id)=>{
    deleteEmployee(id)
  }

  return (
    <div>
      <h5 className="topHead">LIST OF ALL EMPLOYEES</h5>
      
      <div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">SR</th>
              <th scope="col">EMPLOYEE ID</th>
              <th scope="col">EMPLOYEE NAME</th>
              <th scope="col">POSITION</th>
              <th scope="col">COMPANY</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
          {employees.map((employee,index)=>(
                        <tr key={employee.id}>
                            <td>{index+1}</td>
                            <td>{employee.empID}</td>
                            <td>{employee.name}</td>
                            <td>{employee.position}</td>
                            <td>{employee.company}</td>
                            <td className="empAction">
                              
                            <Button variant="primary" onClick={()=>navigate(`/editEmployee/${employee.id}`)} >Edit</Button>

                            <Button variant="success" onClick={()=>navigate(`/viewEmployee/${employee.id}`)} >View</Button>

                            <Button variant="danger" onClick={()=>handleDelete(employee.id)} >Delete</Button>

                            </td>
                        </tr>
                    ))}
          </tbody>
        </table>

        <div className="addEmployeeBtn">
        <Button variant="primary" onClick={() => navigate("/addEmployee")}>
          ADD EMPLOYEE
        </Button>
      </div>
      </div>
    </div>
  );
};

export default EmployeeList;
