import React, { useState } from 'react';

const PasswordPage = () => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // password validation logic
    // assuming the correct password is "zathura"
    if (password === 'zathura') {
      console.log('Password is correct! Redirecting...');
    } else 
      console.log('Incorrect password! Please try again.');
    }
 
  return (
    <div
      style={{
        backgroundColor: '#1e2763',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          style={{ marginRight: '10px' }}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default PasswordPage;
