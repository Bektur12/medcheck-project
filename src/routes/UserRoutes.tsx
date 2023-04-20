import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { MainPage } from '../pages/main-page/MainPage'

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<MainPage />} />
      </Route>
    </Routes>
  )
}
