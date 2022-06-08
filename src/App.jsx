import React from 'react'
import { Route, Routes } from 'react-router-dom'

import News from './pages/News/News'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Login from './pages/Login/Login'
import './css/global.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/news" element={<News />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default App
