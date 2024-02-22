import Display from "./display"
const List = ({items}) =>{

    //css
    const ulStyle = {
        listStyle:'none',
        //flex
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start'
    }

    const liStyle ={
        marginBlock:'7px'
    }

    //js
    if(items === null){return null}else
    if(items.length > 10){return <p>Too many results, be more specific</p>}else
    if(items.length <10 && items.length !==1)
    {
        const lst = items.map((item) =><li style={liStyle} key = {item.name.common}><button>{item.name.common}</button></li>)
        return(
            <ul style ={ulStyle}>
                {lst}
            </ul>
        )
    }
    else{
        return(
            <>
            <Display item ={items}/>
            </>
        )
    }

}
 
export default List