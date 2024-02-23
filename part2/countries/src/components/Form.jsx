const Form = ({text, handleChange, data}) =>{
  //the next part is to make sure the data are fetched before a search performed, sufficient for my purposes 
    if(data === null){
        return null
    }
    return(
      <div>
      <form>
        <h3>{text}</h3>
        <input onChange={handleChange}/>
      </form>
    </div>
    )
  }

export default Form