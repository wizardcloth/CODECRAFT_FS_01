import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import AuthCallback from "./pages/authCallback/authCallback.google"
import Home from "./pages/homepage/home"
import Unauthorized from "./pages/Unauthorized"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/authcallback/google" element={<AuthCallback/>} />
        <Route path="/authcallback/email" element={<AuthCallback/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/unauthorized" element={<Unauthorized/>} />
      </Routes>
    </>
  )
}

export default App
