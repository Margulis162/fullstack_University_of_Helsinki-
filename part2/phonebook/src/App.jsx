import { useState } from 'react'



const App = () => {
  
  const [persons, setPersons] = useState([{name:'Arto Hellas', phone:'123.456.7890'}]) 

  const Lst = (p)=>{
    return(
      <li>
        {p.name}:{' '+p.phone}
      </li>
  
    ) 
  }
  
  const phoneBook = persons.map(person => <Lst key={person.name} name ={person.name} phone={person.phone}/>)
  

  const [newName, setNewName] = useState('') //ment to control input
  const [newNum, setNewNum] = useState('')
  
  const addContact =(event) =>{
    event.preventDefault()
    const contactObj ={
      name: newName,
      phone: newNum,
    }

    

    if(newName === ''){alert('a name is needed')}else
    if(newNum === ''){alert('please enter a number')}else
    if(newNum.length !== 10){alert('phone number needs to be 10 digits long')}
    else if(phoneBook.find(person => person.key === contactObj.name)){
      alert(`the name ${contactObj.name} is already in the list`)
    }
    else{
      const updatedPersons = persons
      updatedPersons.push(contactObj)
      setPersons(updatedPersons)
      setNewName('')
      setNewNum('')
      event.target[0].value = '' // resets input value to '' on submission
      event.target[1].value = '' 
    }
   
      
  }


  const nameChangeHandler =(event) =>{
    setNewName(event.target.value)
  }

  const numChangeHandler =(event) =>{
    setNewNum(event.target.value)
  }




  return (
    <div>

      <h2>Phonebook</h2>

      <form onSubmit={addContact}>
        {/* name */}
        <div>
          name:   
          <input
           onChange ={nameChangeHandler}/>
        </div>
        {/* number */}
        <div>
          number: 
          <input
           onChange ={numChangeHandler}/>
        </div>
        {/* submisson button */}
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