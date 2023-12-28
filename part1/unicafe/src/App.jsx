import { useState } from 'react'
import './App.css'

const Header = (p) =>{
  return(
    <div className='header'>
      <h1>{p.message} </h1>
    </div>
  )
}

const Button = (p) =>{
  return(
    <button onClick={p.clickHandler}>
      {p.text}
    </button>
  )
}

const Display =(p) =>{
  return(
    <div className='showFeetback'>
      <p>There are <em>{p.good} positive reviews</em></p>
      <p>There are <em>{p.neutral} neutral reviews</em></p>
      <p>There are <em>{p.bad} positive reviews</em></p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0) //changing initial useState to 1 does the job but I feel like it's illigal 
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = () =>{
    console.log('click click')
  }

  const handleClickPositive = () => {return setGood(good+1)} 
  const handleClickNeutral = () => {return setNeutral(neutral+1)} 
  const handleClickNegative = () => {return setBad(bad+1)} 

  return (
    <div className="container">
      <Header message = 'Please leave us some feedback'/>
      <div className='content'>
      <div className='motherOfButtons'>
        <Button clickHandler = {handleClickPositive} text ="positive"/>
        <Button clickHandler = {handleClickNeutral} text ="neutral"/>
        <Button clickHandler = {handleClickNegative} text ="negative"/>
      </div>
      <Display good ={good} neutral ={neutral} bad ={bad}/>
      </div>
    
    </div>
  )
}

export default App
