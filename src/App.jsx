import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import {QueryClient , QueryClientProvider} from '@tanstack/react-query'
import Signup from './components/auth/Signup';
import SignIn from './components/auth/SignIn';

const client = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={client}>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/about" element={<h1>About</h1>} />
    </Routes>
    </QueryClientProvider>
  )
}
