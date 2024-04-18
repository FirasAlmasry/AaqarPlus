import React from 'react'
import { Box, Container, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

const WrapperSection = ({ children }) => {
  const themeM = useTheme();
  const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));
  return (
    <>
      <Container maxWidth={'xl'} >
        <Box sx={{ pt: { md: 4, xs: 1 }, pb: 2, mt: { md: 4, xs: 1 }, mb: 2, display: 'flex', flexDirection: 'column', gap: { md: 1.7,xs:1 }, alignItems: 'center', position: 'relative', zIndex: 11, textAlign: isMobile && 'center' }} >
          
          {children}
        </Box>
      </Container>
    </>
  )
}

export default WrapperSection