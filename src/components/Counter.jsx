import React, { useState } from "react";
function Counter(){
    const[count,setCount]=useState(0);
    const handleIncrement=()=>{
        setCount(count+1);
    }
    const handleDecrement=()=>{
        setCount(count-1);
    }
    const handleReset=()=>{
        setCount(0);
    }
        return(
        <>
           <div>counter value:{count}</div>
           <button onClick={handleIncrement}>increment +</button>
           <button onClick={handleDecrement}>decrement -</button>
           <button onClick={handleReset}>reset</button>
        </>
    )
}
export default Counter;