// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./frontend/pages/Header"
import Login from "./frontend/pages/Login"
import Signup from "./frontend/pages/Signup"
import Home from "./frontend/pages/Home"
import Profile from "./frontend/pages/Profile"

function App() {
  // export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="signup" element={<Signup />} />
        <Route exact path="login" element={<Login />} />
        <Route path="/" element={<Header />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // document.getElementById('root'),
  )
}

export default App
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App />)
