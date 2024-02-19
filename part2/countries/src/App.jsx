import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Form = ({text, handleChange}) =>{
  return(
    <div>
    <form>
      {text}
      <input onChange={handleChange}/>
    </form>
  </div>
  )
}

function App() {
  
  const [country, setCountry] = useState("")

  const changeHandler =(event) =>{
    // event.preventDefault()
    setCountry(event.target.value)
    
  }
  console.log(country)
  return (
    <>
       <Form text={'Enter country name here:'} handleChange={changeHandler}/>
    </>
  )
}

export default App
