import React from 'react'
import { UserRoutes } from '../routes/UserRoutes'
import AdminRoutes from './AdminRoutes'

const ROLE_CONTROLLER: {
  [key: string]: JSX.Element
} = {
  ADMIN: <AdminRoutes />,
  USER: <UserRoutes />,
}
export const AppRoutes = () => {
  const ROLE = 'USER'
  return ROLE_CONTROLLER[ROLE]
}
