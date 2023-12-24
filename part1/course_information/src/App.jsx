const Header = (p)=>{
  return(
    <div>
      <h1>
      {p.course.name}
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
      <Part part = {p.course.parts[0].name} exercises = {p.course.parts[0].exercises}/>
      <Part part = {p.course.parts[1].name} exercises = {p.course.parts[1].exercises}/>
      <Part part = {p.course.parts[2].name} exercises = {p.course.parts[2].exercises}/>
    </div>
  )
}

const Total = (p) =>{
  return(
    <div>
    <p>The total number of exercises is {p.course.parts[0].exercises + p.course.parts[1].exercises + p.course.parts[2].exercises}</p>
  </div>
  )
}

const App = ()=> {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return(
    <div>
      <Header course ={course} />

      <Content course ={course} />

      <Total course ={course} />
   
    
     
    </div>
  )
}

export default App