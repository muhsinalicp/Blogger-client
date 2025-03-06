import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<h1>About</h1>} />
    </Routes>
  )
}
