import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Logo from './logo'
// import Areas from './Areas'
// import Compounds from './Compounds'
// import Property from './Property'
// import img from './../../assets/foot.png'
import { useTranslation } from 'react-i18next'
import ListSocial from './logo/ListSocial'
import Route from './Route'

const Footer = () => {
    const {t} = useTranslation()
    return (
        <>
            <footer>
                <Box position={'relative'} sx={{
                    background: 'rgba(235, 235, 235, 90%)', py: 1, display: 'flex', alignItems: 'center', position: 'relative'
                }} >
                        <Container maxWidth={'lg'} >
                            <Grid container spacing={1} sx={{ alignItems:'center' }} >
                                <Grid item md={3} xs={12}>
                                    <Logo />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    {/* <Areas /> */}
                                <Route />
                                </Grid>
                                {/* <Grid item md={4} xs={12}>
                                    <Compounds />
                                </Grid> */}
                                <Grid item md={3} xs={12}>
                                    {/* <Property /> */}
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }} >
                                    <ListSocial />
                                </Box>
                                </Grid>
                            </Grid>
                            {/* <Typography color={'secondary.supMain'} textAlign={'center'} p={2} >
                                {t("copeRight")}
                            </Typography> */}
                        </Container>
                    {/* </Box> */}
                </Box>
            </footer>
        </>
    )
}

export default Footer