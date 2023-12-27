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
      <p>here will be some strings and stuff</p>
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

  const handleClickPositive = () =>{

    // suggested workaround doesn't work as expected, did I do it right?
    const updatedGood = good + 1
    setGood(updatedGood) 
    console.log(good) //will log 0 on the first click
  }

  return (
    <div className="container">
      <Header message = 'Please leave us some feedback'/>
      <div className='content'>
      <div className='motherOfButtons'>
        <Button clickHandler = {handleClickPositive} text ="positive"/>
        <Button clickHandler = {handleClick} text ="neutral"/>
        <Button clickHandler = {handleClick} text ="negative"/>
      </div>
      <Display/>
      </div>
    
    </div>
  )
}

export default App
