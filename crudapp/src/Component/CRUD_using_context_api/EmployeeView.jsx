import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { EmployeeContext } from "../CRUD_using_context_api/EmployeeStore";

const EmployeeView = () => {
  const { id } = useParams();
  const { viewEmployee } = useContext(EmployeeContext);
  const employee = viewEmployee(parseInt(id));

  if (!employee) {
    return (
      <div>
        <h5>Employee Not Found</h5>
        <Link to="/">Back to Employee List</Link>
      </div>
    );
  }

  return (
    <div>
      <h5>VIEW EMPLOYEE DETAILS</h5>
      <div>
        <p>
          <strong>Employee ID:</strong> {employee.empID}
        </p>
        <p>
          <strong>Employee Name:</strong> {employee.name}
        </p>
        <p>
          <strong>Position:</strong> {employee.position}
        </p>
        <p>
          <strong>Company:</strong> {employee.company}
        </p>
      </div>
      <Button variant="primary" as={Link} to="/">
        Back to Employee List
      </Button>
    </div>
  );
};

export default EmployeeView;
