"use client"

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { descrementFunction, incrementFunction } from '../reduxt_store/counterSlice'

function Page() {
    const dispatch = useDispatch()
    const {counter} = useSelector(state => state);
 
  return (
    <div className='container'>
        <button onClick={()=>dispatch(incrementFunction())}>+</button>
        <span>{counter}</span>
        <button onClick={()=>dispatch(descrementFunction())}>-</button>
    </div>
  )
}

export default Page