import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Logo from './logo'
import Areas from './Areas'
import Compounds from './Compounds'
import Property from './Property'
import img from './../../assets/foot.png'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const {t} = useTranslation()
    return (
        <>
            <footer>
                <Box position={'relative'} sx={{
                    backgroundImage: `url(${img})`, minHeight: { md: '20rem', xs: '950px' }, display: 'flex', alignItems: 'center', backgroundSize: '100% 100%', position: 'relative'
                }} >
                    <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(255,255,255, 80%)', py: 3 }} >
                        <Container maxWidth={'lg'} >
                            <Grid container spacing={1} >
                                <Grid item md={3} xs={12}>
                                    <Logo />
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <Areas />
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <Compounds />
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <Property />
                                </Grid>
                            </Grid>
                            <Typography color={'secondary.supMain'} textAlign={'center'} p={2} >
                                {t("copeRight")}
                            </Typography>
                        </Container>
                    </Box>
                </Box>
            </footer>
        </>
    )
}

export default Footer