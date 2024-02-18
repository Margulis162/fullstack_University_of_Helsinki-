const Filter = ({filterHandler}) =>{
    return(
      <div>
      filter:{' '}
      <input onChange ={filterHandler}/>
    </div>
    )
  }

  export default Filter