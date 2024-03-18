// Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Hooks
import { useSelector } from 'react-redux';

// Pages
import Home from '@pages/Home'
import Login from '@pages/Login';
import Register from '@pages/Register';
import ProjectPage from '@pages/Project';
import ErrorPage from '@pages/ErrorPage'

// Components
import { Sidebar, Navbar } from '@components';
import Modal from './components/ui/Modal/Modal';

// Layout
import { Main } from '@styles/Container';
import { Content } from '@components';

// Styles
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

// Context
import { ModalProvider } from './context/modalContext';

function App() {

  const { auth } = useSelector(state => state.authReducer)

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Main>
          {auth ? <Navbar /> : ""}
          <Content>
            {auth ? <Sidebar /> : ""}
            <ModalProvider>
              <Modal/>
              <Routes>
                <Route path='/' element={auth ? <Home /> : <Navigate to='/login' />} />
                <Route path='/project/:id' element={auth ? <ProjectPage /> : <Navigate to='/login' />} />
                <Route path='/login' element={auth ? <Home /> : <Login />} />
                <Route path='/register' element={auth ? <Home /> : <Register />} />
                <Route path="*" element={<ErrorPage/>}/>
              </Routes>
            </ModalProvider>
          </Content>
          </Main>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
