import React from 'react'
import Home from '../views/Home'
import { Route, Routes } from 'react-router-dom'
import Swap from '../views/Swap'
import Farm from '../views/Farm'
import FarmHistory from '../views/FarmHistory'
import Pool from '../views/Pool'
import PoolHistory from '../views/PoolHistory'

export default function Routers() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/swap" element={<Swap />} />

        <Route path="/farm" element={<Farm />} />

        <Route path="/farm-history" element={<FarmHistory />} />

        <Route path="/pool" element={<Pool />} />

        <Route path="/pool-history" element={<PoolHistory />} />

      </Routes>
    </div>
  )
}
