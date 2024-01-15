const Courses = ({courses})=>{
    return(
      <>
      <Content courses ={courses} />
  
       {/* <Content course ={courses} /> */}
  
      {/* <Total course ={courses} />  */ }
    </>
    )
  }
  
  
  // const Header = ({courses})=>{
   

  //   return(
  //     <div>
  //       {courses.map((course) => 
  //       <>
  //        <h1 key={course.id}>{course.name}</h1>
  //        <>
  //        {(course.parts.map(part)) => (
  //               <p>{part.name}</p>
  //        )
       
         
      
  //        }
  //        </>
      
  //       </>
           
  //       )}
  //     </div>
  //   ) 
  // }
  
const Content  = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <h1 >{course.name}</h1>
          {course.parts.map((part) => (
            <p key={part.id}>
              {part.name}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};


  

  // const Part = ({part,exercises}) =>{
  //   return(
  //     <div>
  //     <p>
  //         {part} {exercises}
  //     </p>
  //   </div>
  //   )
   
  
  // }
  
//   const Content = (p)=>{
//     return (
//       <div>
//         hello
//       </div>
//     )
//   }
  
  // const Total = (p) =>{
  //   const sum =p.course.parts.reduce((s, part) => {return s+=part.exercises}, 0)
  //   return(
  //     <div>
  //     <p>The total number of exercises is {sum}</p>
  //   </div>
  //   ) 
  // }
  
  // const App = () => {
  //   const course = {
  //     id: 1,
  //     name: 'Half Stack application development',
  //     parts: [
  //       {
  //         name: 'Fundamentals of React',
  //         exercises: 10,
  //         id: 1
  //       },
  //       {
  //         name: 'Using props to pass data',
  //         exercises: 7,
  //         id: 2
  //       },
  //       {
  //         name: 'State of a component',
  //         exercises: 14,
  //         id: 3
  //       }
  //     ]
  //   }
  
  //   return <Course courses={courses} />
  // }

  export default Courses 