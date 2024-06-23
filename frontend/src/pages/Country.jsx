import { Box, CircularProgress, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import WrapperSection from '../components/global/WrapperSection'
import HeaderSection from '../components/global/HeaderSection'
import GlobalList from '../components/global/GlobalList'
import CardProperty from '../components/global/CardProperty'
import { useGetCountryIdQuery } from '../state/Country'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import Header from '../components/global/Header'
import EmptyContent from '../components/global/EmptyContent'
import CostPagination from '../components/global/CostPagination'


const Country = () => {

    let { id } = useParams()
    let lng = i18next.language

    
    const { t } = useTranslation()
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading } = useGetCountryIdQuery({ id, lng, currentPage });
    console.log("🚀 ~ Country ~ data:", data)
    const [tableData, setTableData] = useState([]);
    console.log("🚀 ~ Country ~ tableData:", tableData)

    useEffect(() => {
        if (data && !isLoading) {
            setTableData(data?.data)
        }
    }, [data, isLoading])

    // const [propertyList, setPropertyList] = useState([])

    // useEffect(() => {
    //     if (data && !isLoading) {
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

    if (isLoading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
        </Box>)

    return (
        <>
            <Header title={tableData?.name} />
            <WrapperSection>
                {tableData && tableData?.properties && tableData?.properties?.length ? (
                    <>
                        <HeaderSection nameSection={`${t("AvailableUnits")} ${tableData?.name}`} length={data?.data?.pagination?.total} />
                        <GlobalList>
                            {tableData?.properties?.map(res =>
                                <Grid item md={4} xs={12} key={res.id}>
                                    <CardProperty img={res.master_plan}
                                        name={res.name}
                                        address={res.address}
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
                                </Grid>
                            )}
                        </GlobalList>
                        <CostPagination
                            setCurrentPage={setCurrentPage}
                            count={data?.data?.pagination?.last_page}
                            currentPage={currentPage} />
                    </>
                ) : (
                    <EmptyContent title={t("EmptyContent")} />
                )}
            </WrapperSection>
        </>
    )
}

export default Country