import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import AuthCallback from "./pages/authCallback/authCallback"
import Home from "./pages/homepage/home"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/authcallback" element={<AuthCallback/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
