import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [counts, setCounts] = useState(0)
   useEffect(()=>{
    console.log("manu");
    
      console.log("byeee")
   },[count])

  return (
    <div>
      <button onClick={()=>setCount(count+1)} >{count}</button>
      <button onClick={()=>setCounts(counts+1)} >{counts}</button>
    </div>
     
  )
}

export default App
