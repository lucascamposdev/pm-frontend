import * as S from '../styles';

// Material Ui
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// React
import { useEffect } from 'react';

// Components
import { TestLogin } from '@components';

// Reducer
import { useDispatch, useSelector } from 'react-redux';
import { login, resetStates } from '@reducers/authReducer'


const Login = ()  => {

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
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={3}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={9} md={5}  square="true" alignSelf='center' >
          <Box
            sx={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',    
            }}
          >
            <S.Title component="h1" variant="h5">
              Login
            </S.Title>
            <Box component="form" noValidate onSubmit={handleSubmit} 
            sx={{ width: '100%' , maxWidth:'500px', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
              />

            <TestLogin handleTestLogin={handleTestLogin}/>

              <S.StyledButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading ? true : false}
              >
                {loading ? 'Carregando' : 'Login'}
              </S.StyledButton>

              <Grid container>
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item sx={{ width: '100%', textAlign: 'center' }}>
                  <S.StyledLink to='/register'>
                      Ainda não possui uma conta? <u>Cadastre-se</u>
                  </S.StyledLink>
                </Grid>
              </Grid>

            </Box>
          </Box>
              <S.Copyright>© 2024, Developed by /Lucas Campos.</S.Copyright>
        </Grid>
      </Grid>
  );
}

export default Login;