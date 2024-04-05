import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './frontend/pages/Home'

// function App() {
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    // document.getElementById('root'),
  )
}

// export default App;
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
