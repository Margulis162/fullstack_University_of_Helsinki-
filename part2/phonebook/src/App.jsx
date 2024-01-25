import { useState } from 'react'



const App = () => {
  
  const [persons, setPersons] = useState([{name:'Arto Hellas'}]) 

  const Lst = (p)=>{
    const  name = p.name
    return(
      <li>
        {name}
      </li>
  
    ) 
  }
  

  

  const [newName, setNewName] = useState('') //ment to control input
  
  const addContact =(event) =>{
    event.preventDefault()
    const contactObj ={
      name: newName
    }
    const updatedPersons = persons
    updatedPersons.push(contactObj)
    setPersons(updatedPersons)
    setNewName('')
    
  }

  const inpChangeHandler =(event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }




  return (
    <div>

      <h2>Phonebook</h2>

      <form onSubmit={addContact}>
        <div>
          name: 
          <input
          //  value ="enter person's name here"
           onChange ={inpChangeHandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <Lst key={person.name} name ={person.name}/>)}
      </ul>
    </div>
  )
}

export default App