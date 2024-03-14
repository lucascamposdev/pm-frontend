import * as S from './styles'

const ErrorPage = () => {
  return (
    <S.Container>
        <S.Wrapper>
            <S.Icon sx={{ fontSize: '50px'}}/>
            <S.Title>Página não encontrada</S.Title>
            <S.Button to="/">Voltar ao início</S.Button>
        </S.Wrapper>
    </S.Container>
  )
}

export default ErrorPage;