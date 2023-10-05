import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import ConfirmEmail from './pages/ConfirmEmail/ConfirmEmail'
import Profile from './pages/Profile/Profile'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          //Pagina de Login
          <Route path='/login' element={<Login />} />

          //Pagina de Cadastro
          <Route path='/register' element={<Register />} />

          //Pagina de Confirmação de email
          <Route path='/confirmEmail' element={<ConfirmEmail />} />

          //Pagina de Perfil
          <Route path='/profile' element={<Profile />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
