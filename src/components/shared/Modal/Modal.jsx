import styles from './Modal.module.css'

import { useEffect } from 'react';

const Modal = ({ children, closeModal }) => {

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
  
    const handleClickOutside = (e) => {
        if (e.target.id == 'container' || e.target.id == 'close') {
          closeModal()
        }
    }; 

  return (
    <section id='container' className={styles.container}>
        <div className={styles.modal}>
        <i id='close' className={`bi bi-x-lg ${styles.close}`}></i>
            {children}
        </div>
    </section>
  )
}

export default Modal