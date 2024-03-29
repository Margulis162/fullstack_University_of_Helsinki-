import { useState, useEffect } from 'react'
// service functions
import requester from '../service/requester'
//component's modules
import PhoneList from './components/phoneList'
import Form from './components/form'
import Filter from './components/filter'
import Lst from './components/list'
import Success from './components/success'

const App = () => {
  //use states var
  const [phoneList, setPhoneList]  = useState([]) //renders data
  const [newName, setNewName] = useState('') //collects input
  const [newNum, setNewNum] = useState('')  //collects input
  const [successMsg, setSuccessMsg] = useState(null)

  //wraps data into li tags for display
  const dataMapper = (data) => {
    return data.map((person) => <Lst key={person.id} name ={person.name} number={person.number} handleDel={handleDel} id ={person.id}/>)
  }

  useEffect(()=>{
    requester
      .getAll()
      .then((resp) =>{
          setPhoneList(dataMapper(resp))})
      .catch(err => console.log(`error at useEffect ${err.message}`))    
  },[])


  const addContact =(event) =>{
    event.preventDefault()
    const contactObj ={
      name: newName,
      number: newNum,
      //sence all names are unique for our data it make sense to use them as ids, 
      //this way I do not have to shift numbers every time an entry gets deleted
      id: newName.replace(" ","").replace(" ","").toLocaleLowerCase() //replaces so json server doesn't freak out on ids and accidential typos
    }
 
    if(newName === ''){alert('a name is needed')}else
    if(newNum === ''){alert('please enter a phone')}else
    if(newNum.length !== 10){alert('phone needs to be 10 digits long')}else 
    if(phoneList.find(person => person.key === contactObj.name && person.number === contactObj.number)){
      alert(`the name ${contactObj.name} is already in the list`)}else 
    if(phoneList.find(person => person.key === contactObj.name && person.number !== contactObj.number)){
      requester
        .phoneUpdate(contactObj)
        .then(()=>{
          requester
        .getAll()
        .then(resp=>{
          setPhoneList(dataMapper(resp))})
        .then(()=>{
          setSuccessMsg('the phone number was successfuly updated!')
          setTimeout(() => {
            setSuccessMsg(null)
          }, 4000)
        })
        })
    }
      else{
      requester
        .addContact(contactObj)
        .then( resp =>{
          const update = phoneList.concat(dataMapper([resp])) //square brackets around resp are there so map exists(-:
          setPhoneList(update)
          setNewName('')
          setNewNum('')
          event.target[0].value = '' // resets input value to '' on submission
          event.target[1].value = '' })
        .then(()=>{
          setSuccessMsg("Contact was added successfuly")
          setTimeout(()=>
          {setSuccessMsg(null)}, 4000)
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
      requester
      .getAll()
      .then((resp) =>{
          setPhoneList(dataMapper(resp))})
    }else{
        requester
        .getAll()
        .then(resp=>{
          const filtered = resp.filter((person)=>person.name.toLowerCase().includes(change.toLowerCase()))
          setPhoneList(dataMapper(filtered))
        })
        }
  }

  const handleDel =(event) =>{
    event.preventDefault()
    requester
      .remover(event.target.id)
      .then(()=>{
        requester.getAll()
        .then((resp)=>{
          const update = resp
          setPhoneList(dataMapper(update))
        })
      }
        
        )
    }
  
  return (
    <div className="main">

      <h1>Phonebook</h1>

      <Filter filterHandler ={filterHandler}/>
      <h3>Add contact</h3> 

      <Form addContact ={addContact} nameChangeHandler ={nameChangeHandler} numChangeHandler ={numChangeHandler}/>
     
      <h2>Phones</h2>
      <Success msg = {successMsg}/>
      <PhoneList phoneList ={phoneList}/>

    </div>
  )
}

export default App