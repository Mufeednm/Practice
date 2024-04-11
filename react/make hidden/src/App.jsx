import { useState } from 'react'


function App() {
  const [toggle, settoggle] = useState(false)
const handleclick = ()=>{
  settoggle(!toggle)
}
  return (
    <div>

    <div style={{display: 'flex', justifyContent:'center'}}>
      <h2> {toggle? "" : "MUFEED"} </h2> <br />
      
      <button onClick={handleclick} > {!toggle? "hide" : "show"}</button>
    </div>
    </div>
     
  )
}

export default App
