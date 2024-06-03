import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./frontend/pages/Login"
import Signup from "./frontend/pages/Signup"
import Home from "./frontend/pages/Home"
import Account from "./frontend/pages/Account"
import Profile from "./frontend/pages/Account"
import { Outlet, Navigate } from "react-router-dom"
import { useState } from "react"
import PostPage from "./frontend/pages/PostPage"
import AccountHeader from "./frontend/pages/AccountHeader"

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
  const [accountActive, setAccountActive] = useState("Yes")

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
          element={
            <Login
              isMobile={isMobile}
              accountActive={accountActive}
              setAccountActive={setAccountActive}
            />
          }
        />
        <Route
          exact
          path="/auth/signup"
          element={
            <Signup
              isMobile={isMobile}
              accountActive={accountActive}
              setAccountActive={setAccountActive}
            />
          }
        />
        <Route element={<PrivateRoutes />}>
          <Route exact path="/" element={<Home isMobile={isMobile} />} />
          <Route
            exact
            path="/:postid"
            element={<PostPage isMobile={isMobile} />}
          />
        </Route>
        <Route
          exact
          path="/account"
          element={
            <Account
              isMobile={isMobile}
              accountActive={accountActive}
              setAccountActive={setAccountActive}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
