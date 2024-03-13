import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch,useSelector } from 'react-redux'
import { colorchange, } from './slice/colorSlice'
import { incre,decre } from './slice/countSlice'
function App() {

const dispatch =useDispatch()
const color = useSelector(state=>state.color.value)
const count = useSelector(state=>state.count.count)
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <h2 style={ {color}} >hello</h2>
      <button onClick={()=>dispatch(colorchange("green"))}></button>
      
      <button onClick={()=>dispatch((incre()))}>+</button>
      <h2>Count :{count}</h2>
      <button onClick={()=>dispatch (decre())} >-</button>
    </div>
     
  )
}

export default App
