import React, {useState} from 'react'
const UseStateCounter=()=>{
    const [count,setCount]=useState(0)
    return(
        <>
        <h2>UseStateCounter</h2>
        <h4>Counter:{count}</h4>
        <button className="btn btn-primary me-2"
        onClick={()=>{setCount(count+1)}}
        >Increment</button>
        <button className="btn btn-warning"
        onClick={()=>{setCount(count-1)}}
        >Decrement</button>
        <button className='btn btn-danger me-2'
        onClick={()=>{setCount(count===0)}}>Reset</button>
        </>
    )
}
export default UseStateCounter