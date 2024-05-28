import React, { useEffect, useState } from 'react'
import Header from '../components/global/Header'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import { Grid, Pagination, Stack } from '@mui/material'
import CardProperty from '../components/global/CardProperty'
import WrapperSection from '../components/global/WrapperSection'
import GlobalList from '../components/global/GlobalList'
import { useLocation, useParams } from 'react-router-dom'
import HeaderSection from '../components/global/HeaderSection'
import { useGetAreasIdQuery } from '../state/areas'
import EmptyContent from '../components/global/EmptyContent'

const PropertyInArea = () => {
    const url = 'https://aqarbackend.revampbrands.com/storage/'
    let { id } = useParams()
    console.log("🚀 ~ PropertyInArea ~ id:", id)
    let lng = i18next.language
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    const { data, isBrandsLoading } = useGetAreasIdQuery({ id, lng });

    const [tableData, setTableData] = useState([]);
    // تحديث tableData عند تغيير البجنيشن
    useEffect(() => {
        if (data && !isBrandsLoading) {
            // حساب الفهرس الأول والأخير للبيانات المناسبة للصفحة الحالية
            const startIndex = (currentPage - 1) * 3;
            const endIndex = startIndex + 3;
            // تحديث tableData باستخدام البيانات المناسبة للصفحة الحالية
            setTableData(data?.data?.properties.slice(startIndex, endIndex));
        } 
    }, [data, isBrandsLoading, currentPage]);
    const { t } = useTranslation()
    // let tableData = JSON.parse(localStorage.getItem('areaUnits'));
    return (
        <>
            <Header title={t("Properties")} />
            <WrapperSection>
                {tableData && tableData?.length > 0 ? (
                    <>
                        <HeaderSection nameSection={t("Properties")} length={tableData?.length} />
                        <GlobalList>
                            {tableData?.map(res =>
                                <Grid item md={4} xs={12} key={res?.id}>
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
                        {/* // بجنيشن */}
                        <Stack spacing={2}>
                            <Pagination
                                count={Math.ceil(data?.data?.properties.length / 3)} // حساب عدد الصفحات
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

export default PropertyInArea