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

const remover =(id) =>{
    const ask = confirm(`Are you sure you want to delete the contact?`)
     if(ask === true){
        const req = axios.delete(url+"/"+id)
        return req
        .catch(err => console.log(`error at remover ${err.message}`))
     }else{ 
        return Promise.reject('contact stays in the book')}
}

const phoneUpdate =(obj) =>{
    const ask = confirm(`${obj.name} is already in the contacts. Would you like to update the phone number?`)
    if(ask === true){
        const updateData ={ number:obj.number}
        const update = axios.patch(url+"/"+obj.id, updateData)
        return update
            .catch(err => console.log(`error at phoneUpdate ${err.message}`))
    }else{
        return Promise.reject('changed your ming, huh?')
    }
   
}

export default {getAll, addContact, remover, phoneUpdate}