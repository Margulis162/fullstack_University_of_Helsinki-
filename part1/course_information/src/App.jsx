const Header = (p)=>{
  return(
    <div>
      <h1>
      {p.course}
      </h1> 
    </div>
  )
}

const Part = (p) =>{
  return(
    <div>
    <p>
        {p.part} {p.exercises}
    </p>
  </div>
  )
 

}

const Content = (p)=>{
  return (
    <div>
      <Part part = {p.part1.name} exercises = {p.part1.exercises}/>
      <Part part = {p.part2.name} exercises = {p.part2.exercises}/>
      <Part part = {p.part3.name} exercises = {p.part3.exercises}/>
    </div>
  )
}

const Total = (p) =>{
  return(
    <div>
    <p>The total number of exercises is {p.part1.exercises + p.part2.exercises + p.part3.exercises}</p>
  </div>
  )
}

const App = ()=> {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return(
    <div>
      <Header course ={course} />

      <Content part1 = {part1} part2 = {part2} part3 = {part3}/>

      <Total part1 = {part1} part2 = {part2} part3 = {part3}/>
   
    
     
    </div>
  )
}

export default App