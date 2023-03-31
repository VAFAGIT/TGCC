import React, { useState } from 'react';
import axios from 'axios';

function AddEmployee() {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee(prevEmployee => ({ ...prevEmployee, [name]: value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/employees/add', employee);
      console.log(response.data);
      // Do something with the response, such as displaying a success message
    } catch (error) {
      console.log(error);
      // Handle the error, such as displaying an error message
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" name="firstName" value={employee.firstName} onChange={handleInputChange} />
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" name="lastName" value={employee.lastName} onChange={handleInputChange} />
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" value={employee.email} onChange={handleInputChange} />
      <label htmlFor="phone">Phone:</label>
      <input type="tel" name="phone" value={employee.phone}
        onChange={handleInputChange} />
        <button type="submit">Add Employee</button>
    </form>
    );
}


export default AddEmployee;
