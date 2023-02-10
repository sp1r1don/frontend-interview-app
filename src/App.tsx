import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import logo from 'src/logo.svg'
import { ProductID } from 'src/views/buy/ProductID'
import { Home } from 'src/views/Home'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy">
          <Route index element={<Navigate to="/" replace />} />
          <Route path=":productID" element={<ProductID />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
