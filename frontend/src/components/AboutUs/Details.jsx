import React from 'react'
import WrapperSection from '../global/WrapperSection'
import GlobalList from '../global/GlobalList'
import { Grid, CardMedia, Box } from '@mui/material'
import img from './../../assets/about/acton-crawford-OpHwu2s4wmg-unsplash.jpg'
import img1 from './../../assets/about/frames-for-your-heart-mR1CIDduGLc-unsplash.jpg'
import img2 from './../../assets/about/r-architecture-2gDwlIim3Uw-unsplash.jpg'
// import cov from './../../assets/about/Group 2909.png'
import SectionTerm from '../Terms/SectionTerm'
import { t } from 'i18next'
import Slider from '../global/Slider'
const Details = ({ data }) => {
    return (
        <>
            <WrapperSection>
                <GlobalList>
                    <Grid item md={6} xs={12} >
                        <Box position={'relative'} sx={{ height: '100%' }} >
                            <Slider>
                                <CardMedia component={'img'} src={img} sx={{ height: '100%' , borderRadius:'0 16px'}} />
                                <CardMedia component={'img'} src={img1} sx={{ height: '100%', borderRadius:'0 16px' }} />
                                <CardMedia component={'img'} src={img2} sx={{ height: '100%', borderRadius:'0 16px' }} />
                            </Slider>
                            {/* <CardMedia component={'img'} src={cov} sx={{ position: 'absolute', bottom: '10%' }} /> */}
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12} >
                        <Box sx={{ width: { md: '85%', xs: '100%' }, m: 'auto' }} >
                            <div className="desc" dangerouslySetInnerHTML={{ __html: data }}></div>
                        </Box>
                    </Grid>
                </GlobalList>
                <SectionTerm name={t("Terms.Mission")} description={t("Terms.MissionDesc")} />
                <SectionTerm name={t("Terms.Vision")} description={t("Terms.VisionDesc")} />
                <SectionTerm name={t("Terms.Values")} description={t("Terms.ValuesDesc")} />
            </WrapperSection>
        </>
    )
}

export default Details