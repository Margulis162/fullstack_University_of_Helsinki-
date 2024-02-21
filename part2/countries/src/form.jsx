const Form = ({text, handleChange}) =>{
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