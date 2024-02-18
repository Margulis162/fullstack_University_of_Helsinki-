const Lst = ({name, number, handleDel, id})=>{
    return(
      <li>
        {name}:{' '+number}
        <button className='delButton' onClick ={handleDel} id ={id}>Delete</button>
      </li>
    ) 
  }

  export default Lst