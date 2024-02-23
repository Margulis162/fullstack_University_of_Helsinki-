const Form = ({text, handleChange, data}) =>{
  // css
  const styleH3 ={
    display:'inline-block',
    marginInlineEnd:'20px',
    //typo
    color:'rgb(200,200,200)'
  }

  const inputStyle={
    backgroundImage:'linear-gradient(to right bottom,rgb(20, 29, 64),rgb(30, 29, 44),rgb(20, 41, 69)',
    paddingInline:'15px',
    blockSize:'30px',
    border:'0px solid black',
    borderRadius:'15px',
    boxShadow:'inset 3px 3px 6px rgba(30, 20, 30, 1),inset -3px -3px 8px rgba(0, 255, 255, 0.2), -2px -2px 10px rgba(0, 20, 20,1),2px 2px 8px rgba(200, 255, 255, .5)',
    //typography
    fontSize:'18px',
    color:'cyan',
    letterSpacing:'.15rem'
  }
  //the next part is to make sure the data are fetched before a search performed, sufficient for my purposes 
    if(data === null){
        return null
    }
    return(
      <div>
      <form>
        <h3 style={styleH3}>{text}</h3>
        <input onChange={handleChange} style = {inputStyle}/>
      </form>
    </div>
    )
  }

export default Form