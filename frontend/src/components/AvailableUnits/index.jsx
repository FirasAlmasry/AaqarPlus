import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import HeaderSection from '../global/HeaderSection'
import CardProperty from '../global/CardProperty'
import i18next from 'i18next'
import { useGetPropertiesQuery } from '../../state/properties'
import MultiItemSlider from '../global/MultiItemSlider'
import { Box, Button, CircularProgress } from '@mui/material'
import { useTranslation } from 'react-i18next'
import theme from '../../util/theme'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'
const AvailableUnits = () => {
    const navigate = useNavigate()

    const url = 'https://aqarbackend.revampbrands.com/storage/'
    let lng = i18next.language

    const { data, isLoading } = useGetPropertiesQuery({ lng, coming_soon: 0 });
    // console.log("🚀 ~ AvailableUnits ~ data:", data)

    // const [isTableDataLoading, setIsTableDataLoading] = useState(true);
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isLoading) {
            setTableData(data?.data?.data)
        }
    }, [data, isLoading])
    // const [propertyList, setPropertyList] = useState([])

    // useEffect(() => {
    //     if (data && !isLoading) {
    //         const storedFavorites = localStorage.getItem('favoriteProperties')
    //         const favorites = storedFavorites ? JSON.parse(storedFavorites) : []
    //         const updatedList = tableData.map(property =>
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
    const { t } = useTranslation()

    if (isLoading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
        </Box>)

    return (
        <>
            <WrapperSection>
                <Box sx={{ width: '100%' }}>
                    <HeaderSection nameSection={t("AvailableUnits")} length={tableData?.length === 0 ? t("NoResults") : tableData?.length } />
                        <MultiItemSlider>
                        {tableData?.map(res =>
                            <Box key={res?.id} sx={{ my: 2 }}>
                                <CardProperty img={url + res?.master_plan}
                                    name={res?.name}
                                    address={res?.address}
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
                    <Box sx={{ width: '100%', textAlign: 'center' }} >
                        <Button
                            endIcon={lng === 'en' ? <ArrowForwardIcon /> : <ArrowBackIcon />}
                            onClick={() => navigate('properties')}
                            sx={{
                                background: theme.palette.primary.text,
                                color: theme.palette.secondary.main, fontWeight: '600', textTransform: 'capitalize', padding: '5px 16px', border: `0.8px solid ${theme.palette.secondary.main}`, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.20)", ':hover': { background: theme.palette.primary.main, color: theme.palette.primary.text, border: `0.8px solid ${theme.palette.primary.main}` }, width: '175px', gap: 1
                            }} >
                            {t("Explore.btn")}
                        </Button>
                    </Box>
                </Box>
            </WrapperSection>
        </>
    )
}

export default AvailableUnits