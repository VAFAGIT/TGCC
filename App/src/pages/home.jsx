import React, { useState, useEffect } from 'react';
import axios from 'axios';


function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/employees')
        .then(response => setEmployees(response.data))
        .catch(error => console.error(error));

  }, []);

  return (
    <div>
      <h2>Liste des employés:</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.firstName} {employee.lastName} ({employee.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
