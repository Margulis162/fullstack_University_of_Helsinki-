const Success =({msg}) =>{
    
    const msgStyle={
        color:'green',
        border:'solid',
        fontsize:16
    }

    if(msg === null){
        return null
    }
    return(
        <div style={msgStyle} >
            <h3>!Success!</h3>
            <br/>
            <p>{`${msg}`}</p>
        </div>
    )
}

export default Success