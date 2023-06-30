import React, { useContext } from 'react'
import { ctx } from './ctx'

export const C = () => {
    const data=useContext(ctx)
    console.log(data.state,"state")
  return (
    <div>
        <h1>Name:{data?.state?.name}</h1>
        <h1>Loc:{data?.state?.loc}</h1>
    </div>
  )
}
