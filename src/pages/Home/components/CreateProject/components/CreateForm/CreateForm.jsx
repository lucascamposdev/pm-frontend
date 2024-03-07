import * as S from './styles'

// Reducer
import {create} from '@reducers/projectReducer'
import { useDispatch, useSelector } from 'react-redux';

// Utils
import capitalizeInput from '@utils/capitalizeInput'

const CreateForm = () => {

  const dispatch = useDispatch();
  const { minorLoading: loading } = useSelector(state => state.projectReducer)

  const handleSubmit = (e) =>{
    e.preventDefault();

    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData)

    for (const [key, value] of Object.entries(payload)) {
      if (typeof value === 'string') {
        payload[key] = capitalizeInput(value);
      }
    }

    dispatch(create(payload))
  }

  return (
    <S.Form onSubmit={handleSubmit}>

      <S.Wrapper>
        <S.Icon/>
        <S.LogoText>Criar Projeto</S.LogoText>
      </S.Wrapper>
      <S.Hr/>
      <S.Label>Nome do Projeto</S.Label>
      <S.Input id="outlined-basic" label="Project" variant="outlined" name='name' autoComplete='off'/>
      
      {!loading ? 
      <S.Button type='submit' isLoading={loading}>Criar</S.Button>
      :
      <S.Button type='submit' disabled isLoading={loading}>Carregando...</S.Button>
      }
    </S.Form>
  )
}

export default CreateForm