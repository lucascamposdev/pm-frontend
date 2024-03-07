import api from '../utils/api.js'
import requestConfig from '../utils/requestConfig.js'



const getTask = async(id, token) =>{

    const config = requestConfig("GET", null, token)
    try{
        const res = await fetch(api + '/tasks/' + id, config);
        const data = await res.json();

        if(!res.ok){
            data.error = true
            return data
        }
        
        return data.project
    }
    catch(err){
        console.log('Erro ao realizar requisição')
    }
}

const createTask = async(payload, id, token) =>{

    const config = requestConfig("POST", payload, token)
    try{
        const res = await fetch(api + `/tasks/${id}`, config);
        const data = await res.json();

        if(!res.ok){
            data.error = true
            return data
        }
        
        return data.project
    }
    catch(err){
        console.log('Erro ao realizar requisição')
    }
}

const applyTask = async(id, token) =>{

    const config = requestConfig("PATCH", null, token)
    try{
        const res = await fetch(api + '/tasks/apply/' + id, config);
        const data = await res.json();

        if(!res.ok){
            data.error = true
            return data
        }
        
        return data.project
    }
    catch(err){
        console.log('Erro ao realizar requisição')
    }
}

const leaveTask = async(id, token) =>{

    const config = requestConfig("PATCH", null, token)
    try{
        const res = await fetch(api + '/tasks/leave/' + id, config);
        const data = await res.json();

        if(!res.ok){
            data.error = true
            return data
        }
        
        return data.project
    }
    catch(err){
        console.log('Erro ao realizar requisição')
    }
}

const changeTaskStatus = async(payload, token) =>{

    const { id } = payload
    const config = requestConfig("PATCH", payload, token)
    try{
        const res = await fetch(api + '/tasks/change/' + id, config);
        const data = await res.json();

        if(!res.ok){
            data.error = true
            return data
        }
        
        return data.project
    }
    catch(err){
        console.log('Erro ao realizar requisição')
    }
}

const update = async(id, payload, token) =>{

    const config = requestConfig("PATCH", payload, token)
    try{
        const res = await fetch(api + '/tasks/update/' + id, config);
        const data = await res.json();

        if(!res.ok){
            data.error = true
            return data
        }
        
        return data.project
    }
    catch(err){
        console.log('Erro ao realizar requisição')
    }
}

const deleteTask = async(id, token) =>{

    const config = requestConfig("DELETE", null, token)
    try{
        const res = await fetch(api + `/tasks/${id}`, config);
        const data = await res.json();

        if(!res.ok){
            data.error = true
            return data
        }

        return data.taskId
    }
    catch(err){
        console.log('Erro ao realizar requisição')
    }
}

const taskService = {
    getTask,
    createTask,
    applyTask,
    leaveTask,
    changeTaskStatus,
    deleteTask,
    update
}

export default taskService