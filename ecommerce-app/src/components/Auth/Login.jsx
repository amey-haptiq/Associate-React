import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user.username === 'amey' && user.password === 'amey123') {
      alert('Login successful!');
      navigate('/');
    } else {
      alert('Invalid credentials!');
      navigate('/login')
      setUser({username: '', password: ''})
    }
  };

  return (
    <div className="auth-card">
      <h2>Welcome to digital superstore</h2>
      <input type="text" placeholder="Username" value={user.username} onChange={e => setUser({ ...user, username: e.target.value })} />
      <input type="password" placeholder="Password"  value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
