import React from 'react'
import WrapperSection from '../global/WrapperSection'
import GlobalList from '../global/GlobalList'
import { Grid, CardMedia, Box } from '@mui/material'
import img from './../../assets/about/view-3d-house-model.png'
import cov from './../../assets/about/Group 2909.png'
const Details = ({ data }) => {
    return (
        <>
            <WrapperSection>
                <GlobalList>
                    <Grid item md={6} xs={12} >
                        <Box position={'relative'} sx={{ height:'100%' }} >
                            <CardMedia component={'img'} src={img} sx={{ height:'100%' }} />
                            <CardMedia component={'img'} src={cov}  sx={{ position:'absolute' ,bottom:'10%' }} />
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12} >
                        <Box sx={{ width: { md: '85%' , xs:'100%'}, m:'auto'  }} >
                            <div className="desc" dangerouslySetInnerHTML={{ __html: data }}></div>
                        </Box>
                    </Grid>
                </GlobalList>
            </WrapperSection>
        </>
    )
}

export default Details