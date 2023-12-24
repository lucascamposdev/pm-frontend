import styles from './DeleteTask.module.css'

import { useDispatch } from 'react-redux';

import { deleteTask } from '../../../reducers/taskReducer';

const DeleteTask = ({ id }) => {

    const dispatch = useDispatch();

    const handleDelete = () =>{

        dispatch(deleteTask(id))
    }

  return (
    <>
    <i className={`bi bi-trash3 ${styles.delete}`} onClick={handleDelete}></i>
    </>
  )
}

export default DeleteTask