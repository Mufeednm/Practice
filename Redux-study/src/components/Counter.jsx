import React from 'react'
import {useSelector,useDispatch}from "react-redux"
import { incerese_count,decerese_count } from '../redux/count/countSlice'
function Counter() {
    const count = useSelector(state=>state.count.value)
    const dispatch =useDispatch()
    const increment=()=>{
        dispatch(incerese_count ())}
    const decrement=()=>{
        dispatch(decerese_count ())
    }
    return (

        <div>
            <div className=" m-10 border-2 p-5">
                <h2 className='text-3xl'>Counter</h2>
                <h4>the conuter is - {count}</h4>
                <button  onClick={increment} className='border-2'>Increment</button>
                <button onClick={decrement} className='border-2 m-5'>Decrement</button>
            </div>
        </div>
    )
}

export default Counter