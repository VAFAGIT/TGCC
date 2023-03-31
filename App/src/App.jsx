import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

function App() {
  const [user, setUser] = useState(null);
  const [registering, setRegistering] = useState(false);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleRegistration = () => {
    setRegistering(false);
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div>
          {registering ? (
            <RegistrationForm onRegistration={handleRegistration} />
          ) : (
            <LoginForm onLogin={handleLogin} onRegister={() => setRegistering(true)} />
          )}
          <button onClick={() => setRegistering(true)}>Register</button>
        </div>
      )}
    </div>
  );
}

export default App;
