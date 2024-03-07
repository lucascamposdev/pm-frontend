// Hooks
import { useDispatch, useSelector } from "react-redux";

// Context
import { useModal } from '@context/modalContext';

// Reducer
import { updateTasksLocally, updateTask, applyTask, deleteTask } from "@reducers/taskReducer";

// Components
import { ConfirmModalContent } from '@components'
import { leaveTask, setTask } from "../reducers/taskReducer";

const useTaskOptions = (task) =>{
    const { profile } = useSelector(state => state.userReducer)
    const { openModal, closeModal } = useModal();
    const dispatch = useDispatch();

    const handleDeleteModal = () => {
        openModal(<ConfirmModalContent handleSubmit={handleDeleteTask} title='Task' />)
    }
    
    const handleDeleteTask = () => {
        dispatch(deleteTask(task.id))
        closeModal();
    }

    const handleUpdatePriority = (e) =>{
        e.preventDefault();
        const checkboxValue = e.target.value

        const newTask = {...task, priority: checkboxValue, id: task.id}

        dispatch(updateTasksLocally(newTask))
        dispatch(updateTask(newTask))
    }

    const handleApplyOnTask = () =>{
        const newTask = {...task, 
            userId: profile.id, 
            responsable:
                { name:profile.name, 
                lastName: profile.lastName}
            }

        dispatch(setTask(newTask))
        dispatch(updateTasksLocally(newTask))
        dispatch(applyTask(task.id))
    }

    const handleLeaveTask = () =>{
        const newTask = {...task, 
            userId: null, 
            responsable: null
            }

        dispatch(setTask(newTask))
        dispatch(updateTasksLocally(newTask))
        dispatch(leaveTask(task.id))
    }
    
    return {
        handleDeleteModal,
        handleUpdatePriority,
        handleApplyOnTask,
        handleLeaveTask
    }
}

export default useTaskOptions;