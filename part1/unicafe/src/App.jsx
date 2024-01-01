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
  if(p.good == 0 && p.neutral == 0 && p.bad == 0){
    return('')
  }else{
    return(
      <>
         <StatisticLine text="number of positive reviews is:" value={p.good}/>
         <StatisticLine text="number of neutral reviews is:" value={p.neutral}/>
         <StatisticLine text="number of negative reviews is:" value={p.bad}/>
 
    </>
    )
   
  }


}

const StatisticLine = (p) =>{
  return(
    <tr >
      <td className='left'>
      {p.text}
    </td>
    <td className='right'>
      <em> {p.value}</em>
      </td>
    </tr>
  
  )
}

const Statistics = (p) => {
  
    if(p.total == 0){
      return(<tr><td>There is currently no feedback</td></tr>)
    }else{
      return(
        <>
          <StatisticLine text="total number of reviews is:" value={p.total}/>
          <StatisticLine text="Average review score is:" value={p.average.toFixed(2) +"%"} />
          <StatisticLine text="Number of positive revievs is: " value={p.positive.toFixed(2) +"%"}/>
    
       
        </>
      )
     
    }
 
 
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
      <table>
      <tbody>
      <Display  good ={good} neutral ={neutral} bad ={bad} />
      <Statistics  average ={average} total ={total} positive = {positive}/>
      </tbody>
      </table>
    
      </div>
    
    </div>
  )
}

export default App
