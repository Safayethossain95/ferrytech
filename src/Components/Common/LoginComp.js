import React, { useState } from 'react';
import '../../sass/sassFiles/common/logincomp.scss'
import axios from 'axios';
import { API_URL } from '../../config';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const LoginComp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic here
    const res = await axios.post(`${API_URL}/login`, { email, password }, { withCredentials: true });
    if(res.data.token){
      login()
      navigate("/dashboard")
      toast.success('Login Successful!');
      console.log("logged in")
    }
  };
  

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  );
};

export default LoginComp;
