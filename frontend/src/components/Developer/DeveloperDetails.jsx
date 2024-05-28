import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import GlobalList from '../global/GlobalList'
import { Box, CardMedia, Grid, Typography } from '@mui/material'
import Slider from '../global/Slider'
import SectionTerm from '../Terms/SectionTerm'
import HeaderSection from '../global/HeaderSection'
import CardCompound from '../global/CardCompound'
import i18next from 'i18next'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useGetDevelopersIdQuery } from '../../state/developers'
import MultiItemSlider from '../global/MultiItemSlider'
import { useTranslation } from 'react-i18next'
import CardProperty from '../global/CardProperty'

const DeveloperDetails = () => {
    const url = 'https://aqarbackend.revampbrands.com/storage/'
    let lng = i18next.language
    let { id } = useParams()
    const { data, isBrandsLoading } = useGetDevelopersIdQuery({ id, lng });
    const navigate = useNavigate()
    const { t } = useTranslation()
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data)
        }
    }, [data, isBrandsLoading])
    // localStorage.setItem('areaUnits', JSON.stringify(tableData))
    // const handleLinkClick = () => {
    //     const queryParams = {};

    //     if (tableData?.properties) {
    //         queryParams.properties = tableData?.properties;
    //     }

    //     const queryString = new URLSearchParams(queryParams).toString();
    //     const searchUrl = `/property-in-area?${queryString}`;

    //     // تمرير الكويريز فقط إذا كانت لها قيمة
    //     return searchUrl;
    // };
    return (
        <>
            <WrapperSection>
                <GlobalList>
                    <Grid item md={6} xs={12} >
                        <Slider >
                            {
                                tableData?.files?.map((image) =>
                                    <CardMedia src={url + image?.file} component="img"
                                        height="auto"
                                        alt="green iguana"
                                        sx={{
                                            height: '300px',
                                            borderRadius: '18px',
                                            objectFit: 'fill',
                                            width: { md: '100%', xs: '100%' }
                                        }} />
                                )}
                        </Slider>
                    </Grid>
                    <Grid item md={6} xs={12} >
                        <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
                            <Typography color={'primary.main'} display={'inline'} variant='h6'>{t("Dev.name")} : <span style={{ color: '#E00201' }}>{tableData?.name}</span></Typography>
                            <Typography color={'primary.main'} variant='h6'  >{t("Dev.Brief")} </Typography>
                            <Typography style={{ color: '#7A7A7A' }}>{tableData?.bio_title}</Typography>
                            <Typography color={'primary.main'} display={'inline'} variant='h6'>{t("Dev.area")} :
                                {/* <Link to={`/property-in-area`}>
                                    <span style={{ color: '#E00201' }}>{lng === 'ar' ? tableData?.area?.name?.ar : tableData?.area?.name?.en}</span>
                                </Link> */}
                                <span onClick={() => navigate(`/property-in-area/${tableData?.area?.id}`)} style={{ color: '#E00201', cursor: 'pointer'  }}>{lng === 'ar' ? tableData?.area?.name?.ar : tableData?.area?.name?.en}</span>
                                {/* <Link to={`/property-in-area?tableData=${encodeURIComponent(JSON.stringify(tableData))}`}>
                                    <span style={{ color: '#E00201' }}>{lng === 'ar' ? tableData?.area?.name?.ar : tableData?.area?.name?.en}</span>
                                </Link> */}
                            </Typography>
                            <Typography color={'primary.main'} display={'inline'} variant='h6'>{t("Dev.TopProjectsTitle")} : <span style={{ color: '#E00201' }}>{tableData?.top_project_title}</span></Typography>
                        </Box>
                    </Grid>
                </GlobalList>
                <SectionTerm name={t("Dev.DescDev")} description={tableData?.bio_description} />
                <SectionTerm name={t("Dev.DescProjects")} description={tableData?.top_project_description} />
                {tableData?.location &&
                    <SectionTerm name={t("Contacts.Location")} description={tableData?.location} />
                }
                <HeaderSection nameSection={t('Dev.Projects')} length={tableData?.compounds?.length === 0 ? t('NoResults') : tableData?.compounds?.length} />
                <Box sx={{ width: '100%' }}>
                    {
                        tableData?.compounds &&
                        <MultiItemSlider>
                            {tableData?.compounds?.map(res =>
                                <Box key={res?.id} sx={{ my: 2 }}>
                                    <CardCompound
                                        img={url + res?.image_location}
                                        name={lng === 'ar' ? res?.name?.ar : res?.name?.en}
                                        address={lng === 'ar' ? res?.address?.ar : res?.address?.en}
                                        price={res?.end_price}
                                        whatsapp={res?.whatsapp}
                                        phone_number={res?.phone_number}
                                        id={res?.id}
                                    />
                                </Box>
                            )}
                        </MultiItemSlider>
                    }
                </Box>
                {
                    tableData?.properties && Object.values(tableData.properties).length > 0 && (
                        <>
                            <HeaderSection
                                nameSection={t('related')}
                                length={Object.values(tableData.properties).length === 0 ? t('NoResults') : Object.values(tableData.properties).length}
                            />
                            <Box sx={{ width: '100%' }}>
                                <MultiItemSlider>
                                    {Object.values(tableData.properties).map((res, index) => (
                                        <Box key={index} sx={{ my: 2 }}>
                                            <CardProperty
                                                img={url + res.master_plan}
                                                name={lng === 'en' ? res.name.en : res.name.ar}
                                                address={lng === 'en' ? res.address.en : res.address.ar}
                                                num1={res.bedrooms}
                                                num2={res.bathrooms}
                                                num3={res.house_area}
                                                month={res.monthly_installment}
                                                years={res.installment_years}
                                                price={res.end_price}
                                                whatsapp={res.whatsapp}
                                                phone_number={res.phone_number}
                                                id={res.id}
                                                agent_id={res.agent_code}
                                            />
                                        </Box>
                                    ))}
                                </MultiItemSlider>
                            </Box>
                        </>
                    )
                }

            </WrapperSection>
        </>
    )

}

export default DeveloperDetails