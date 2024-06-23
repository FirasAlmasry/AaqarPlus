import React, { useEffect, useState } from 'react'
import Header from '../components/global/Header'
import WrapperSection from '../components/global/WrapperSection'
import HeaderSection from '../components/global/HeaderSection'
import GlobalList from '../components/global/GlobalList'
import { Box, CircularProgress, Grid } from '@mui/material'
import i18next from 'i18next'
import { useGetAreasIdQuery } from '../state/areas'
import { useParams } from 'react-router-dom'
// import CardCompound from '../components/global/CardCompound'
import EmptyContent from '../components/global/EmptyContent'
import { useTranslation } from 'react-i18next'
import CardProperty from '../components/global/CardProperty'
import CostPagination from '../components/global/CostPagination'

const url = 'https://aqarbackend.revampbrands.com/storage/'

const Area = () => {

    let lng = i18next.language
    const { t } = useTranslation()

    let { id } = useParams()
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading } = useGetAreasIdQuery({ id, lng, currentPage });
    const [tableData, setTableData] = useState([]);
    console.log("🚀 ~ Area ~ tableData:", tableData)

    useEffect(() => {
        if (data && !isLoading) {
            setTableData(data?.data)
        }
    }, [data, isLoading])
    
    if (isLoading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
        </Box>)

    return (
        <>
            <Header title={tableData?.name} />
            <WrapperSection>
                {tableData && tableData?.properties?.length > 0 ? (
                    <>
                        <HeaderSection nameSection={`${t("AvailableUnits")} ${tableData?.name}`} length={tableData?.properties?.length === 0 ? t("EmptyContent") : tableData?.properties?.length} />
                        <GlobalList>
                            {tableData?.properties?.map(res =>
                                <Grid item md={4} xs={12} key={res.id} >
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
                                </Grid>
                            )}
                        </GlobalList>
                        <CostPagination
                            setCurrentPage={setCurrentPage}
                            count={data?.data?.pagination?.last_page}
                            currentPage={currentPage} />

                    </>) : (
                    <EmptyContent title={t("EmptyContent")} />
                )}
            </WrapperSection>
        </>
    )
}

export default Area