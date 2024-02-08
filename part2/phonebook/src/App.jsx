import { useState } from 'react'

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

var Book = ({phoneBook}) => {
  
  return(
    <ul>
      {phoneBook}
    </ul>
  )
}

const App = () => {
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '0420123456'},
    { name: 'Ada Lovelace', phone: '3944533523' },
    { name: 'Dan Abramov', phone: '1243234345' },
    { name: 'Mary Poppendieck', phone: '3923642312' }
  ])


  const Lst = (p)=>{
    return(
      <li>
        {p.name}:{' '+p.phone}
      </li>
  
    ) 
  }
  
  const [phoneBook, setPhoneBook]  = useState(persons.map(person => <Lst key={person.name} name ={person.name} phone={person.phone}/>))
  const [newName, setNewName] = useState('') //ment to control input
  const [newNum, setNewNum] = useState('')
  const [newFilter, setNewFilter] = useState('')
  
  const addContact =(event) =>{
    event.preventDefault()
    const contactObj ={
      name: newName,
      phone: newNum,
    }

    
   
    if(newName === ''){alert('a name is needed')}else
    if(newNum === ''){alert('please enter a phone')}else
    if(newNum.length !== 10){alert('phone phone needs to be 10 digits long')}else 
    if(phoneBook.find(person => person.key === contactObj.name)){
      alert(`the name ${contactObj.name} is already in the list`)
    }
    else{
      const updatedPersons = persons
      updatedPersons.push(contactObj)
      setPersons(updatedPersons)
      setNewName('')
      setNewNum('')
      setPhoneBook(persons.map(person => <Lst key={person.name} name ={person.name} phone={person.phone}/>))
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

  const filterHandler = (event) =>{
    const change = event.target.value
    setNewFilter(change)
    console.log(change, newFilter)
    if(change === ''){
      return setPhoneBook(persons.map(person => <Lst key={person.name} name ={person.name} phone={person.phone}/>))
    }else{
      
      const filtredLst = persons
        .filter((person)=> person.name.toLowerCase().includes(change.toLowerCase()))
        .map(person=> <Lst key={person.name} name ={person.name} phone={person.phone}/>)
        setPhoneBook(filtredLst)
        }
  }




  return (
    <div>

      <h2>Phonebook</h2>

      <Filter prop ={filterHandler}/>
      
      <h3>add contact</h3> 

      <Form addContact ={addContact} nameChangeHandler ={nameChangeHandler} numChangeHandler ={numChangeHandler}/>
     
      <h2>phones</h2>

      <Book phoneBook ={phoneBook}/>

    </div>
  )
}

export default App