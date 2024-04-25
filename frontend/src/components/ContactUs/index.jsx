import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@emotion/react'
import img from './../../assets/fot.png'
import Form from './Form/Form'
import { useTranslation } from 'react-i18next'
const ContactUs = () => { 
    const themeM = useTheme();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm')); 
    const { t } = useTranslation()
    return (
        <>
            <Box position={'relative'} sx={{ backgroundImage: `url(${img})`, height: { md: '40rem' ,xs:'45rem'}, display: 'flex', alignItems: 'center', backgroundSize: 'cover',  position: 'relative', backgroundAttachment: 'fixed' }} >
                <div className="overlay">
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { md: 'flex-start' ,xs:'center'}, justifyContent: 'center', height: '100%', gap: 3, width:{md:'45%', xs:'100%'} }}  >
                        <Typography variant={isMobile ? 'body1' : 'h5'} color={'primary.text'} >{t("Explore.title")}</Typography>
                        <Typography variant={isMobile ? 'body1' : 'body1'} color={'primary.text'} textAlign={'center'} sx={{ display: isMobile && 'none' }} >{t("Explore.desc")}</Typography> 
                    </Box>
                    <Box sx={{ py:1 ,px: 2, borderRadius: '16px',my:2 ,mx: { md: 2, xs: 0 }, width: {md:'45%', xs:'100%'}, }}>
                        <Form />
                    </Box>
                </div>
            </Box>
        </>
    )
}

export default ContactUs