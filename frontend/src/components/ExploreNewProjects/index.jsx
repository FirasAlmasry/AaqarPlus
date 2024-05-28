import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import theme from '../../util/theme'
import Btn from '../global/Btn'
import { useTheme } from '@emotion/react'
import img from './../../assets/type-luxurious-summer-villa-hotel-amara-dolce-vita-luxury-hotel-beautiful-architecture-tekirova-kemer-turkey.png'
import './style.css'
import { useTranslation } from 'react-i18next'
const ExploreNewProjects = () => {
    const themeM = useTheme();
    const { t } = useTranslation()
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));

    return (
        <>
            <Box position={'relative'} sx={{ backgroundImage: `url(${img})`, height: { md: '25rem' ,xs:'15rem'}, display: 'flex', alignItems: 'center', backgroundSize: '100% 100%', mb: 2, position: 'relative', backgroundAttachment: { md: 'fixed' ,xs:'local'} }} >
                <div className="overlayNewProject">
                    <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%', gap:3, mx:2 }}  >
                        <Typography variant={isMobile ? 'body1' : 'h5'} color={'primary.text'} >{t("Explore.title")}</Typography>
                        <Typography variant={isMobile ? 'body1' : 'body1'} color={'primary.text'} textAlign={'center'}  >{t("Explore.desc")}</Typography>
                        <Btn bg={theme.palette.secondary.main} color={theme.palette.primary.text} text={t("Explore.btn")} path={'developers'} />
                    </Box>
                </div>
            </Box>
        </>
    )
}

export default ExploreNewProjects