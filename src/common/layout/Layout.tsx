import React from 'react'
import { Header } from './header/Header'
import { Routing } from '../routing/Routing'
import { Container } from '@mui/material'

export const Layout = () => {
  const windowInnerHeight = window.innerHeight
  console.log(windowInnerHeight)
  return (
    <>
      <Header />
      <Container maxWidth={'lg'} sx={{ pt: '100px' }}>
        <Routing />
      </Container>
    </>
  )
}
