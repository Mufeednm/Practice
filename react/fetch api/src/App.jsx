import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [get,setgets]=useState([])
useEffect(()=>{

  let posts =async ()=>{
   let datas= await fetch ("https://api.postalpincode.in/pincode/110001")
   let final = await datas.json()
  //  setgets(final)
  //  console.log(get);
  setgets(final[0].PostOffice)

// console.log( "first",  final);
}
posts()
},[])
console.log(get);

  return (
    
    <div>
    <h1>Data from API:</h1>
    
        <table border={1}>
        {/* <thead> */}
          <tr>
            <th scope="col">name</th>
            
            <th scope="col"> Delivery Status</th>
            <th scope="col">BranchType</th>
            
                  </tr>
                {/* </thead> */}
      {get.map((item , key) => (
      
        <tbody key={key}>
          <tr>
            <th scope="row">{item.Name}</th>
            <td> {item. DeliveryStatus}</td>
            <td>
              {item.BranchType}</td>
          </tr>
          </tbody>
      ))}
      </table>
    
  </div>
  )
}

export default App
