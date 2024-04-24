import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./frontend/pages/Login"
import Signup from "./frontend/pages/Signup"
import Home from "./frontend/pages/Home"
import Profile from "./frontend/pages/Profile"
import { Navigate } from "react-router-dom"

function App() {
  const token = JSON.parse(localStorage.getItem("userToken"))

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/auth/login" element={<Login />} />
        <Route exact path="/auth/signup" element={<Signup />} />
        <Route
          exact
          path="/"
          element={true ? <Home /> : <Navigate to="/auth/login" />}
        />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
