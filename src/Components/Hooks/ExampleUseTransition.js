import React, { useState, useTransition } from 'react'

export const ExampleUseTransition = () => {
    const [isPending,startTransition]=useTransition()
    const [input,setInput]=useState("");
    const [list,setList]=useState([])
    const handleChange=(eve)=>{
        setInput(eve.target.value);
        startTransition(()=>{
            let arr=[]
            for(let i=0;i<=50000;i++){
                arr.push(eve.target.value)
            }
            setList(arr)
        })
        
    }
  return (
    <div>
        <input value={input} onChange={handleChange}/>
        {isPending?"Loading"
        : list?.map((data,i)=>{
            return <h1 key={i}>{data}</h1>
        })}
    </div>
  )
}
