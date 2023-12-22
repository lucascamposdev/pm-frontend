const requestConfig = (method, data = null, token = null) =>{

    let config;

    if( method === 'DELETE' || data === null){
        config = {
            method,
            headers: {},
        }
    }else{
        config = {
            method,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }
    }

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}

export default requestConfig;