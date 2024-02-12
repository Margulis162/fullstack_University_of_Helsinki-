import { useState, useEffect } from 'react'
// service functions
import requester from '../service/requester'
//component's modules
import PhoneList from '/PhoneList'

const Filter = ({prop}) =>{
  return(
    <div>
    filter:
    <input onChange ={prop}/>
  </div>
  )
}

const Form =({addContact, nameChangeHandler, numChangeHandler}) =>{
  return(
    <div>
     <form onSubmit={addContact}>
        {/* name */}
        <div>
          name:   
          <input
           onChange ={nameChangeHandler}/>
        </div>
        {/* phone */}
        <div>
          phone: 
          <input
           onChange ={numChangeHandler}/>
        </div>
        {/* submisson button */}
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  </div>
  )
  
}



const Lst = (p)=>{
  return(
    <li>
      {p.name}:{' '+p.number}
      <button onClick ={p.handleDel} id ={p.id}>Delete</button>
    </li>

  ) 
}

const App = () => {
  
  const [persons, setPersons] = useState([])
  const [phoneList, setPhoneList]  = useState([])

  useEffect(()=>{
    requester
      .getAll()
      .then((resp) =>{
          setPersons(resp)
          setPhoneList(resp.map(person => <Lst key={person.id} name ={person.name} number={person.number} handleDel={handleDel} id ={person.id}/>))})
      .catch(err => console.log(`error at useEffect ${err.message}`))    
  },[])

  const [newName, setNewName] = useState('') //ment to control input
  const [newNum, setNewNum] = useState('')

  const addContact =(event) =>{
    event.preventDefault()
    const contactObj ={
      name: newName,
      number: newNum,
      id: `${persons.length + 1}`
    }
 
    if(newName === ''){alert('a name is needed')}else
    if(newNum === ''){alert('please enter a phone')}else
    if(newNum.length !== 10){alert('phone needs to be 10 digits long')}else 
    if(phoneList.find(person => person.key === contactObj.name)){
      alert(`the name ${contactObj.name} is already in the list`)
    }
    else{
      requester
        .addContact(contactObj)
        .then( resp =>{
          const bookUpdate = [...persons,resp]
          setPersons(bookUpdate)
          console.log(bookUpdate,persons)
          setPhoneList(bookUpdate.map(person => <Lst key={person.id} name ={person.name} number={person.number} handleDel={handleDel} id ={person.id}/> ))
          setNewName('')
          setNewNum('')
          event.target[0].value = '' // resets input value to '' on submission
          event.target[1].value = '' 
        }
        )
    
    }
   
      
  }

 
  const nameChangeHandler =(event) =>{
    setNewName(event.target.value)
  }

  const numChangeHandler =(event) =>{
    setNewNum(event.target.value)
  }

  const filterHandler = (event) =>{
    const change = event.target.value
    if(change === ''){
      return setPhoneList(persons.map(person => <Lst key={person.name} name ={person.name} number={person.number}/>))
    }else{
      
      const filtredLst = persons
        .filter((person)=> person.name.toLowerCase().includes(change.toLowerCase()))
        .map(person=> <Lst key={person.name} name ={person.name} number={person.number}/>)
        setPhoneList(filtredLst)
        }
  }

  const handleDel =(event) =>{
    event.preventDefault()
    requester
      .remove(event.target.id)
      .then(resp => console.log(resp))
  }

  return (
    <div>

      <h2>Phonebook</h2>

      <Filter prop ={filterHandler}/>
      
      <h3>add contact</h3> 

      <Form addContact ={addContact} nameChangeHandler ={nameChangeHandler} numChangeHandler ={numChangeHandler}/>
     
      <h2>phones</h2>

      <PhoneList phoneList ={phoneList}/>

    </div>
  )
}

export default App