import React, { useState } from 'react'

export const Count = () => {
    const [count, setCount]=useState(0)
    const handleInc=()=>{
        setCount(count+1)
    }
    const handleReset=()=>{
        setCount(0)
    }
    const handleDec=()=>{
        setCount(count-1)
    }
  return (
    <div>
        <button onClick={handleInc}>Inc</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDec}>Dec</button>
        <h1>COUNT::{count}</h1>
    </div>
  )
}
