// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [toggle,Settoggle]= useState(false)
//   return (
//     <div>
//  \<button onClick={()=>{Settoggle(!toggle)}} style={ {backgroundColor :toggle?  "green" : "red"} } >green</button>
//  <div>

//  \<button  onClick={()=>{Settoggle(!toggle)}}  style={ {backgroundColor : toggle ?   "red"  : "green"} }>red</button>
//  </div>
 
//     </div>
     
//   )
// }

// export default App

// 3 times changer

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [times,settimes]=useState(0)
//   return (
//     <div>

// <button   onClick={()=>{settimes (times+1)} }        style={{backgroundColor : times  >= 3  && times % 3 ==0 ? "red": "blue"}}>change color after 3 times </button>
//     </div>
     
//   )
// }

// export default App



import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formdata,setFormdata]=useState({
    Name : "",
    email : "",
    password :""
  });  
  // const isValid = validform();
  
  const  [errors ,setErrors]=useState(" ")
  const isValidEmail = (email) => {
        // Simple email validation regex, you can improve it as needed
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      };
  
  const validateform = ()=>{
    const errors = {};
    if (!formdata.Name.trim()) {
            errors.name = 'Name is required';
          }
          if (!formdata.email.trim()) {
            errors.email = 'Email is required';
          } else if (!isValidEmail(formdata.email)) {
            errors.email = 'Invalid email format';
          }
          if (!formdata.password.trim()) {
            errors.password = 'Password is required';
          }
          setErrors(errors);
          return Object.keys (errors).length===0
  }
  
 const handlesubmit = (e)=>{
    e.preventDefault();
    const isvalid = validateform(formdata) 
    if (isvalid) {
     console.log("form done", formdata);    
    }else{
      console.log("failed");
    }
  }

  const handlechange = (e)=>{
    const {name,value}=e.target;
    setFormdata ({
      ...formdata,
      [name]:value,
    })
   }

  return (
    <div>
 
 <form onSubmit={handlesubmit } >
<label >Name</label>
<input 
type="text"
onChange={handlechange}
 name='Name'
 value={formdata.Name}  
 placeholder='name'
 />
 {errors.name && <div className="error">{errors.name}</div>}
   <br />
<label >email</label>
<input 
type="email"
onChange={handlechange}
 name='email'
 value={formdata.email}  
 placeholder='email'
   />
   
 {errors.email && <div className="error">{errors.email}</div>}
   
   <br />
<label >password</label>
<input 
type="password"
onChange={handlechange}
 name='password'
 value={formdata.password}  
 placeholder='password'
   />
   {errors.password && <div className="error">{errors.password}</div>}
     
   <br />
<button type='submit' >ok done</button>
 </form>

    </div>
     
  )
}

export default App
