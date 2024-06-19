import React, { useEffect, useState } from "react";
function SimpleLogin(){
    const[inputData,setInputData]=useState({username:'',password:''});
    const[disabled,setDisabled]=useState(true);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
console.log("form Submitted:",inputData);
setInputData({username:'',password:''});
    }
    const handleInputChange=(e)=>{
        const{name,value}=e.target;
        setInputData({...inputData,[name]:value});
    }
    useEffect(()=>{
        const{username,password}=inputData;
        setDisabled(!(username && password ))
    },[inputData])

return(
    <>
     <form onSubmit={handleSubmit}>
     <div>
         <label>username</label>
         <input type="text" name="username" value={inputData.username} onChange={handleInputChange}/>
     </div>
     <div>
         <label>password</label>
         <input type="password" name="password" value={inputData.password} onChange={handleInputChange}/>
     </div>
         <button type="submit" disabled={disabled}>Login</button>
     </form>
    </>
)
}
export default SimpleLogin;
 