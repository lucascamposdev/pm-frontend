import styles from './UserSettings.module.css'

// Components
import Dropdown from '../Dropdown/Dropdown'

// Hooks
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'

// Reducer
import { getprofile, getuser } from '../../../reducers/userReducer'

const UserSettings = () => {

  const { auth } = useSelector(state => state.authReducer)
  const { profile } = useSelector(state => state.userReducer)
  const dispatch = useDispatch();

  useEffect(() =>{
    console.log('despachou')
    dispatch(getuser(auth.id))
    dispatch(getprofile(auth.id))
    }, [])

    const [ dropdown, setDropdown ] = useState(false)

  return (
    <section className={styles.user_settings}>
      <div id="settings-btn" className={`${styles.button} ${dropdown && styles['button_active']}`} onClick={() => setDropdown(prev => !prev)}>
          {profile && profile.name} <i className="bi bi-caret-down-fill" ></i>
      </div>
        <Dropdown isOpen={dropdown} closeDropdown={setDropdown} user={profile}/>
    </section>
  )
}

export default UserSettings