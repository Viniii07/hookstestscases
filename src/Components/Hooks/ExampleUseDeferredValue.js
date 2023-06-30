import React, { useState } from 'react'
import { List } from './List';

export const ExampleUseDeferredValue = () => {
    const [input,setInput]=useState("");
    const handleChange=(eve)=>{
        setInput(eve.target.value)
    }
  return (
    <div>
        <input value={input} onChange={handleChange}/>
        <List input={input}/>
    </div>
  )
}
