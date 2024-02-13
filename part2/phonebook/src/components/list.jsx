const Lst = (p)=>{
    return(
      <li>
        {p.name}:{' '+p.number}
        <button onClick ={p.handleDel} id ={p.id}>Delete</button>
      </li>
    ) 
  }

  export default Lst