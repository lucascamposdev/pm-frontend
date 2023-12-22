import './App.css'

// Router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

// Hooks
import { useSelector } from 'react-redux';

// Pages
import Home from './pages/home/Home'
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Tasks from './pages/your-tasks/Tasks'

// Components
import Navbar from './components/layout/Navbar/Navbar';
import Sidebar from './components/layout/Sidebar/Sidebar';
import NewProject from './pages/new-project/NewProject';
import ProjectPage from './pages/project-page/ProjectPage';
import Account from './pages/account/Account';

function App() {

  const { auth } = useSelector(state => state.authReducer)

  return (
    <>
    <BrowserRouter>
    {auth ? <Navbar/> : ""}
    <main className='container'>
      {auth ? <Sidebar/> : ""}
        <Routes>
          <Route path='/' element={auth ? <Home/> : <Navigate to='/login' />}/>
          <Route path='/tasks' element={auth ? <Tasks/> : <Navigate to='/login' />}/>
          <Route path='/new' element={auth ? <NewProject/> : <Navigate to='/login' />}/>
          <Route path='/:id' element={auth ? <ProjectPage/> : <Navigate to='/login' />}/>
          <Route path='/account' element={auth ? <Account/> : <Navigate to='/login' />}/>
          <Route path='/login' element={auth ? <Home/> : <Login/> }/>
          <Route path='/register' element={auth ? <Home/> : <Register/> }/>
        </Routes>
    </main>
    </BrowserRouter>
    </>
  )
}

export default App
