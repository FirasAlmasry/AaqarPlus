import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, CircularProgress, Grid } from '@mui/material'
import Header from '../components/global/Header'
import WrapperSection from '../components/global/WrapperSection'
import HeaderSection from '../components/global/HeaderSection'
import GlobalList from '../components/global/GlobalList'
import CardProperty from '../components/global/CardProperty'
import { useGetPropertyTypeIdQuery } from '../state/PropertyType'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import EmptyContent from '../components/global/EmptyContent'
import Filter from '../components/PropeType/Filter'
import CostPagination from '../components/global/CostPagination'


const PropeType = () => {

    let { id } = useParams()
    const { t } = useTranslation()
    let lng = i18next.language

    const [currentPage, setCurrentPage] = useState(1);
    const [saleTypeFilter, setSaleTypeFilter] = useState('');
    const { data, isLoading } = useGetPropertyTypeIdQuery({ id, lng, currentPage });
    const [tableData, setTableData] = useState([]);


    useEffect(() => {
        if (data && !isLoading) {
            setTableData(data?.data)
        }
    }, [data, isLoading])


    const filteredProperties = tableData?.properties?.data?.filter(res => saleTypeFilter === '' || res?.sale_type === saleTypeFilter);
    
    if (isLoading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
        </Box>)

    return (
        <>
            <Header title={lng === 'en' ? tableData?.property_type?.name?.en : tableData?.property_type?.name?.ar} />
            <WrapperSection>
                <Filter
                    saleTypeFilter={saleTypeFilter}
                    setSaleTypeFilter={setSaleTypeFilter}
                />
                {tableData && filteredProperties?.length > 0 ? (
                    <>
                        <HeaderSection nameSection={`${t("AvailableProp")} ${lng === 'en' ? tableData?.property_type?.name?.en : tableData?.property_type?.name?.ar}`} length={filteredProperties?.length} />
                        <GlobalList>
                            {filteredProperties?.map(res =>
                                <Grid item md={4} xs={12} key={res?.id}>
                                    <CardProperty img={res?.master_plan}
                                        name={lng === 'en' ? res?.name.en : res?.name.ar}
                                        address={lng === 'en' ? res?.address.en : res?.address.ar}
                                        num1={res?.bedrooms}
                                        num2={res?.bathrooms}
                                        num3={res?.house_area}
                                        month={res?.monthly_installment}
                                        years={res?.installment_years}
                                        price={res?.end_price}
                                        whatsapp={res?.whatsapp}
                                        phone_number={res?.phone_number}
                                        id={res?.slug?.en}
                                        agent_id={res?.agent_code}
                                        // is_favorite={res?.is_favorite}
                                        // toggleFavorite={toggleFavorite}
                                    />
                                </Grid>
                            )}
                        </GlobalList>
                        <CostPagination
                            setCurrentPage={setCurrentPage}
                            count={data?.data?.properties?.last_page}
                            currentPage={currentPage} />
                    </>
                ) : (
                    <EmptyContent title={t("EmptyContent")} />
                )}
            </WrapperSection>
        </>
    )
}

export default PropeType