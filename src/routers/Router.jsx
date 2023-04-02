import React from 'react'
import Home from '../views/Home'
import { Route, Routes } from 'react-router-dom'

export default function Routers() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  )
}
