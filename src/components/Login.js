import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(`${process.env.REACT_APP_NOTE_TAKING_APP_BACKEND_URL}/api/users/login`, { email, password });
    localStorage.setItem('token', data.token);
    history.push('/');
  };

  return (
    <form onSubmit={handleLogin}>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;