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
  
  const phoneBook = persons.map(person => <Lst key={person.name} name ={person.name}/>)
  

  const [newName, setNewName] = useState('') //ment to control input
  
  const addContact =(event) =>{
    event.preventDefault()
    const contactObj ={
      name: newName
    }

    

    if(newName === ''){alert('a name is needed')}
    else if(phoneBook.find(person => person.key === contactObj.name)){
      alert(`the name ${contactObj.name} is already in the list`)
    }
    else{
      const updatedPersons = persons
      updatedPersons.push(contactObj)
      setPersons(updatedPersons)
      setNewName('')
      event.target[0].value = '' // resets input value to '' on submission
    }
   
      
  }


  const inpChangeHandler =(event) =>{
    setNewName(event.target.value)
  }




  return (
    <div>

      <h2>Phonebook</h2>

      <form onSubmit={addContact}>
        <div>
          name: 
          <input
           onChange ={inpChangeHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {phoneBook}
       
      </ul>
    </div>
  )
}

export default App