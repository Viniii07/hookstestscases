import React, { useDeferredValue, useMemo } from 'react'

export const List = ({input}) => {
    const diferredValue=useDeferredValue(input)
    const list=useMemo(()=>{
        const delay=20000;
        let l=[]
        for (let i=0;i<=delay;i++){
            l.push(<div key={i}>{input}</div>)
        }
        return l;
    },[diferredValue])
  return list;
}
