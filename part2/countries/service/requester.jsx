import axios from 'axios'

const urlAll = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const urlByName ='https://studies.cs.helsinki.fi/restcountries/api/name/' //add name here

const getAll = () =>{
    const req = axios.get(urlAll)
    return req
    .then((resp) =>{return resp})
    .catch((err)=>console.log(`error at getAll the message is ${err.message}`))
  
}

export default {getAll,}