import api from '../utils/api.js'
import requestConfig from '../utils/requestConfig.js'

const getProjects = async(token) =>{

    const config = requestConfig("GET", null, token)
    try{
        const res = await fetch(api + '/projects', config);
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

const getProject = async(id, token) =>{

    const config = requestConfig("GET", null, token)
    try{
        const res = await fetch(api + `/projects/${id}`, config);
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

const create = async(payload, token) =>{

    const config = requestConfig("POST", payload, token)
    try{
        const res = await fetch(api + '/projects', config);
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

const update = async(payload, id, token) =>{

    const config = requestConfig("PUT", payload, token)
    try{
        const res = await fetch(api + `/projects/${id}`, config);
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

const deleteProject = async(id, token) =>{

    const config = requestConfig("DELETE", null, token)
    try{
        const res = await fetch(api + `/projects/${id}`, config);
        const data = await res.json();

        if(!res.ok){
            data.error = true
            return data
        }

        return data.projectId
    }
    catch(err){
        console.log('Erro ao realizar requisição')
    }
}



const finalize = async(id, token) =>{

    const config = requestConfig("PATCH", null, token)
    try{
        const res = await fetch(api + `/projects/${id}`, config);
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

const projectService = {
    getProjects,
    getProject,
    create,
    update,
    deleteProject,
    finalize
}

export default projectService