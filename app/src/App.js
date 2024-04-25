import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./frontend/pages/Login"
import Signup from "./frontend/pages/Signup"
import Home from "./frontend/pages/Home"
import Profile from "./frontend/pages/Profile"
import { Outlet, Navigate } from "react-router-dom"
import { useState } from "react"

const PrivateRoutes = () => {
  const [token, setToken] = useState(() => {
    // getting stored value
    const userToken = localStorage.getItem("userToken")
    const initialValue = JSON.parse(userToken)
    return initialValue || ""
  })
  return token ? <Outlet /> : <Navigate to="/auth/login" />
}

function App() {
  // const token = JSON.parse(localStorage.getItem("userToken"))

  // const [token, setToken] = useState(() => {
  //   // getting stored value
  //   const userToken = localStorage.getItem("userToken")
  //   const initialValue = JSON.parse(userToken)
  //   return initialValue || ""
  // })

  // determine whether or not we are in a mobile view
  const [mobileHeader, setMobileHeader] = useState(false)

  const showMobileHeader = () => {
    if (window.innerWidth <= 960) {
      setMobileHeader(true)
    } else {
      setMobileHeader(false)
    }
  }
  window.addEventListener("resize", showMobileHeader)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/auth/login" element={<Login />} />
        <Route exact path="/auth/signup" element={<Signup />} />
        <Route element={<PrivateRoutes />}>
          <Route
            exact
            path="/"
            element={<Home mobileHeader={mobileHeader} />}
          />
        </Route>
        {/* <Route
          exact
          path="/"
          element={
            token ? (
              <Home mobileHeader={mobileHeader} />
            ) : (
              <Navigate to="/auth/login" />
            )
          }
        /> */}
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
