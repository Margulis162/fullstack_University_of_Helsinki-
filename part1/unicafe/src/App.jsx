import { useState } from 'react'
import './App.css'

const Header = (props) =>{
  return(
    <div className='header'>
      <h1>{props.message} </h1>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div className="container">
      <Header message = 'Please leave us some feedback'/>
    </div>
  )
}

export default App
