const Lst = ({name, number, handleDel, id})=>{
    return(
      <li>
        {name}:{' '+number}
        <button onClick ={handleDel} id ={id}>Delete</button>
      </li>
    ) 
  }

  export default Lst