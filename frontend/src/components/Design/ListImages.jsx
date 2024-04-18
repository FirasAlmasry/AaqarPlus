import React from 'react'
import WrapperSection from '../global/WrapperSection'
import { Box, CardMedia } from '@mui/material'
import img from './../../assets/get-in-touch-img@2x-1024x892.png'
const ListImages = () => {
    //   const clipPathStyle = {
    // clipPath: 'ellipse(50% 80% at 50% 20%)',
    //   }
  return (
    <>
        <WrapperSection>
        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: { md: 'nowrap' ,xs:'wrap' } }} >
                  <CardMedia component={'img'} src={img}  />
                  <CardMedia component={'img'} src={img}  sx={{ml:{md:'-12rem',xs:'0'}}}/>
                  <CardMedia component={'img'} src={img}  sx={{ml:{md:'-12rem',xs:'0'}}}/>
            </Box>
        </WrapperSection>
    </>
  )
}

export default ListImages