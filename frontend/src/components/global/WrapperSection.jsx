import React from 'react'
import { Box, Container } from '@mui/material';
// import { useTheme } from '@emotion/react';

const WrapperSection = ({ position = 'relative', children }) => {
  return (
    <>
      <Container maxWidth={'xl'} >
        <Box sx={{ pt: { md: 1, xs: 1 }, pb: 1, mt: { md:1, xs: 1 }, mb: 1, display: 'flex', flexDirection: 'column', gap: { md: 1.7, xs: 1 }, alignItems: 'center', position: position, zIndex: 11}} >
          
          {children}
        </Box>
      </Container>
    </>
  )
}

export default WrapperSection