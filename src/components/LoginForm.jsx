import React, { useState } from 'react';

function LoginForm() {
  const [inputData, setInputData] = useState({ username: '', password: '' });
  const [rememberme, setRememberme] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  const [gender,setGender]=useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("username:", inputData.username);
    console.log("password:", inputData.password);
    console.log("rememberme:", rememberme);
    console.log("subscribe:", subscribe);
    console.log("gender",gender);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleCheckBoxChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'rememberme') {
      setRememberme(checked);
    } else if (name === 'subscribe') {
      setSubscribe(checked);
    }
  };
  const handleGenderCheck=(e)=>{
    setGender(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input 
            type='text' 
            placeholder='Enter username' 
            name='username' 
            value={inputData.username} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type='password' 
            placeholder='Enter password' 
            name='password' 
            value={inputData.password} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label>
            Remember Me
            <input 
              type='checkbox' 
              name='rememberme' 
              checked={rememberme} 
              onChange={handleCheckBoxChange} 
            />
          </label>
        </div>
        <div>
          <label>
            Subscribe
            <input 
              type='checkbox' 
              name='subscribe' 
              checked={subscribe} 
              onChange={handleCheckBoxChange} 
            />
          </label>
        </div>
        <div>
          <label>Male</label>
          <input type='radio' name='gender' value='male' checked={gender==='male'} onChange={handleGenderCheck}/>
        </div>
        <div>
          <label>female</label>
          <input type='radio' name='gender' value='female' checked={gender==='female'} onChange={handleGenderCheck}/>
        </div>
        <button type='submit'>Login</button>
      </form>
    </>
  );
}

export default LoginForm;
