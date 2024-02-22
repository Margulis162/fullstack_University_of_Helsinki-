const List = ({items}) =>{

    //css
    const ulStyle = {
        'list-style':'none',
        //flex
        'display':'flex',
        'flex-direction':'column',
        'align-items':'flex-start'
    }

    const liStyle ={
        'margin-block':'7px'
    }

    //js
    if(items === null){return null}else
    if(items.length > 10){return <p>Too many results, be more specific</p>}else  
    {
        const lst = items.map((item) =><li style={liStyle}><button>{item.name.common}</button></li>)
        return(
            <ul style ={ulStyle}>
                {lst}
            </ul>
        )
    }
}
 
export default List