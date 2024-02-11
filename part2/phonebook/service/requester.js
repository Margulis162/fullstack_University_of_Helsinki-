import axios from 'axios'
const url = 'http://localhost:3001/persons'

const getAll = () =>{
    const req = axios.get(url)
    return req
        .then(resp => resp.data)
        .catch(err => console.log(err))
}

const addContact =(obj) =>{
    const req = axios.post(url, obj)
    return req
            .then(resp =>resp.data)
            .catch(err => console.log(`error at addContact requester ${err.message}`))
}

const remove =(id) =>{
    // const contactToDel = `${url}/${id}`
    const req = axios.delete(url+"/"+id)
    return req
        .then(resp => resp.data )
    
    

}
export default {getAll, addContact, remove}