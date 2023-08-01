import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Comment, CreatePost, Home } from './pages'

const App = () => {
  return (
    <div className='bg-[#13131a] h-full min-h-screen'>



      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreatePost />} />
        <Route path='/comment/:name' element={<Comment />} />
      </Routes>


    </div>
  )
}

export default App