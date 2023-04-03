import React from 'react'
import Home from '../views/Home'
import { Route, Routes } from 'react-router-dom'

export default function Routers() {
  return (
    <div className="main">
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </div>
  )
}
