// Styles
import styles from './Navbar.module.css'

// Components
import Settings from './components/Settings/Settings';

// Router
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to="/">
        <p className={styles.title}>Project Manager</p>
        </Link>
        <Settings/>
    </nav>
  )
}

export default Navbar