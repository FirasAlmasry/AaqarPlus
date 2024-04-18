import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Logo from './logo'
import Areas from './Areas'
import Compounds from './Compounds'
import Property from './Property'
// import img from './../../assets/foot.png'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const {t} = useTranslation()
    return (
        <>
            <footer>
                <Box position={'relative'} sx={{
                    background: 'rgba(235, 235, 235, 90%)', py: 3, display: 'flex', alignItems: 'center', position: 'relative'
                }} >
                    {/* <Box sx={{ position: 'relative', width: '100%', height: '100%', background: 'rgba(255,255,255, 80%)', py: 3 }} > */}
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
                    {/* </Box> */}
                </Box>
            </footer>
        </>
    )
}

export default Footer