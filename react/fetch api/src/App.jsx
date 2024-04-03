import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [postman,setPostmans]=useState([])
useEffect(()=>{

  let posts =async ()=>{
   let datas= await fetch ("https://jsonplaceholder.typicode.com/users")
   let final = await datas.json()
  //  setPostmans(final)
  //  console.log(postman);
  setPostmans(final)
}
posts()
},[])
console.log(postman);

  return (
    
    <div>
    <h1>Data from API:</h1>
    
      {postman.map((item, index) => (
        // console.log("hi", item)
        <table>

          <th>babu</th>
          <tr>{index} {item.name}</tr>
          <td></td> 
        </table>
      ))}
    
  </div>
  )
}

export default App
