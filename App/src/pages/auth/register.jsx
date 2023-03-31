import React, { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcrypt';

function RegistrationForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleRegistration = async (event) => {
    event.preventDefault();

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      await axios.post('http://localhost:5000/api/auth/register', { name, email, password: hashedPassword });
      props.onRegistration();
    } catch (error) {
      alert('An error occurred while trying to register');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleRegistration}>
      <div>
        <label htmlFor="name">name:</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="email">email:</label>
        <input type="text" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
