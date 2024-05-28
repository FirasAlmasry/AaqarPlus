import React from 'react'
import { Grid, Box, CardMedia } from '@mui/material'
import HeaderSection from '../global/HeaderSection'

const WrapperAuth = ({ img, name, children }) => {
    return (
        <>
            <Grid container sx={{ height: { md: '100vh' ,xs:'auto'} }} >
                <Grid item md={6} xs={12}>
                    <Box sx={{ position: 'relative', height: '100%' }}>
                        <CardMedia component={'img'} src={img} sx={{ width:'100%', height:'100%' }} />
                        <div className="overlay"></div>
                    </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Box sx={{ background:'#F4F3F1',  height:'100%', p:3 }} >
                        <HeaderSection nameSection={name} />
                        {children}
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default WrapperAuth