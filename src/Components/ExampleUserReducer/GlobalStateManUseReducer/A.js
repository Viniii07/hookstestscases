import React, { useContext, useRef } from 'react'
import { ctx } from './ctx'

export const A = () => {
    const data=useContext(ctx)
    console.log(data,"data")
    const nameRef=useRef(null)
    const handleName=()=>{
        let name=nameRef.current.value;
        data.dispatch({
            type:"NAME",
            payload:name
        })
    }
  return (
    <div>
        <input ref={nameRef}/>
        <button onClick={handleName}>Name</button>
    </div>
  )
}
