import React from "react";
import { useState,useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

//import employee context

import { EmployeeContext } from "../CRUD_using_context_api/EmployeeStore";

const AddEmployee = () => {

  const [validated, setValidated] = useState(false);

  const [empID,setEmpID] = useState('');
  const[name,setName] = useState('')
  const [position,setPosition] = useState('')  
  const [company,setCompany] = useState('')

   const navigate =useNavigate()
  const {addEmployee} = useContext(EmployeeContext)
    
  const handleSubmit = (event) => {
    const form = event.currentTarget;
 
    if (form.checkValidity() === false) {
        event.preventDefault();
      event.stopPropagation();
    }

    const employee ={id:Date.now(),empID,name,position,company}

    addEmployee(employee)
    navigate('/')
    
    setValidated(true);
  };

  return (
    <>
     
      <h5 style={{marginTop:"20px"}}>ADD NEW EMPLOYEE</h5>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        style={{ margin: "60px" }}
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Employee ID</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Employee ID"
              value={empID}
              onChange={(e)=> setEmpID(e.target.value)}
                          />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label>Employee name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Employee name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
                         />
          
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustomUsername">
            <Form.Label>Position</Form.Label>
            <InputGroup hasValidation>
               <Form.Control
                type="text"
                placeholder="Enter position"
                 required
                 value={position}
                 onChange={(e)=>setPosition(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a position.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label> Company</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Company"
              value={company}
              onChange={(e)=>setCompany(e.target.value)}
                         />
            </Form.Group>
          
        </Row>

        <Button type="submit">ADD EMPLOYEE</Button>
      </Form>
    </>
  );
};

export default AddEmployee;

