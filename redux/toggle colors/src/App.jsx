import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch,useSelector } from 'react-redux'
import { changecolor } from './slice/colorSlice'
function App() {
  const dispatch =useDispatch ()
  const color = useSelector(state=> state.color.value)
  const [toggle, settogle] = useState(false)
  const handleclick = ()=>{
    settogle(!toggle)
  }

  return (
    <div>
      <div style={{display:'flex', justifyContent:'center', gap :20}}>

      <div style={{width:80 ,height:100,backgroundColor:toggle?color: "red" }}></div>
      <br />
      <div style={{width:80 ,height:100 , backgroundColor : toggle? "red" : color }}></div><br />
<button onClick={handleclick}>color change</button>
      </div>

    </div>

     
  )
}

export default App
