import { useState, useEffect } from 'react'
import requester from '../service/requester'
import './App.css'
//elements in src folder
import Form from './components/form'
import List from './components/list'




function App() {

  const [data, setData] = useState(null)// holds fetched data
  const [items, setItems] = useState(null) //for rendering the list of matching countries

  const changeHandler =(event) =>{
    const itemsToDispl = data.filter((country) => (country.name.common.toLowerCase().includes(event.target.value.toLowerCase())) )
    setItems(itemsToDispl)
    console.log('items to display are' + itemsToDispl)
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
       <List items = {items}></List>
    </>
  )
}

export default App

// TODO:
// okay the game plan for the weekend is to reduce the data in get all to the countries which names match data in country hook