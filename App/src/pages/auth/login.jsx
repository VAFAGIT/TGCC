import React, { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcrypt';

function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth');
      const users = response.data;
      
      const user = users.find(user => user.email === email);
      if (!user) {
        alert('Invalid username or password');
        return;
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        alert('Invalid username or password');
        return;
      }

      props.onLogin(user);
    } catch (error) {
      alert('An error occurred while trying to log in');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="email">email:</label>
        <input type="text" id="email" value={email} onChange={(event) => setUsername(event.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;
