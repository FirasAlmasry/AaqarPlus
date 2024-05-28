import React, { useEffect, useState } from 'react'
import Header from '../components/global/Header'
import WrapperSection from '../components/global/WrapperSection'
import HeaderSection from '../components/global/HeaderSection'
import GlobalList from '../components/global/GlobalList'
import { Grid, Pagination, Stack } from '@mui/material'
import i18next from 'i18next'
import { useGetAreasIdQuery } from '../state/areas'
import { useParams } from 'react-router-dom'
// import CardCompound from '../components/global/CardCompound'
import EmptyContent from '../components/global/EmptyContent'
import { useTranslation } from 'react-i18next'
import CardProperty from '../components/global/CardProperty'

const Area = () => {
    const url = 'https://aqarbackend.revampbrands.com/storage/'
    let lng = i18next.language
    let { id } = useParams()

    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    const { data, isBrandsLoading } = useGetAreasIdQuery({ id, lng, currentPage });

    const [tableData, setTableData] = useState([]);
    console.log("🚀 ~ Area ~ tableData:", tableData)
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data)
        }
    }, [data, tableData, isBrandsLoading])
    const { t } = useTranslation()
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
                            />
                        </Grid>
                    )}
                </GlobalList>
                        <Stack spacing={2}>
                            <Pagination
                                count={data?.data?.pagination?.last_page}
                                shape="rounded"
                                page={currentPage}
                                onChange={(event, value) => onPageChange(value)}
                                sx={{
                                    '.MuiPaginationItem-icon': {
                                        transform: lng === 'ar' ? 'rotate(180deg)' : 'rotate(0deg)'
                                    }
                                }}
                            />
                        </Stack>
                    </>) : (
                    // إذا لم تكن هناك بيانات، استدعاء المكون الآخر هنا
                    <EmptyContent title={t("EmptyContent")} />
                )}
            </WrapperSection>
        </>
    )
}

export default Area