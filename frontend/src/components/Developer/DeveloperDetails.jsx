import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import GlobalList from '../global/GlobalList'
import { Box, CardMedia, CircularProgress, Grid, Typography } from '@mui/material'
import Slider from '../global/Slider'
import SectionTerm from '../Terms/SectionTerm'
import HeaderSection from '../global/HeaderSection'
import CardCompound from '../global/CardCompound'
import i18next from 'i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetDevelopersIdQuery } from '../../state/developers'
import MultiItemSlider from '../global/MultiItemSlider'
import { useTranslation } from 'react-i18next'
import CardProperty from '../global/CardProperty'

const DeveloperDetails = () => {
    const url = 'https://aqarbackend.revampbrands.com/storage/'
    let lng = i18next.language
    let { id } = useParams()
    const { data, isLoading } = useGetDevelopersIdQuery({ id, lng });
    const navigate = useNavigate()
    const { t } = useTranslation()
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        setIsTableDataLoading(true);

        if (data && !isLoading) {
            setTableData(data?.data)
            setIsTableDataLoading(false);
        }
    }, [data, isLoading])

    const [isTableDataLoading, setIsTableDataLoading] = useState(true);
    
    return (
        <>{isTableDataLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        ) : (
            <WrapperSection>
                <GlobalList>
                    <Grid item md={6} xs={12} >
                        <Slider>
                            {
                                tableData?.files?.map((image) =>
                                    <CardMedia src={url + image?.file} component="img"
                                        height="auto"
                                        alt="green iguana"
                                        loading='lazy'
                                        sx={{
                                            height: '300px',
                                            borderRadius: '18px',
                                            objectFit: 'fill',
                                            width: { md: '100%', xs: '100%' }
                                        }} />
                                )}
                        </Slider>
                    </Grid>
                    <Grid item md={6} xs={12} sx={{ margin:'auto' }} >
                        <Box sx={{ display:'flex', flexWrap:'wrap', gap:2 }}>
                                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexGrow: 1, width:'45%'  }}>
                                    <Typography color={'#000'} variant='h6'>{t("Dev.name")} : </Typography>
                                    <Typography color={'secondary.supMain'}>{tableData?.name}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexGrow: 1, width:'35%' }}>
                                    <Typography color={'#000'} variant='h6'>{t("Dev.Brief")} : </Typography>
                                    <Typography color={'secondary.supMain'}>{tableData?.bio_title}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexGrow: 1, width:'45%'  }}>
                                    <Typography color={'#000'} variant='h6'>{t("Dev.area")} : </Typography>
                                    <Typography 
                                        sx={{ cursor: 'pointer' }}
                                    color={'secondary.supMain'} 
                                    onClick={() => navigate(`/property-in-area/${tableData?.area?.id}`)}>
                                        {lng === 'ar' ? tableData?.area?.name?.ar : tableData?.area?.name?.en}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexGrow: 1, width:'45%'  }}>
                                    <Typography color={'#000'} variant='h6'>{t("Dev.TopProjectsTitle")} : </Typography>
                                    <Typography color={'secondary.supMain'}>{tableData?.top_project_title}</Typography>
                                </Box>
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
                    tableData?.properties && Object.values(tableData?.properties).length > 0 && (
                        <>
                            <HeaderSection
                                nameSection={t('related')}
                                length={Object.values(tableData?.properties).length === 0 ? t('NoResults') : Object.values(tableData.properties).length}
                            />
                            <Box sx={{ width: '100%' }}>
                                <MultiItemSlider>
                                    {Object.values(tableData?.properties).map((res, index) => (
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
                                                // is_favorite={res?.is_favorite}
                                                // toggleFavorite={toggleFavorite}
                                            />
                                        </Box>
                                    ))}
                                </MultiItemSlider>
                            </Box>
                        </>
                    )
                }

            </WrapperSection>
        )}
        </>
    )

}

export default DeveloperDetails