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
    </div>
  )
}

const Statistics = (p) => {
  return(
  <div className='showFeetback'>
  <p>The total number of reviews is <em>{p.total}</em></p>
  <p>Average review score is <em>{p.average.toFixed(2)}</em>%</p>
  <p>Number of positive revievs is <em>{p.positive.toFixed(2)}%</em></p>
  </div>)
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0) //changing initial useState to 1 does the job but I feel like it's illigal 
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average,setAverage] = useState(0)
  const [total, setTotal] = useState(0)
  const [positive, setPositive] = useState(0) //this is for the percentage of the positive feedback


  const handleClickPositive = () => {
     setGood(good+1)
     const updtGood = good+1
    setAverage((updtGood - bad)/(updtGood+bad+neutral)*100)
    setTotal(updtGood + neutral+bad)
    const updtTotal =total+1
    setPositive((updtGood/updtTotal)*100)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral+1)
    const updtNeutral = neutral+1
   setAverage((good - bad)/(good+bad+updtNeutral)*100)
   setTotal(good + updtNeutral+bad)
   const updtTotal =total+1
    setPositive((good/updtTotal)*100)
  } 

  const handleClickNegative = () => {
    setBad(bad+1)
    const updtBad = bad+1
   setAverage((good - updtBad)/(good+updtBad+neutral)*100)
   setTotal(good + neutral+updtBad)
   const updtTotal =total+1
    setPositive((good/updtTotal)*100)
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
      <div className ='display'>
      <Display  good ={good} neutral ={neutral} bad ={bad} />
      <Statistics  average ={average} total ={total} positive = {positive}/>
      </div>
      </div>
    
    </div>
  )
}

export default App
