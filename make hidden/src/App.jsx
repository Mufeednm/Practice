import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [toggle, settoggle] = useState(false)
const handleclick = ()=>{
  settoggle(!toggle)
}
  return (
    <div>

    <div style={{display: 'flex', justifyContent:'center'}}>
      <h2> {toggle? "" : "MUFEED"} </h2> <br />
      
      <button onClick={handleclick} >Magic</button>
    </div>
    </div>
     
  )
}

export default App
