import axios from 'axios';
import React, { useState } from 'react';

function DataPost(){
    const data={fname:'',lname:''};
    const [input,setInput]=useState(data);

    const handleChange=(event)=>{
     setInput({...input,[event.target.name]:event.target.value})
    }
    const handleClick=(event)=>{
        event.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",input)
        .then((response)=>{
            console.log(response.data)
        })
    }
    return(
        <>
        <h1>lets post some data</h1>
           <label>first name</label>
           <input type='text' name='fname' value={input.fname} onChange={handleChange}/>
           <label> last name</label>
           <input type='text' name='lname' value={input.lname} onChange={handleChange}/>
           <button onClick={handleClick}>post</button>
        </>
    )
}
export default DataPost;