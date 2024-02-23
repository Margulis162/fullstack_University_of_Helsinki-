const Display =(props) => {
    //css
    const spanStyle ={
        fontSize:'.8rem',
        fontWeight:'bold',
        marginInlineEnd:'10px',
        color:'grey'
    }
    
    const mainDiv = {
        textAlign:'left'
    }

    const flagSpan ={
        marginInlineStart:'10px',
        fontSize:'3rem'
    }
    //js
    const  {name, capital, area, languages, flag}  = props.item[0]

    const Lst = () =>{
            const values = Object.values(languages)
        return(
            <ul>
                {values.map((item) =><li key = {item}>{item}</li>)}
            </ul>
        )
    }
    return(
        <div style = {mainDiv}>
            <h2>
                <span style ={spanStyle}>Official name is:</span>
                    {name.common}
                <span style={flagSpan}>
                    {flag}
                </span>
            </h2>
            <p><span style={spanStyle}>Capital:</span>{capital[0]}</p>
            <p><span style={spanStyle}>Area:</span>{area}km</p>
                <span style={spanStyle}>languages spoken:</span>
                <Lst/>
            
        </div>
    )
}

export default Display