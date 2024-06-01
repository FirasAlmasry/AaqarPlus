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

const url = 'https://aqarbackend.revampbrands.com/storage/'

const Country = () => {

    let { id } = useParams()
    let lng = i18next.language

    
    const { t } = useTranslation()
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading } = useGetCountryIdQuery({ id, lng, currentPage });
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        if (data && !isLoading) {
            setTableData(data?.data)
        }
    }, [data, tableData, isLoading])

    // const formattedData = Array.isArray(tableData?.properties) ? tableData?.properties : (tableData?.properties && Object.values(tableData?.properties));

    if (isLoading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <CircularProgress />
        </Box>)

    return (
        <>
            <Header title={tableData?.name} />
            <WrapperSection>
                {tableData && tableData.properties && tableData.properties?.length ? (
                    <>
                        <HeaderSection nameSection={`${t("AvailableUnits")} ${tableData?.name}`} length={tableData.properties?.length} />
                        <GlobalList>
                            {tableData?.properties?.map(res =>
                                <Grid item md={4} xs={12} key={res.id}>
                                    <CardProperty img={url + res.master_plan}
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