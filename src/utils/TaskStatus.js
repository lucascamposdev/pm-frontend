const TaskStatus = (status) =>{
    switch (status) {
        case 0:
            return 'Não Iniciado'
        case 1:
            return 'Em Andamento'
        case 2:
            return 'Finalizado'
        default:
            break;
    }
}

export default TaskStatus