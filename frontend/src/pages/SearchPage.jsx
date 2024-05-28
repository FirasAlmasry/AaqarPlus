import React, { useEffect, useState } from 'react'
import Header from '../components/global/Header'
import { useTranslation } from 'react-i18next'
import WrapperSection from '../components/global/WrapperSection'
import HeaderSection from '../components/global/HeaderSection'
import GlobalList from '../components/global/GlobalList'
import { Box, Grid, Pagination, Stack, useMediaQuery } from '@mui/material'
import CardProperty from '../components/global/CardProperty'
import { useGetSearchTextQuery } from '../state/apiSearch'
import i18next from 'i18next'
import { useLocation } from 'react-router-dom'
import EmptyContent from '../components/global/EmptyContent'
import Search from '../components/global/Search'
import { useTheme } from '@emotion/react'
const SearchPage = () => {
    const url = 'https://aqarbackend.revampbrands.com/storage/'
    let lng = i18next.language
    const [currentPage, setCurrentPage] = useState(1);
    const themeM = useTheme();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm')); 
    const onPageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    // داخل الوظيفة
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    console.log("🚀 ~ SearchPage ~ queryParams:", queryParams)
    // console.log("🚀 ~ SearchPage ~ queryParams:", queryParams)

    // قراءة الكويريز من العنوان URL
    const property_type = queryParams.get('property_type');
    const type = queryParams.get('type');
    const country = queryParams.get('country');
    const area = queryParams.get('area');
    const tags = queryParams.get('tags');
    const maxPrice = queryParams.get('max_price');
    // const page = queryParams.get('page') || 1;

    // إنشاء كائن لتخزين الكويريز الغير فارغة
    const queryParameters = {};

    // تخزين الكويريز الغير فارغة في الكائن
    if (type) {
        queryParameters.type = type;
    }
    if (country) {
        queryParameters.country = country;
    }
    if (property_type) {
        queryParameters.property_type = property_type;
    }
    if (area) {
        queryParameters.area = area;
    }
    if (tags) {
        queryParameters.tags = tags;
    }
    if (maxPrice) {
        queryParameters.max_price = maxPrice;
    }

    // استخدام الكويريز في استدعاء استعلام API إذا كانت لها قيم غير فارغة
    const { data, isBrandsLoading } = useGetSearchTextQuery({
        ...queryParameters,
        per_page: 6, // تحديد عدد النتائج لكل صفحة
        lng: i18next.language,
        currentPage
    });

    const [tableData, setTableData] = useState([]);
    // console.log("🚀 ~ SearchPage ~ tableData:", tableData)
    useEffect(() => {
        // console.log("🚀 ~ SearchPage ~ data:", data)
        if (data && !isBrandsLoading) {
            setTableData(data?.data?.data)
        }
    }, [data, tableData, isBrandsLoading])
    const { t } = useTranslation()
    return (
        <>
            <Header />
            <Box sx={{ mt: '-10rem' }} >
                <WrapperSection>
                    <Search />
                </WrapperSection>
            </Box>
            <WrapperSection>
                {tableData && tableData?.length > 0 ? (
                    <>
                <HeaderSection nameSection={t("Properties")} length={tableData?.length > 0 ? tableData?.length : 'no result found' } />
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
                <Stack spacing={2}>
                    <Pagination
                        count={data?.data?.last_page}
                        shape="rounded"
                        page={currentPage}
                         size={isMobile ? 'small' : 'large'}
                                siblingCount={0}
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

export default SearchPage