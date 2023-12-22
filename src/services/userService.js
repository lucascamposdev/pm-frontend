import api from '../utils/api.js'
import requestConfig from '../utils/requestConfig.js'

const getuser = async(payload, token) =>{

    const config = requestConfig("GET", null, token)
    try{
        const res = await fetch(api + '/users/' + payload, config);
        const data = await res.json();

        if(!res.ok){
            data.error = true
            return data
        }
        
        return data.user
    }
    catch(err){
        console.log('Erro ao realizar requisição')
    }
}

const getprofile = async(id, token) =>{

    const config = requestConfig("GET", null, token)
    try{
        const res = await fetch(api + '/users/' + id, config);
        const data = await res.json();

        if(!res.ok){
            data.error = true
            return data
        }
        
        return data.user
    }
    catch(err){
        console.log('Erro ao realizar requisição')
    }
}

const update = async(payload, token) =>{

    const config = requestConfig("PUT", payload, token)
    try{
        const res = await fetch(api + '/users/', config);
        const data = await res.json();

        if(!res.ok){
            data.error = true
            return data
        }
        return data.user
    }
    catch(err){
        console.log('Erro ao realizar requisição')
    }
}


const userService = {
    getuser,
    getprofile,
    update
}

export default userService