// Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Hooks
import { useSelector } from 'react-redux';

// Pages
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import Tasks from './pages/YourTasks/Tasks'
import ProjectPage from './pages/Project';

// Components
import { Sidebar, Navbar } from '@components';
import Modal from './components/ui/Modal/Modal';

// Styles
import GlobalStyle from '@styles/globalStyles';
import { Main } from '@styles/Container';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

// Context
import { ModalProvider } from './context/modalContext';

function App() {

  const { auth } = useSelector(state => state.authReducer)

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          {auth ? <Navbar /> : ""}
          <Main>
            {auth ? <Sidebar /> : ""}
            <ModalProvider>
              <Modal/>
            <Routes>
              <Route path='/' element={auth ? <Home /> : <Navigate to='/login' />} />
              <Route path='/tasks' element={auth ? <Tasks /> : <Navigate to='/login' />} />
              <Route path='/:id' element={auth ? <ProjectPage /> : <Navigate to='/login' />} />
              <Route path='/login' element={auth ? <Home /> : <Login />} />
              <Route path='/register' element={auth ? <Home /> : <Register />} />
            </Routes>
            </ModalProvider>
          </Main>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
