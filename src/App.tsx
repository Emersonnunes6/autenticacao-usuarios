import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import ConfirmEmail from './pages/ConfirmEmail/ConfirmEmail'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/confirmEmail' element={<ConfirmEmail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
