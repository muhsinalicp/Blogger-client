import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import {QueryClient , QueryClientProvider} from '@tanstack/react-query'
import Signup from './components/auth/Signup';
import SignIn from './components/auth/SignIn';
import AboutUser from './components/homecomp/AboutUser';
import ViewProfile from './components/profile/ViewProfile';
import ViewBlogs from './components/homecomp/ViewBlogs';

const client = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={client}>
    <Routes>
      <Route path='*' element={<h1>Not found</h1>} />
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/about" element={<AboutUser/>} />
      <Route path="/profile" element={<ViewProfile/>} />
      <Route path="/blogs/:id" element={<ViewBlogs/>} />
    </Routes>
    </QueryClientProvider>
  )
}
