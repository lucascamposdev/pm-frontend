import styles from './Navbar.module.css'

// Components
import UserSettings from '../UserSettings/UserSettings';

// Router
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to="/">
          <img src="./assets/images/logo-green.svg" alt="Logo" className={styles.logo}/>
        </Link>
  
        <p className={styles.title}>| Project Manager</p>
        <UserSettings/>
    </nav>
  )
}

export default Navbar