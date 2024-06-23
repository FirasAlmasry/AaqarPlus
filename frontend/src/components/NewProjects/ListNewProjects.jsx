import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import HeaderSection from '../global/HeaderSection'
import GlobalList from '../global/GlobalList'
import { Box, CircularProgress, Grid } from '@mui/material'
import CardProperty from '../global/CardProperty'
import i18next from 'i18next'
import { useGetPropertiesQuery } from '../../state/properties'
import { useTranslation } from 'react-i18next'
import CostPagination from '../global/CostPagination'

const url = 'https://aqarbackend.revampbrands.com/storage/'

const ListNewProjects = () => {

    let lng = i18next.language
    const { t } = useTranslation()

    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading } = useGetPropertiesQuery({ lng, currentPage, coming_soon: 0 });
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
    //         const updatedList = tableData?.map(property =>
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
            <WrapperSection>
                <HeaderSection nameSection={t("Properties")} length={data?.data?.total} />
                <GlobalList>
                    {tableData?.map(res =>
                        <Grid item md={4} xs={12} key={res?.id}>
                            <CardProperty img={url + res?.master_plan}
                                name={res?.name}
                                address={res?.area_name}
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
                        </Grid>
                    )}
                </GlobalList>
                <CostPagination
                    setCurrentPage={setCurrentPage}
                    count={data?.data?.last_page}
                    currentPage={currentPage} />
            </WrapperSection>
        </>
    )
}

export default ListNewProjects