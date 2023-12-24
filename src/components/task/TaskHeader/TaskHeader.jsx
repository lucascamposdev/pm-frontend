import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { taskBelongsTo } from "../../../reducers/taskReducer";

const TaskHeader = () => {

    const { task, projectName, nameLoading } = useSelector(state => state.taskReducer)
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(taskBelongsTo(task.projectId))
    }, [task])

  return (
    <>
    <p>Projeto</p>
    <h2>{nameLoading ? 'Carregando...' : projectName}</h2>
    </>
  )
}

export default TaskHeader