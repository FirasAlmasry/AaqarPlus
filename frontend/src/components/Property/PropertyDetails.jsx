import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import GlobalList from '../global/GlobalList'
import { Box, CardMedia, Grid, Typography, CircularProgress } from '@mui/material'
import icon from './../../assets/Ellipse 59.png'
import Slider from '../global/Slider'
import Details from '../global/Details'
import GalleryProperty from './GalleryProperty'
import PaymentPlans from './PaymentPlans'
import HeaderSection from '../global/HeaderSection'
import CardProperty from '../global/CardProperty'
import Form from '../ContactUs/Form/Form'
import i18next from 'i18next'
import { useParams } from 'react-router-dom'
import { useGetPropertiesIdQuery } from '../../state/properties'
import Description from '../global/Description'
import { useTranslation } from 'react-i18next'
import Btn from '../global/Btn'
import theme from '../../util/theme'
import MultiItemSlider from '../global/MultiItemSlider'
import Amenities from '../global/Amenities'
import IframeDisplay from '../global/IframeDisplay'

const url = 'https://aqarbackend.revampbrands.com/storage/'

const renderMedia = (link, type) => {
    if (type === 'IMAGE') {
        return (
            <CardMedia
                key={link}
                src={url + link}
                component="img"
                loading='lazy'
                alt="image"
                sx={{
                    height: '400px',
                    borderRadius: '18px',
                    backgroundSize: '100% 100%',
                    objectFit: 'fill',
                    width: { md: '100%', xs: '100%' }
                }}
            />
        );
    } else if (type === 'VIDEO') {
        return (
            <video controls style={{ height: '400px', borderRadius: '18px', width: '100%', position: 'relative', zIndex: 99 }} autoPlay >
                <source src={url + link} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        );
    }
};

const PropertyDetails = () => {

    let lng = i18next.language
    let { id } = useParams()
    const { data, isLoading } = useGetPropertiesIdQuery({ id, lng });

    const [tableData, setTableData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const { t } = useTranslation()
    useEffect(() => {
        if (data && !isLoading) {
            setTableData(data?.data)
        }
    }, [data, tableData, isLoading])

    const handleToggleShow = () => {
        setShowAll(prevShowAll => !prevShowAll);
    };
    // const [propertyList, setPropertyList] = useState([])
    // useEffect(() => {
    //     if (data && !isLoading) {
    //         const storedFavorites = localStorage.getItem('favoriteProperties')
    //         const favorites = storedFavorites ? JSON.parse(storedFavorites) : []
    //         const updatedList = tableData?.similar_properties?.map(property =>
    //             favorites.includes(property.id) ? { ...property, is_favorite: 1 } : { ...property, is_favorite: 0 }
    //         )
    //         setPropertyList(updatedList)
    //     }
    // }, [tableData ,data, isLoading])

    // const toggleFavorite = (id) => {
    //     setPropertyList(prevList => {
    //         const updatedList = prevList.map(property =>
    //             property.id === id ? { ...property, is_favorite: property.is_favorite === 0 ? 1 : 0 } : property
    //         )
    //         const favorites = updatedList.filter(property => property.is_favorite === 1).map(property => property.id)
    //         localStorage.setItem('favoriteProperties', JSON.stringify(favorites))
    //         return updatedList
    //     })
    // }
    const displayedAmenities = tableData?.amenities?.slice(0, 3);
    const allAmenities = tableData?.amenities?.slice(3);

    if (isLoading) return (<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
    </Box>);


    return (
        <>
            <WrapperSection>
                <GlobalList>
                    <Grid item md={6} xs={12}>
                        <Slider nav={false} >
                            {tableData?.files?.map(img => renderMedia(img?.file, img?.type))}
                        </Slider>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Details
                            title={tableData?.name}
                            refNumber={tableData.ref_number}
                            address={tableData?.area_name}
                            finishing={tableData.finishing_name}
                            startPrice={tableData?.start_price}
                            endPrice={tableData?.end_price}
                            whatsapp={tableData?.whatsapp}
                            phone_number={tableData?.phone_number}
                            num1={tableData?.bedrooms}
                            num2={tableData?.bathrooms}
                            num3={tableData?.house_area} >
                            <Amenities
                                displayedAmenities={displayedAmenities}
                                allAmenities={allAmenities}
                                showAll={showAll}
                                handleToggleShow={handleToggleShow}
                                url={url}
                                icon={icon}
                            />
                        </Details>
                    </Grid>
                </GlobalList>
            </WrapperSection>
            <WrapperSection position='static'>
                <GlobalList>
                    <Grid item md={8} xs={12} >
                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }} >
                            <GalleryProperty tableData={tableData} />
                            {tableData?.description && <>
                                <HeaderSection nameSection={`${lng === 'en' ? 'Details about' : 'تفاصيل عن'} ${tableData?.name}`} />
                                <Description data={tableData?.description} />
                            </>}
                        </Box>
                        <Box>
                            <PaymentPlans
                                DownPayment={tableData?.down_payment}
                                InstallmentYears={tableData?.installment_years}
                                MonthlyInstallment={tableData?.monthly_installment}
                            />
                        </Box>
                        {tableData?.url_location && <IframeDisplay iframeText={tableData?.url_location} name={tableData?.name} />}
                        {
                            tableData.delivery_in &&
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: 1, flexDirection: { md: 'row', xs: 'column' } }} >
                                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }} >
                                    <HeaderSection nameSection={lng === 'en' ? 'Delivery In' : "الأستلام"} />
                                    <Typography textAlign={'left'} >{tableData.delivery_in}</Typography>
                                </Box>
                            </Box>
                        }
                    </Grid>
                    <Grid item md={4} xs={12} >
                        <Box sx={{ mx: { md: 3, xs: 0 } }} >
                            <Form>
                                <Typography color={'primary.main'} variant='h6' >{lng === 'en' ? 'Need Expert Advice?' : 'هل تحتاج إلى مشورة الخبراء؟'}</Typography>
                                <Typography color={'secondary.supMain'} my={2}>{lng === 'en' ? `Fill out the form and one of our property
                                    consultants will contact you.`: `املأ النموذج وسيقوم أحد مستشارينا العقاريين بالاتصال بك.`}</Typography>
                            </Form>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: 1, mt: 4 }}>
                                <Typography color={'#fff'} bgcolor={'#062371'} sx={{ px: 2, py: 1, borderRadius: '8px', textAlign: 'center' }} >{tableData.ref_number}</Typography>
                                {
                                    tableData?.agent_code &&
                                    <Btn text={tableData.agent_code || '000'} bg={'transparent'} color={'#062371'} borderColor={theme.palette.primary.main} />
                                }
                            </Box>
                        </Box>
                    </Grid>
                </GlobalList>
                <Box sx={{ width: '100%' }}>
                    <HeaderSection nameSection={t("SuggestedProperties")} />
                    {
                        tableData?.similar_properties && <MultiItemSlider>
                            {tableData?.similar_properties?.slice(0, 5)?.map(res =>
                                <Box key={res?.id} sx={{ my: 2 }}>
                                    <CardProperty img={url + res?.master_plan}
                                        name={lng === 'en' ? res?.name?.en : res?.name.ar}
                                        address={lng === 'en' ? res?.address?.en : res?.address.ar}
                                        num1={res?.bedrooms}
                                        num2={res?.bathrooms}
                                        num3={res?.house_area}
                                        month={res?.monthly_installment}
                                        years={res?.installment_years}
                                        price={res?.end_price}
                                        whatsapp={res?.whatsapp}
                                        phone_number={res?.phone_number}
                                        id={res?.id}
                                        agent_id={res?.agent_code}
                                        // is_favorite={res?.is_favorite}
                                        // toggleFavorite={toggleFavorite}
                                    />
                                </Box>
                            )}
                        </MultiItemSlider>
                    }
                </Box>
            </WrapperSection>
        </>
    )
}

export default PropertyDetails