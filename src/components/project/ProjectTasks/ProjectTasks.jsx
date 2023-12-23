import styles from "./ProjectTasks.module.css"

import Table from "../../shared/Table/Table"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allProjectTasks } from "../../../reducers/taskReducer"

const ProjectTasks = ({ project }) => {

    const { profile } = useSelector(state => state.userReducer)
    const { task, tasks } = useSelector(state => state.taskReducer)
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(allProjectTasks(project.id))
    }, [project])

    if(tasks.length > 0 && tasks[0].projectId != project.id){
        return <table>
                <thead>
                    <tr>
                        <th>Carregando...</th>
                    </tr>
                </thead>
            </table>
    }

  return (
    <div>
        <Table task={task} tasks={tasks} isOwner={profile.id == project.userId}/>    
    </div>
  )
}

export default ProjectTasks