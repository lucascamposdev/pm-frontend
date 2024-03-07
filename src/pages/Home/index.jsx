import * as S from './styles'

// Components
import HomeGrid from './components/Grid/Grid'


// React
import { useEffect } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { getProjects } from '@reducers/projectReducer'

const Home = () => {

  const dispatch = useDispatch();
  const { projects, loading } = useSelector(state => state.projectReducer)

  useEffect(() =>{
    dispatch(getProjects()) 
  }, [])


  return (
  <S.Container>
    <S.Header>
        <S.Title>Área de Trabalho</S.Title>
    </S.Header>
      <HomeGrid projects={projects} projectsLoading={loading}/>
  </S.Container>
  )
}

export default Home