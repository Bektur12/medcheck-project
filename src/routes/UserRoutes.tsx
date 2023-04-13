import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '../layout/Layout'

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/user' />} />
      <Route path='/user' element={<Layout />}>
        <Route element={<Navigate replace to='/user/lenta' />} index />
        <Route path='lenta' element={<div>hellp</div>} />
      </Route>
    </Routes>
  )
}
