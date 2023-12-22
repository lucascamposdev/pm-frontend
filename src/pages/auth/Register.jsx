import styles from './Auth.module.css'

// Components
import LoadingButton from '../../components/shared/LoadingButton/LoadingButton'
import FormMessage from '../../components/shared/FormMessage/FormMessage'

// Functions
import capitalizeInput from '../../functions/capitalizeInput'

// Hooks
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

// Reducer
import { register, resetStates } from '../../reducers/authReducer'

// Utils
import { Link } from 'react-router-dom'

const Register = () => {

  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.authReducer)

  const handleSubmit = (e) =>{
    e.preventDefault();

    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData)

    for (const [key, value] of Object.entries(payload)) {
      if (typeof value === 'string' && key == 'name') {
        payload[key] = capitalizeInput(value);
      }
    }

    dispatch(register(payload))
  }

  useEffect(() =>{
    dispatch(resetStates())
  }, [])

  return (
    <div className={styles.container}>

        <form onSubmit={handleSubmit} className={styles.form}>
          <h1 className={styles.title}>Crie uma conta</h1>
          <p className={styles.subtitle}>Veja tudo o que Presto Project Manager pode oferecer a sua equipe gratuitamente</p>
          <input type="text" placeholder='Nome' name='name' autoComplete='off'/>
          <input type="email" placeholder='Email' name='email' autoComplete='off'/>
          <input type="password" placeholder='Senha' name='password' />
          <input type="password" placeholder='Confirme a senha' name='confirmPassword'/>
          <LoadingButton name="Criar Conta" loading={loading}/>

          {/* Error Messages */}
          {error ? error.map((errorMsg, index) => <FormMessage key={index} message={errorMsg} type='error'/>): ""}
          
          <span>
            Já possui uma conta?  <Link to='/login' className={styles.link}>Fazer Login</Link>
          </span>
        </form>

      <footer>© 2023 Presto, Dev.</footer>
    </div>
  )
}

export default Register