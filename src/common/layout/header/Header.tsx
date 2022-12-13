import React, { useState } from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import TuneIcon from '@mui/icons-material/Tune'
import { useNavigate } from 'react-router-dom'
import { Sidebar } from '../../sidebar/Sidebar'

export const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <AppBar position={'fixed'}>
      <Sidebar open={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Toolbar>
        <IconButton color={'inherit'} onClick={() => setSidebarOpen(true)}>
          <TuneIcon />
        </IconButton>
        <Typography
          sx={{ flexGrow: 1 }}
          variant={'h5'}
          component={'nav'}
          onClick={() => navigate('/')}
        >
          Hardware Store
        </Typography>
        <IconButton color={'inherit'} onClick={() => navigate('/cart')}>
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
