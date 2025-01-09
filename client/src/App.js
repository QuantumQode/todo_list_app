import React, { useState } from 'react';
import './App.css';

function App() {

  const [usernameState, setUsernameState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    if (usernameState === 'admin' && passwordState === 'admin') {
      setLoggedIn(true);
      console.log('Login successful');
    }
  }


  return (
    <div className="App">
      <h1>Login</h1>
      <input type="text" onChange={(event) => {
        setUsernameState(event.target.value);
      }}/>
      <input type="password" onChange={(event) => {
        setPasswordState(event.target.value);
        console.log(event.target.value);
      }}/>
      <button onClick={login}>Submit</button>

      {loggedIn && (
        <h1>Welcome {usernameState}</h1>
      )}
    </div>
  );
}

export default App;
