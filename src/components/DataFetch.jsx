import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './DataFetch.css';

function DataFetch(){
  const[data,setData]=useState([]);
  const [error,setError]=useState(null)

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
      console.log("response")
      setData(response.data)
    })
    .catch((error)=>{
      console.log("error while fetcing the data",error)
      setError("error coming while data fetching")
    })
  },[])
  return(
    <>
     <div>
     <h1>data in the table are here...</h1>
     {error &&<div>{error}</div>}
      <table>
        <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>username</th>
              <th>email</th>
            </tr>
        </thead>
        <tbody>
            {data.map((data)=>(
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
     </div>
    </>
  )
}
export default DataFetch;