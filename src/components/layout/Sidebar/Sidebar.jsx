import styles from './Sidebar.module.css'

import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  return (
    <aside className={styles.sidebar} >

        <i className={`bi bi-caret-right-fill ${styles.icon}`}></i>

        <div className={styles.links_container}>

            <header className={styles.links_header}>
                <i className="bi bi-database"></i>
                <p>Organização</p>
            </header>

            <NavLink to='/' className={styles.link}>
                <p className='link-name'>Projetos</p>
            </NavLink>

            <NavLink to='/tasks' className={styles.link}>
                <p className='link-name'>Suas Tasks</p>
            </NavLink>
        </div>  

    </aside>
  )
}

export default Sidebar