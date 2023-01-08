import { useState } from 'react';
import './App.css';
import { Login } from './login';

export default function LoginForm(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('aaa');

  const pegaEmail = (event) =>{
    const value = event.target.value;
    setEmail(value);
    
    console.log(value);
  }

  const pegaPassword = (event) => {
    const value = event.target.value;
    setPassword(value);

    console.log(value);
    
  }

  const handleSubmit = () => {
    console.log("submitted");

    let login_model = { email: email, password: password };

    Login(login_model);
  }

  return (
    <div className="App">
      <h1>Login</h1>
      <div className='errorMessage'></div>
      
      <div className='row'>
        <label>E-mail</label>
        <input 
              type='email'
              autoComplete='off' 
              value={email} 
              onChange={pegaEmail}
        />
      </div>

      <div className='row'>
        <label>Password</label>
        <input 
            type='password' 
            autoComplete='off' 
            value={password} 
            onChange={pegaPassword}
        />
      </div>
      
      <div className='row'>
        <input
            type='submit'
            value='Entrar' 
            onClick={handleSubmit} 
            disabled={email === '' || password === '' || password.length < 6}
        />
      </div>

    </div>
  );
}
