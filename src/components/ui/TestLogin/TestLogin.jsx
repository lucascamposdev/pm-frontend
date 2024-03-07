import styles from './TestLogin.module.css'
import * as S from './styles.jsx'

// Utils
import credentials from '../../../utils/credentials.js'

const TestLogin = ({ handleTestLogin }) => {

  return (
    <S.Container>
        <S.Title className={styles.title}>Login Rápido</S.Title >
        <S.Disclaimer>apenas para razões de teste<em>*</em></S.Disclaimer>
        <S.Wrapper>
            <S.Box onClick={() => handleTestLogin(credentials.collaborator)}>
                <i className="bi bi-person-circle"></i>
                <p>Colaborador</p>
            </S.Box>
            <S.Box onClick={() => handleTestLogin(credentials.manager)}>
                <i className="bi bi-star-fill"></i>
                <p>Gerente</p>
            </S.Box>
        </S.Wrapper>
    </S.Container>
  )
}

export default TestLogin