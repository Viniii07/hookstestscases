import React, { useContext, useRef } from 'react'
import { ctx } from './ctx'

export const B = () => {
    const data=useContext(ctx)
    const locRef=useRef(null)
    const handleLoc=()=>{
        let loc=locRef.current.value;
        data.dispatch({
            type:"LOC",
            payload:loc
        })
    }
  return (
    <div>
        <input ref={locRef}/>
        <button onClick={handleLoc}>Loc</button>
    </div>
  )
}
