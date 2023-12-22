import styles from './Auth.module.css'

// Components
import LoadingButton from '../../components/shared/LoadingButton/LoadingButton'
import FormMessage from '../../components/shared/FormMessage/FormMessage'

// Hooks
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

// Reducer
import { login, resetStates } from '../../reducers/authReducer'

// Utils
import { Link } from 'react-router-dom'
import TestLogin from '../../components/TestLogin/TestLogin'

const Login = () => {

  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.authReducer)

  const handleSubmit = (e) =>{
    e.preventDefault();

    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData)

    dispatch(login(payload))
  }

  useEffect(() =>{
    dispatch(resetStates())
  }, [])

  const handleTestLogin = (payload) =>{
    dispatch(login(payload))
  }

  return (
    <div className={styles.container}>

      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Login</h1>

          <input type="email" placeholder='Email' name='email' autoComplete='off'/>
          <input type="password" placeholder='Senha' name='password' autoComplete='off'/>
          <LoadingButton name="Login" loading={loading}/>

          <TestLogin handleTestLogin={handleTestLogin}/>

          {error ? error.map((errorMsg, index) => <FormMessage key={index} message={errorMsg} type='error'/>): ""}

          <span>
            Ainda não possui uma conta?  <Link to='/register' className={styles.link}>Cadastre-se</Link>
          </span>
      </form>

      <footer>© 2023 Presto, Dev.</footer>
    </div>
  )
}

export default Login