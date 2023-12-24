// Components
import NoTasks from "../../shared/NoTasks/NoTasks"
import Table from "../../shared/Table/Table"

// Hooks
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

// Reducer
import { allProjectTasks } from "../../../reducers/taskReducer"

const ProjectTasks = ({ project }) => {

    const { profile } = useSelector(state => state.userReducer)
    const { task, tasks, loading, success } = useSelector(state => state.taskReducer)
    const dispatch = useDispatch();

    useEffect(() =>{
      dispatch(allProjectTasks(project.id))
    }, [project])

    if(loading || tasks.length > 0 && tasks[0].projectId != project.id){
      return <table>
        <thead>
          <tr>
            <th>Carregando Tasks...</th>
          </tr>
        </thead>
      </table>
    }

  return (
    <div>
        <Table task={task} tasks={tasks} isOwner={profile.id == project.userId}/>   
        {success && tasks.length == 0 ?
        <NoTasks/>
        :
        ''
        } 
    </div>
  )
}

export default ProjectTasks