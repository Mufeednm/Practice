import React from 'react'
import {useSelector } from "react-redux"
function Header() {
    const backgroundColor = useSelector(state =>state.color.value)
    const count = useSelector(state=>state.count.value)
    return (
        <div  style={{backgroundColor }}  className='text-center m-10 font-bold border-2 p-5'>
            <h1 className='text-5xl '>REDUX PROJECT</h1>
            <h1 className='text-2xl text-right'>the count is -{count} </h1>
        </div>
    )
}

export default Header