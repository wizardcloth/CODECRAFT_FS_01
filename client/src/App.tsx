import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import AuthCallback from "./pages/authCallback/authCallback.google"
import Home from "./pages/homepage/home"
import Unauthorized from "./pages/Unauthorized"
import { Toaster } from "react-hot-toast"
function App() {

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/authcallback/google" element={<AuthCallback />} />
        <Route path="/home" element={<Home />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </>
  )
}

export default App
