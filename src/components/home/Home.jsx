import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Box, styled } from '@mui/material'

const Componet = styled(Box)`
    margin: 10px;
    background: #f2f2f2;
`

function Home() {
  return (
    <>
      <Navbar />
      <Componet>
      <Banner />
      </Componet>
    </>
  )
}

export default Home
