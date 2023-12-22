export const AccessName = (access) =>{
    if(access == 1){
        return 'Colaborador'
    }else if(access == 2){
        return 'Gerente'
    }
    else if(access == 3){
        return 'Admin'
    }
}