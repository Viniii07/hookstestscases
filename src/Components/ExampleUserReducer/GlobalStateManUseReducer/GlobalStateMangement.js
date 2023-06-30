import React, { useReducer } from 'react'
import { A } from './A'
import { B } from './B'
import { C } from './C'
import { ctx } from './ctx'

const inits={
    name:"",
    loc:""
}

const reducer=(state,action)=>{
    if(action.type==="NAME"){
        state={...state, name:action.payload}
    }
    if(action.type==="LOC"){
        state={...state, loc:action.payload}
    }
    return state;
}

export const GlobalStateMangement = () => {
    const [state, dispatch]=useReducer(reducer,inits)
  return (
    <div>
        <ctx.Provider value={{state,dispatch}}>
        <A/>
        <B/>
        <C/>
        </ctx.Provider>
    </div>
  )
}
