import React, { useState } from 'react'

const App = () => {
  const [Num, setNum] = useState(0)
  return (
    <div>
      <h1>the number is{Num} </h1>

      <button onClick={()=>{
        setNum(Num+1)
      }}>Increament</button>
      <button 
      onClick={()=>{
        setNum(Num-1)
      }}>Decreament</button>
    </div>
  )
}

export default App