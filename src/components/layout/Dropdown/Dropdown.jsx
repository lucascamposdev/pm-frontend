import styles from './Dropdown.module.css'

// Functions
import {AccessName} from '../../../functions/AccessName.js'

// Hooks
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Reducer
import { logout } from '../../../reducers/authReducer';

// Router
import { Link } from 'react-router-dom'

const Dropdown = ({ isOpen, closeDropdown, user }) => {

  const dropdownRef = useRef(null)
  const dispatch = useDispatch()

  const handleLogout = () =>{
    dispatch(logout())
  }
  
  useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

  const handleClickOutside = (e) => {
      if (!dropdownRef.current.contains(e.target) && e.target.id != 'settings-btn') {
        closeDropdown(false)
      }
  }; 

  if(!user){
    return '...'
  }

  return (
    <div id='dropdown' className={`${styles.dropdown} ${isOpen ? styles['activeDropdown'] : styles['unactiveDropdown']}`} ref={dropdownRef}>
        
        {user.acess == 1 ? 
        <i className={`bi bi-person-circle ${AccessName(user.access)}`}></i> 
        : <i className={`bi bi-star-fill ${AccessName(user.access)}`}></i>}
        
        <h1>{user.name}</h1>
        <p className={AccessName(user.access)}>{AccessName(user.access)}</p>
        <p>{user.email}</p>
        
        <Link to="/account">
        <button className={styles.button}>Manage your account</button>  
        </Link>

        <span className={styles.logout} onClick={handleLogout}>Log out</span>
    </div>
  )
}

export default Dropdown