import { useState } from 'react'

import './App.css'


const Button =(p) => {
  return(
    <button onClick={p.randomString}>
      {p.text}
    </button>
  )
}

const Header =(p) =>{
  return(
    <h2>{p.text}</h2>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [points, setPoints] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0})
  const [mostVoted, setMostVoted] = useState(0)
  const [selected, setSelected] = useState(0)

  const randomString =() =>{
    setSelected((Math.floor(Math.random()*anecdotes.length)));

  }

  const vote =() => {
    
    const updated ={
      ...points,
    [selected]:  points[selected] +=1}

    const scors = Object.values(points)
    let largest = Math.max(...scors)
    setMostVoted(Object.keys(points).find(key => points[key] === largest)) //remember this one 
    console.log(scors, largest)
    



    setPoints(updated)

    
      
  }

  return (
    <div className='container'>
      <div id="anecdote" >
      <Header text='Anecdote of the day'/>
      <p>{anecdotes[mostVoted]}</p>
      <Header text='Current Joke'/>
      <p>{anecdotes[selected]}</p>
      <p>has <em>{points[selected]}</em> votes</p>
        </div>
        <div id ="buttons">
        <Button randomString={randomString} text='random joke' />
        <Button randomString={vote} text='vote'/>
        </div>
     
    </div>

 
   
  
      
    
  )
}

export default App