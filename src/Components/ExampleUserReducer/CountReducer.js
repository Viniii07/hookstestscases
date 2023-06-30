import React, { useReducer } from 'react';

const initData={
    count:0,
    name:"Vinita"
}
const reducer=(state,action)=>{
    if(action==="INC"){
        state={...state, count:state.count+1}
    }
    if(action==="RESET"){
        state={...state, count:0}
    }
    if(action==="DEC"){
        state={...state, count:state.count-1}
    }
    return state;
}

export const CountReducer = () => {
    const [state, dispatch]=useReducer(reducer,initData)
    const handleInc=()=>{
        dispatch("INC")
    }
    const handleReset=()=>{
        dispatch("RESET")
    }
    const handleDec=()=>{
        dispatch("DEC")
    }
  return (
    <div>
        <button onClick={handleInc}>Inc</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDec}>Dec</button>
        <h1>COUNT::{state.count}</h1>
        <h1>NAME::{state.name}</h1>
    </div>
  )
}