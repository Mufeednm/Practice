import { useState } from 'react'
import Boxone from './components/Boxone'
import Boxtwo from './components/Boxtwo'
import Boxthree from './components/Boxthree'
Boxthree
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>hello</h2>
<div  className=' gap : 10' >
  <Boxone/>
  <Boxtwo/>
  <Boxthree/>
  
</div>

    </div>
        )
}

export default App
