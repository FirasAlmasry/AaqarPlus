import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import GlobalList from '../global/GlobalList'
import { Box, CardMedia, Grid, Typography, useMediaQuery } from '@mui/material'
import Form from '../ContactUs/Form/Form'
import { useTheme } from '@emotion/react'
import user from './../../assets/contact/user.png'
import location from './../../assets/contact/location.png'
import i18next from 'i18next'
import { useGetInfoTextQuery } from '../../state/info'
import { useGetContactUsQuery } from '../../state/contactUs'
import { useTranslation } from 'react-i18next'
const ContactUsPage = () => {
    const themeM = useTheme();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));
    let lng = i18next.language

    const { data, isBrandsLoading } = useGetInfoTextQuery(lng);
    const { data :contact, isContactLoading } = useGetContactUsQuery();

    const [tableData, setTableData] = useState([]);
    const [contactData, setContactData] = useState([]);

    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data)
        }
        if (contact && !isContactLoading) {
            setContactData(contact?.data)
        }
    }, [contact, contactData, isContactLoading, isBrandsLoading, data])
    const { t } = useTranslation()
    return (
        <>
            <WrapperSection>
                <GlobalList>
                    <Grid item md={6} sm={6} xs={12} sx={{ my: { md: 0, xs: 1 } }} >
                        <Box sx={{ p: 2, background: '#F0EEEB', borderRadius: '16px', mx: { md: 2, xs: 0 }, height: '100%', }} >
                            <GlobalList>
                                <Grid item xs={12} >
                                    <Box sx={{ ml:4 }} >
                                        <Typography color={'primary.main'} variant={isMobile ? 'h6' : 'h6'} sx={{ my: 1.2 }} >{t("Contacts.Need")}</Typography>
                                        <Typography color={'secondary.supMain'} sx={{ my: 1.2 }} ><div dangerouslySetInnerHTML={{ __html: tableData?.description_contact }}></div></Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} >
                                    <Box sx={{ display: 'flex', flexDirection:{md:'row', xs:'column'}, gap: { md: 4 ,xs:1}, ml: { md: 4,xs:0 }}} >
                                        <CardMedia src={user} component={'img'} sx={{ width: {md:'7%',xs:'20%'}, m:{md:0,xs:'auto'}, objectFit:'contain' }} />
                                        <Box>
                                            <Typography color={'primary.main'} variant={isMobile ? 'h6' : 'h6'} sx={{ my: 1.2 }} >{t("Contacts.Email")}</Typography>
                                            <Typography color={'secondary.supMain'} sx={{ my: 1.2 }} >{contactData?.email}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} >
                                    <Box sx={{ display: 'flex', flexDirection:{md:'row', xs:'column'}, gap: { md: 4, xs: 1 }, ml: { md: 4, xs: 0 } }} >
                                        <CardMedia src={location} component={'img'} sx={{ width: {md:'7%',xs:'20%'}, m:{md:0,xs:'auto'}, objectFit:'contain' }} />
                                        <Box>
                                            <Typography color={'primary.main'} variant={isMobile ? 'h6' : 'h6'} sx={{ my: 1.2 }} >{t("Contacts.Location")}</Typography>
                                            <Typography color={'secondary.supMain'} sx={{ my: 1.2 }} ><div dangerouslySetInnerHTML={{ __html: tableData?.address }}></div></Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} >
                                    <Box sx={{ ml:4 }} >
                                        <Typography color={'primary.main'} variant={isMobile ? 'h6' : 'h6'} sx={{ my: 1.2 }} >{t("Contacts.Working")}</Typography>
                                        <Typography color={'secondary.supMain'} sx={{ my: 1.2 }} >{contactData?.working_hours}</Typography>
                                    </Box>
                                </Grid>
                            </GlobalList>
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12} sx={{ my: { md: 0, xs: 1 } }} >
                        <Box sx={{ p: 2, background: '#F0EEEB', borderRadius: '16px', mx: { md: 2, xs: 0 }, height: '100%', }}>
                            <Form />
                        </Box>
                    </Grid>
                </GlobalList>
            </WrapperSection>
        </>
    )
}

export default ContactUsPage