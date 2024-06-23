import React, { useEffect, useState } from 'react'
import Header from '../components/global/Header'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import { Box, CircularProgress, Grid } from '@mui/material'
import CardProperty from '../components/global/CardProperty'
import WrapperSection from '../components/global/WrapperSection'
import GlobalList from '../components/global/GlobalList'
import { useParams } from 'react-router-dom'
import HeaderSection from '../components/global/HeaderSection'
import { useGetAreasIdQuery } from '../state/areas'
import EmptyContent from '../components/global/EmptyContent'
import CostPagination from '../components/global/CostPagination'


const PropertyInArea = () => {
    let { id } = useParams()
    let lng = i18next.language

    const { t } = useTranslation()
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading } = useGetAreasIdQuery({ id, lng });
    const [tableData, setTableData] = useState([]);


    useEffect(() => {
        if (data && !isLoading) {
            const startIndex = (currentPage - 1) * 3;
            const endIndex = startIndex + 3;
            setTableData(data?.data?.properties.slice(startIndex, endIndex));
        }
    }, [data, isLoading, currentPage]);

    if (isLoading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
        </Box>)

    return (
        <>
            <Header title={data?.data?.name} />
            <WrapperSection>
                {tableData && tableData?.length > 0 ? (
                    <>
                        <HeaderSection nameSection={`${t("AvailableUnits")} ${data?.data?.name}`} length={data?.data?.pagination?.total} />
                        <GlobalList>
                            {tableData?.map(res =>
                                <Grid item md={4} xs={12} key={res?.id}>
                                    <CardProperty img={res?.master_plan}
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
                                </Grid>
                            )}
                        </GlobalList>
                        <CostPagination
                            setCurrentPage={setCurrentPage}
                            count={Math.ceil(data?.data?.properties.length / 3)}
                            currentPage={currentPage} />
                    </>) : (
                    <EmptyContent title={t("EmptyContent")} />
                )}
            </WrapperSection>
        </>
    )
}

export default PropertyInArea