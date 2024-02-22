const Form = ({text, handleChange, data}) =>{
    if(data === null){
        return null
    }
    return(
      <div>
      <form>
        {text}
        <input onChange={handleChange}/>
      </form>
    </div>
    )
  }

export default Form