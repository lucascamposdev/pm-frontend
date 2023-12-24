import styles from './UserSettings.module.css'

// Components
import Dropdown from '../Dropdown/Dropdown'

// Hooks
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'

// Reducer
import { getprofile, getuser } from '../../../reducers/userReducer'
import { getProjects } from '../../../reducers/projectReducer'

const UserSettings = () => {

  const { auth } = useSelector(state => state.authReducer)
  const { profile } = useSelector(state => state.userReducer)
  const { task } = useSelector(state => state.taskReducer)
  const { projects } = useSelector(state => state.projectReducer)
  const dispatch = useDispatch();

  useEffect(() =>{
    if(auth){
      dispatch(getprofile(auth.id))
      dispatch(getProjects())
    }
  }, [auth])

  useEffect(() =>{
    if(auth){
      dispatch(getuser(auth.id))
    }
  }, [auth, task, projects])

    const [ dropdown, setDropdown ] = useState(false)

  return (
    <section className={styles.user_settings}>
      <div id="settings-btn" className={`${styles.button} ${dropdown && styles['button_active']}`} onClick={() => setDropdown(prev => !prev)}>
          {profile && profile.name} 
          <i className="bi bi-caret-down-fill" ></i>
      </div>
        <Dropdown isOpen={dropdown} closeDropdown={setDropdown} user={profile}/>
    </section>
  )
}

export default UserSettings