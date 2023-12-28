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
      <p>There are <em>{p.good}</em> positive reviews</p>
      <p>There are <em>{p.neutral}</em> neutral reviews</p>
      <p>There are <em>{p.bad}</em> positive reviews</p>
      <p>The total number of reviews is <em>{p.total}</em></p>
      <p>Average review score is <em>{Math.round(p.average, 2)}</em>%</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0) //changing initial useState to 1 does the job but I feel like it's illigal 
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average,setAverage] = useState(0)
  const [total, setTotal] = useState(0)

  const handleClickPositive = () => {
     setGood(good+1)
     const apdtGood = good+1
    setAverage((apdtGood - bad)/(apdtGood+bad+neutral)*100)
    setTotal(apdtGood + neutral+bad)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral+1)
    const apdtNeutral = neutral+1
   setAverage((good - bad)/(good+bad+apdtNeutral)*100)
   setTotal(good + apdtNeutral+bad)
  } 

  const handleClickNegative = () => {
    setBad(bad+1)
    const apdtBad = bad+1
   setAverage((good - apdtBad)/(good+apdtBad+neutral)*100)
   setTotal(good + neutral+apdtBad)
  } 
 

  return (
    <div className="container">
      <Header message = 'Please leave us some feedback'/>
      <div className='content'>
      <div className='motherOfButtons'>
        <Button clickHandler = {handleClickPositive} text ="positive"/>
        <Button clickHandler = {handleClickNeutral} text ="neutral"/>
        <Button clickHandler = {handleClickNegative} text ="negative"/>
      </div>
      <Display className ='display' good ={good} neutral ={neutral} bad ={bad} average ={average}
      total ={total}/>
      </div>
    
    </div>
  )
}

export default App
