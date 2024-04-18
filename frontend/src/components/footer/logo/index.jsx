import { Box, CardMedia } from '@mui/material'
import React from 'react'
import img from './../../../assets/logo.png'
import ListSocial from './ListSocial'
const Logo = () => {
  return (
    <>
        <Box sx={{ display:'flex', flexDirection:'column', gap:4, alignItems:'flex-start', p:1 }} >
            <CardMedia 
                component={'img'}
                src={img} 
                sx={{ width:'50%' }}
                />
                <Box sx={{ display:'flex', alignItems:'center', justifyContent:'space-evenly', gap:1 }} >
                    <ListSocial />
                </Box>
        </Box>
    </>
  )
}

export default Logo