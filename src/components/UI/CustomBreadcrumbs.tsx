import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'

interface BreadcrumbItem {
  label: string
  to: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

const CustomBreadcrumbs = ({ items }: BreadcrumbsProps) => {
  const location = useLocation()

  return (
    <Breadcrumbs>
      {items.map((item, index) => {
        const isCurrentPage = location.pathname === item.to

        return isCurrentPage ? (
          <Typography key={index} color='text.primary'>
            {item.label}
          </Typography>
        ) : (
          <Link key={index} to={item.to}>
            {item.label}
          </Link>
        )
      })}
    </Breadcrumbs>
  )
}

export default CustomBreadcrumbs
