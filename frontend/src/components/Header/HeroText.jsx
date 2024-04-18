import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import './style.css'
// import theme from '../../util/theme'
// import Btn from '../global/Btn'
import { useTheme } from '@emotion/react'
const HeroText = ({ title, desc, btn }) => {
    const themeM = useTheme();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));
    return (
        <>
                <Box className={'textSlide'}  >
                <Typography variant={isMobile ? 'body1' : 'h4' } color={'primary.text'} >{title}</Typography>
                <Typography variant={isMobile ? 'h6' :'h6'} color={'primary.text'} textAlign={'center'} >{desc}</Typography>
                {/* <Btn bg={theme.palette.primary.main} color={theme.palette.primary.text} text={btn} path={'about-us'} /> */}
                </Box>
        </>
    )
}

export default HeroText