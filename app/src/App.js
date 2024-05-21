import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./frontend/pages/Login"
import Signup from "./frontend/pages/Signup"
import Home from "./frontend/pages/Home"
import Profile from "./frontend/pages/Account"
import { Outlet, Navigate } from "react-router-dom"
import { useState } from "react"
import PostPage from "./frontend/pages/PostPage"

const PrivateRoutes = () => {
  const [token, setToken] = useState(() => {
    // getting stored value
    const userInfo = localStorage.getItem("userInfo")
    const initialValue = JSON.parse(userInfo)
    return initialValue || ""
  })
  return token ? <Outlet /> : <Navigate to="/auth/login" />
}

function App() {
  // determine whether or not we are in a mobile view
  const [isMobile, setIsMobile] = useState(false)

  const changeToMobile = () => {
    if (window.innerWidth <= 960) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  window.addEventListener("resize", changeToMobile)
  window.addEventListener("load", changeToMobile)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/auth/login"
          element={<Login isMobile={isMobile} />}
        />
        <Route
          exact
          path="/auth/signup"
          element={<Signup isMobile={isMobile} />}
        />
        <Route element={<PrivateRoutes />}>
          <Route exact path="/" element={<Home isMobile={isMobile} />} />
          <Route
            exact
            path="/:postid"
            element={<PostPage isMobile={isMobile} />}
          />
        </Route>
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
