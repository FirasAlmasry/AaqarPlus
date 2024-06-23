import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import GlobalList from '../global/GlobalList'
import { Grid, CardMedia, Box, CircularProgress } from '@mui/material'
import Slider from '../global/Slider'
import Details from '../global/Details'
import icon from './../../assets/Ellipse 59.png'
import HeaderSection from '../global/HeaderSection'
import CardProperty from '../global/CardProperty'
import i18next from 'i18next'
import { useParams } from 'react-router-dom'
import { useGetCompoundsIdQuery } from '../../state/compounds'
import Description from '../global/Description'
import PaymentPlans from './PaymentPlans'
import { useTranslation } from 'react-i18next'
import MultiItemSlider from '../global/MultiItemSlider'
import Amenities from '../global/Amenities'
import IframeDisplay from '../global/IframeDisplay'

const url = 'https://aqarbackend.revampbrands.com/storage/'

const CompoundDetails = () => {

    let lng = i18next.language
    let { id } = useParams()
    const { data, isLoading } = useGetCompoundsIdQuery({ id, lng });
    const { t } = useTranslation()
    const [tableData, setTableData] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (data && !isLoading) {
            setTableData(data?.data)
        }
    }, [data, isLoading])

    const handleToggleShow = () => {
        setShowAll(prevShowAll => !prevShowAll);
    };

    const displayedAmenities = tableData?.attacheds?.slice(0, 3);
    const allAmenities = tableData?.attacheds?.slice(3);
    // const [propertyList, setPropertyList] = useState([])

    // useEffect(() => {
    //     if (tableData?.properties?.length > 0) {
    //         const storedFavorites = localStorage.getItem('favoriteProperties')
    //         const favorites = storedFavorites ? JSON.parse(storedFavorites) : []
    //         const updatedList = tableData?.properties?.map(property =>
    //             favorites.includes(property.id) ? { ...property, is_favorite: 1 } : { ...property, is_favorite: 0 }
    //         )
    //         setPropertyList(updatedList)
    //     }
    // }, [data, tableData, isLoading])

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

    if (isLoading) return (<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
    </Box>);


    return (

        <WrapperSection>
            <GlobalList>
                <Grid item md={6} xs={12} >
                    <Slider>
                        {tableData?.files?.map(img =>
                            <CardMedia key={img?.id} src={url + img?.file} component="img"
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
                <Grid item md={6} xs={12}>
                    <Details
                        title={tableData?.name}
                        devName={tableData?.developer_name}
                        address={tableData?.address}
                        startPrice={tableData?.start_price}
                        endPrice={tableData?.end_price}
                        whatsapp={tableData?.whatsapp}
                        phone_number={tableData?.phone_number} >
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
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }} >
                <HeaderSection nameSection={tableData?.name} />
                <Description data={tableData?.description} />
            </Box>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
                <HeaderSection nameSection={t("PaymentPlans")} />
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", width: 'fit-content', py: 2, px: 4, flexWrap: 'wrap' }} >
                    <PaymentPlans data={tableData?.payment_plans} />
                </Box>
            </Box>
            {tableData?.url_location && <IframeDisplay iframeText={tableData?.url_location} name={tableData?.name} />}
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
                <HeaderSection nameSection={`${t("ExplorePropertiesIn")} ${tableData?.name}`} length={tableData?.properties?.length === 0 ? t("NoResults") : tableData?.properties?.length} />
                <Box sx={{ width: '100%' }}>
                    {
                        tableData?.properties &&
                        <MultiItemSlider>
                            {tableData?.properties?.map(res =>
                                <Box key={res?.id} sx={{ my: 2 }}>
                                    <CardProperty img={url + res?.master_plan}
                                        name={lng === 'ar' ? res?.name?.ar : res?.name?.en}
                                        address={lng === 'ar' ? res?.address?.ar : res?.address?.en}
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
            </Box>
        </WrapperSection>
    )
}

export default CompoundDetails