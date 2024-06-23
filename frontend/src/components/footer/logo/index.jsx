import { Box, CardMedia } from '@mui/material' 
import React from 'react'
import img from './../../../assets/logo.png'
// import ListSocial from './ListSocial'
const Logo = () => {
  return (
    <>
        <Box sx={{ display:'flex', flexDirection:'column', gap:4, alignItems:{md:'flex-start',xs:'center'}, p:1 }} >
            <CardMedia 
                component={'img'}
          loading='lazy'
                src={img} 
          alt='image'
                sx={{ width:'30%' }}
                />
                
        </Box>
    </>
  )
}

export default Logo