import { useState, useEffect } from 'react'
import './App.css'
import requester from '../service/requester'

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
  console.log(requester.getAll)

  useEffect(()=>{
    const data =  requester
  .getAll()
  .then((resp)=>console.log(resp.data))
  .catch(err => console.log(err.message))
  },[])
  
  const [country, setCountry] = useState("")

  const changeHandler =(event) =>{
    setCountry(event.target.value)
  

  }
  return (
    <>
       <Form text={'Enter country name here: '} handleChange={changeHandler}/>
    </>
  )
}

export default App
