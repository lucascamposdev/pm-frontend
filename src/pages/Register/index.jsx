import * as React from 'react';
import * as S from './styles';

// Material Ui
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// Functions
import capitalizeInput from '@utils/capitalizeInput'

// Hooks
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

// Reducer
import { register, resetStates } from '@reducers/authReducer'



const Register = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.authReducer)
  
    const handleSubmit = (e) =>{
      e.preventDefault();
  
      const formData = new FormData(e.target)
      const payload = Object.fromEntries(formData)
  
      for (const [key, value] of Object.entries(payload)) {
        if (typeof value === 'string' && key == 'name' || key == 'lastName') {
          payload[key] = capitalizeInput(value);
        }
      }
  
      dispatch(register(payload))
    }
  
    useEffect(() =>{
      dispatch(resetStates())
    }, [])
  

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
sx={{ display: 'flex',  flexDirection: 'column',alignItems: 'center', justifyContent: 'center', height: '100%'}}
        >
          <S.Title component="h1" variant="h5">
            Crie uma conta
          </S.Title>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nome"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Sobrenome"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirmar Senha"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <S.StyledButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading ? true : false}
              >
                {loading ? 'Carregando' : 'Cadastrar'}
            </S.StyledButton>
            <Grid container justifyContent="flex-end">
              <Grid item sx={{ textAlign: 'center', width: '100%'}}>
                <S.StyledLink to='/login'>
                  Já possui uma conta? Faça o <u>Login</u> 
                </S.StyledLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <S.Copyright>© 2024, Developed by /Lucas Campos.</S.Copyright>
      </Container>
  );
}

export default Register;