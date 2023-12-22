import api from '../utils/api.js'
import requestConfig from '../utils/requestConfig.js'

const allProjectTasks = async(id, token) =>{

    const config = requestConfig("GET", null, token)
    try{
        const res = await fetch(api + '/projects/tasks/' + id, config);
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

const finalize = async(id, token) =>{

    const config = requestConfig("PATCH", null, token)
    try{
        const res = await fetch(api + '/tasks/finalize/' + id, config);
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
    allProjectTasks,
    getTask,
    applyTask,
    finalize,
    deleteTask
}

export default taskService