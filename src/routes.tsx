import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/login'
import OTP from './pages/otp'
import Additional from './pages/additional'
import Grats from './pages/grats'
import ReLogin from './pages/re_login'


export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/re-login' element={<ReLogin/>}/>
            <Route path='/otp' element={<OTP/>}/>
            <Route path='/security' element={<Additional/>}/>
            <Route path='/congratulation' element={<Grats/>}/>
        </Routes>
    </BrowserRouter>
  )
}