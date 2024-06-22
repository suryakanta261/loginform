import React, { useState } from "react";
import './LoginForm.css';

export default function LoginForm() {
  const [inputData, setInputData] = useState({ username: '', password: '',number:'' });
  const [error, setError] = useState('');
  const [submittedData,setSubmittedData]=useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.username || !inputData.password) {
      setError('Both fields are required');
      return;
    }
    //const number = /^[0-9]{10}$/;
    if ( inputData.number.length !==10 || isNaN(inputData.number)) {
      setError('Mobile number must be 10 digits');
      return;
    }
    setSubmittedData(inputData);
    console.log("username:", inputData.username);
    console.log("password:", inputData.password);
    console.log("Number:", inputData.number);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h1>Login Form</h1>

        <div className="inputGroup">
          <label>Username</label>
          <input type="text" name="username" value={inputData.username}  onChange={handleInputChange} />
        </div>

        <div className="inputGroup">
          <label>Password</label>
          <input type="password" name="password" value={inputData.password} onChange={handleInputChange} />
        </div>

        <div className="inputGroup">
          <label>Number</label>
          <input type="text" name="number" value={inputData.number} onChange={handleInputChange} />
        </div>

        <button type="submit"> Login </button>
        {error && <p style={{ color: 'yellow' }}>{error}</p>}
      </form>
      {submittedData && <div>
        <h1>submitted data</h1>
        <p>username:{inputData.username}</p>
        <p>password:{inputData.password}</p>
        <p>number:{inputData.number}</p>
      </div>}
    </div>
  );
}
