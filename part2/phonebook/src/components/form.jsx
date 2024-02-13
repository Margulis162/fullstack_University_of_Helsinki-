const Form =({addContact, nameChangeHandler, numChangeHandler}) =>{
    return(
      <div>
       <form onSubmit={addContact}>
          {/* name */}
          <div>
            name:   
            <input
             onChange ={nameChangeHandler}/>
          </div>
          {/* phone */}
          <div>
            phone: 
            <input
             onChange ={numChangeHandler}/>
          </div>
          {/* submisson button */}
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    </div>
    )
    
  }

  export default Form