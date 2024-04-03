import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [rating, setrating] = useState(0);
  const [ratings, setratings] = useState(0);
  const [hidden, sethidden] = useState(false);
  const [pass, setPass] = useState(false);
  const element = [];
  for (let i = 0; i < 5; i++) {
    element.push(i);
  }

  return (
    <div>
      {element.map((index) => (
        <button
          key={index}
          onClick={() => {
            setrating(index + 1);
          }}
          style={{
            height: "40px",
            width: 80,
            backgroundColor: index < rating ? "red" : "black",
          }}
        ></button>
      ))}


      <div><br />
        |
        <button
          onClick={() => {
            setratings(ratings + 1);
          }}
          style={{ backgroundColor: ratings >= 3 ? "red" : "transparent" }}
        >
          anas
        </button><br />


        <div>
          <button
            onClick={() => {
              sethidden(!hidden);
            }}
            type="button"
          >
            hide
          </button>
          <h3>{hidden ? "" : "abu"}</h3>
        </div>
      </div>


<button onClick={()=>{
  setPass(!pass)
}} style={{  height: "40px",
            width: 80,
            backgroundColor : pass ? "blue": "red"}}></button> <br />  <br />


<button  onClick={()=>{
  setPass(!pass)
}} style={{  height: "40px",
            width: 80,
            backgroundColor : pass ? "red": "blue"}} ></button>


<div>



</div>

    </div>
  );
}

export default App;





















// import { useState } from 'react';

// function App() {
//   const [rating, setRating] = useState(0);
//   const [hidden, sethidden] = useState(false);

//   return (
//     <div>
//       {[...Array(5)].map((_, index) => (
//         <button
//           key={index}
//           onClick={() => setRating(index+1 )}
//           style={{
//             height: '40px',
//             width: '80px',
//             backgroundColor: index < rating ? 'red' : 'black',
//             marginRight: '5px',
//           }}
//         ></button>
//       ))}
// <div>

// <button onClick={()=>{
//   sethidden(!hidden)
// }} type="button">hide</button>
//    <h3>{hidden? "" : "abu"}</h3>
// </div>

//     </div>
//   );
// }

// export default App;
