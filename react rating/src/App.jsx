// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [rating, setrating] = useState(0)
//   const element = [];
// for (let i = 0; i < 5; i++) {
//   element.push(i)
// }

// return (
//   <div>
//     {element.map((index)=>
//       <button key={index}
//         onClick={()=>{setrating(index+1)}} style={{height:"40px" , width: 80 
//         ,backgroundColor: index < rating ? "red":"black" }} ></button>
//     )}
//     </div>
//   )
// }

// export default App

import { useState } from 'react';

function App() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <button
          key={index}
          onClick={() => setRating(index + 1)}
          style={{
            height: '40px',
            width: '80px',
            backgroundColor: index < rating ? 'red' : 'black',
            marginRight: '5px',
          }}
        ></button>
      ))}
    </div>
  );
}

export default App;
