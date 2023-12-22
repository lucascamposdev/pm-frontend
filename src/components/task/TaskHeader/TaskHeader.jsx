import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { taskBelongsTo } from "../../../reducers/taskReducer";

const TaskHeader = () => {

    const { task, projectName } = useSelector(state => state.taskReducer)
    const dispatch = useDispatch();

    useEffect(() =>{
      if(task.name){
        dispatch(taskBelongsTo(task.projectId))
      }
    }, [task])

  return (
    <>
    <p>Projeto</p>
    <h2>{projectName}</h2>
    </>
  )
}

export default TaskHeader