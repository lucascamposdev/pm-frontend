import api from '../utils/api.js'
import requestConfig from '../utils/requestConfig.js'

const register = async(payload) =>{

    const config = requestConfig("POST", payload)
    try{
        const res = await fetch(api + '/users/register', config);
        const data = await res.json();

        if(!res.ok){
            data.error = true
            return data
        }
        
        sessionStorage.setItem("auth", JSON.stringify(data))
        return data
    }
    catch(err){
        console.log('Erro ao realizar requisição')
    }
}

const login = async(payload) =>{

    const config = requestConfig("POST", payload)

    try{
        const res = await fetch(api + '/users/login', config);
        const data = await res.json();

        if(!res.ok){
            data.error = true
            return data
        }
        sessionStorage.setItem("auth", JSON.stringify(data))
        return data
    }
    catch(err){
        console.log('Erro ao realizar requisição')
    }
}

const logout = async() =>{
    sessionStorage.removeItem('auth');
}

const authService = {
    register,
    login,
    logout
}

export default authService