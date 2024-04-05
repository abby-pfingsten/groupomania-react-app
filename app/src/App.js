import logo from './logo.svg';
import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    // <React.StrictMode>
    // <Header />
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={        <div>hi</div>
} />
        {/* <Route path="/survey" element={<Survey />} /> */}
      </Routes>
    </BrowserRouter>
    // document.getElementById('root'),
  )
}

export default App;
