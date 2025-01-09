// This file is the main file of the react app. It contains the form for user registration.
import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {

  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')

  const register = () => {
    Axios.post('http://localhost:3001/register', {
      username: usernameReg,
      password: passwordReg
    }).then((response) => {
      console.log(response);
      setUsernameReg('');
      setPasswordReg('');
    });
  }
  return (
    <div className="App">
      <div className="Registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input type="text" 
        placeholder="Enter Username" 
        value={usernameReg} 
        onChange = {(e) => {setUsernameReg(e.target.value)}} />
        <label>Password</label>
        <input type="password" 
        placeholder="Enter Password" 
        value={passwordReg} 
        onChange = {(e) => {setPasswordReg(e.target.value)}} />
        <button className='btn' onClick={register}>Register</button>
        </div>
      <div className="Login">
        <h1>Login</h1>
        <label>Username</label>
        <input type="text" 
        placeholder="Enter Username" />
        <label>Password</label>
        <input type="password" 
        placeholder="Enter Password" />
        <button className='btn'>Login</button>
      </div>
    </div>
  );
}

export default App;
