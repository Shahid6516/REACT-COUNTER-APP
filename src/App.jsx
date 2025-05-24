import { useState } from 'react'
import './App.css'

function App() {

   const [counter , setCounter] = useState(0)

   // counter is a variable and setCounter is a function

   const addValue = ()=>{
    setCounter(counter + 1)
   }
   const removeValue = ()=>{
    setCounter (counter - 1)
   }

  

  return (
    <>
     <h1>Counter: {counter}</h1>  
     <h2>Counter value : {counter} </h2>
     <button
     onClick={addValue}
     >Add Value</button> {" "}
     <button
     onClick={removeValue}
     >Remove Value</button>
     <p>footer :{counter} </p>
    
    </>
  )
}

export default App
