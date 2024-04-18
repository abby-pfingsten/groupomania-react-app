// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AccountHeader from "./frontend/pages/AccountHeader"
import Header from "./frontend/pages/Header"
import Login from "./frontend/pages/Login"
import Signup from "./frontend/pages/Signup"
import Home from "./frontend/pages/Home"
import Profile from "./frontend/pages/Profile"
import { Navigate } from "react-router-dom"

function App() {
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
