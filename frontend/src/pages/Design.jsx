import React, { useEffect, useState } from 'react'
import Header from '../components/global/Header'
// import Details from '../components/AboutUs/Details'
// import ListImages from '../components/Design/ListImages'
// import DescContact from '../components/Design/DescContact'
import { useGetInfoTextQuery } from '../state/info'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
// import SectionTerm from '../components/Terms/SectionTerm'
import WrapperSection from '../components/global/WrapperSection'
import GlobalList from '../components/global/GlobalList'
import { Box, CardMedia, Grid, Typography } from '@mui/material'
import img from './../assets/Design/roberto-nickson-tleCJiDOri0-unsplash.jpg'
import img1 from './../assets/Design/spacejoy-9M66C_w_ToM-unsplash.jpg'
import img2 from './../assets/Design/spacejoy-IH7wPsjwomc-unsplash.jpg'
import Slider from '../components/global/Slider'
import HeaderSection from '../components/global/HeaderSection'
import Btn from '../components/global/Btn'

const Design = () => {
const {t} = useTranslation()
    let lng = i18next.language

    const { data, isBrandsLoading } = useGetInfoTextQuery(lng);

    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data)
        }
    }, [data, tableData, isBrandsLoading])

    return (
        <>
            <Header title={t("Design")} />
            <WrapperSection>
                <GlobalList>
                    <Grid item md={6} xs={12} >
                        <Box position={'relative'} sx={{ height: '100%' }} >
                            <Slider>
                                <CardMedia alt="green iguana" component={'img'} src={img} sx={{ height: '350px', borderRadius: '0 16px' }} />
                                <CardMedia alt="green iguana" component={'img'} src={img1} sx={{ height: '350px', borderRadius: '0 16px' }} />
                                <CardMedia alt="green iguana" component={'img'} src={img2} sx={{ height: '350px', borderRadius: '0 16px' }} />
                            </Slider>
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12} >
                        <Box sx={{ width: { md: '85%', xs: '100%' }, m: 'auto' }} >
                            <HeaderSection nameSection={ t("design.title") }/>
                            <Typography>{t("design.desc")}</Typography>
                        </Box>
                    </Grid>
                </GlobalList>
                <Box sx={{ mt:2 }}>
                    <Btn  text={t("design.btn")} path={'/contact-us'} />
                </Box>
            </WrapperSection>
        </>
    )
}

export default Design