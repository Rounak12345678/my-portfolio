import Wrapper from '@/components/Wrapper/Wrapper'
import { Container, Typography } from '@mui/material'
import React from 'react'

const Index = () => {
  return (
   <Wrapper>
    <Container fixed>
      <Typography variant='h1'>Hello from Home</Typography>
    </Container>
   </Wrapper>
  )
}

export default Index