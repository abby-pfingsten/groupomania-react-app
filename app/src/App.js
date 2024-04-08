import React from 'react'
// import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './frontend/pages/Home'
import Layout from './frontend/pages/Layout'
import Profile from './frontend/pages/Profile'

function App() {
  // export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="contact" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // document.getElementById('root'),
  )
}

export default App
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App />)
