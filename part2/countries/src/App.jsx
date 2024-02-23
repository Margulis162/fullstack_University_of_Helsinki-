import { useState, useEffect } from 'react'
import requester from '../service/requester'
import './App.css'
//elements in src folder
import Form from './components/Form'
import List from './components/List'
//key for the weather API
const key  = import.meta.env.VITE_KEY
 


function App() {

  const [data, setData] = useState(null)// holds fetched data
  const [items, setItems] = useState(null) //for rendering the list of matching countries

  const changeHandler =(event) =>{
    const itemsToDispl = data.filter((country) => (country.name.common.toLowerCase().includes(event.target.value.toLowerCase())) )
    setItems(itemsToDispl)
  }
  
  const handleClick = (event) => {
    const itemsToDispl = data.filter((country) => (country.name.common.toLowerCase().includes(event.target.innerText.toLowerCase())) )
    console.log(event.target.innerText)
    setItems(itemsToDispl) 
  }

  useEffect(()=>{
    requester
    .getAll()
    .then((resp)=>{
      setData(resp.data) 
    })
    .catch(err => console.log('error at useEffect' + err.message))
  },[]) 
  
  
  

  return (
    <>
       <Form text={'Enter country name here: '} handleChange={changeHandler} data ={data}/>
       <List items = {items} handleClick ={handleClick}></List>
    </>
  )
}

export default App

// TODO:
