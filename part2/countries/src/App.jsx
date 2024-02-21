import { useState, useEffect } from 'react'
import './App.css'
import requester from '../service/requester'
import Form from './form'
import List from './list'




function App() {

  const [country, setCountry] = useState("")
  const [items, setItems] = useState(null)
  const changeHandler =(event) =>{
    setCountry(event.target.value)
  
  }

  useEffect(()=>{
    const data =  requester
    .getAll()
    .then((resp)=>console.log(resp.data))
    .catch(err => console.log(err.message))
  },[changeHandler,])
  

  return (
    <>
       <Form text={'Enter country name here: '} handleChange={changeHandler}/>
       <List items = {items}></List>
    </>
  )
}

export default App
