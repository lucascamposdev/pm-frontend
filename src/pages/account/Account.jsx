import { useDispatch, useSelector } from 'react-redux'
import LoadingButton from '../../components/shared/LoadingButton/LoadingButton'
import styles from './Account.module.css'
import LoadingSpinner from '../../components/shared/LoadingSpinner/LoadingSpinner';
import { useEffect, useState } from 'react';
import Form from '../../components/shared/Form/Form';
import FormMessage from '../../components/shared/FormMessage/FormMessage';
import { update } from '../../reducers/userReducer';

const Account = () => {
    
    const dispatch = useDispatch();
    const { profile, loading, error, success } = useSelector(state => state.userReducer)

    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    useEffect(() =>{
        if(profile){
            setName(profile.name)
        }
    }, [profile])
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        let payload = {}

        if(name){
            payload.name = name
        }
        if(password){
            payload.password = password
        }
        if(confirmPassword){
            payload.confirmPassword = confirmPassword
        }
        
        dispatch(update(payload))
    }
    

    if(!profile){
        return <LoadingSpinner/>
    }
    
    return (
    <section className='page'>
        <Form handleSubmit={handleSubmit}>
            <label>Nome</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

            <label>Nova senha</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <label>Confirmar nova senha</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>

            <LoadingButton name={'Enviar'} loading={loading}/>

            {error && error.map((msg, i) => 
                <FormMessage key={i} message={msg} type="error"/>
            )}

            {success && <FormMessage message={['Dados alterados com sucesso']} type="success"/>}
        </Form>
    </section>
  )
}

export default Account