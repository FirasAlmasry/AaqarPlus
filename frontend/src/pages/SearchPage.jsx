import React, { useEffect, useMemo, useState } from 'react'
import Header from '../components/global/Header'
import { useTranslation } from 'react-i18next'
import WrapperSection from '../components/global/WrapperSection'
import HeaderSection from '../components/global/HeaderSection'
import GlobalList from '../components/global/GlobalList'
import { Box, CircularProgress, Grid } from '@mui/material'
import CardProperty from '../components/global/CardProperty'
import { useGetSearchTextQuery } from '../state/apiSearch'
import i18next from 'i18next'
import { useSearchParams } from 'react-router-dom'
import EmptyContent from '../components/global/EmptyContent'
import Search from '../components/global/Search'
import CostPagination from '../components/global/CostPagination'

const url = 'https://aqarbackend.revampbrands.com/storage/'

const SearchPage = () => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [searchParams] = useSearchParams();
    const [tableData, setTableData] = useState([]);
    const [isTableDataLoading, setIsTableDataLoading] = useState(true);
    const { t } = useTranslation()
    let lng = i18next.language
    const property_type = searchParams.get('property_type');
    const type = searchParams.get('type');
    const country = searchParams.get('country');
    const area = searchParams.get('area');
    const tags = searchParams.get('tags');
    const maxPrice = searchParams.get('max_price');

    const queryParameters = useMemo(() => {
        const params = {};
        if (type) params.type = type;
        if (country) params.country = country;
        if (property_type) params.property_type = property_type;
        if (area) params.area = area;
        if (tags) params.tags = tags;
        if (maxPrice) params.max_price = maxPrice;
        return params;
    }, [type, country, property_type, area, tags, maxPrice]);

    const { data, isLoading } = useGetSearchTextQuery({
        ...queryParameters,
        per_page: 6,
        lng,
        currentPage
    });


    useEffect(() => {
        setIsTableDataLoading(true);
    }, [queryParameters, currentPage]);

    useEffect(() => {
        setIsTableDataLoading(true);
        if (data && !isLoading) {
            setTableData(data?.data?.data)
            setIsTableDataLoading(false);
        }
    }, [data, tableData, isLoading])
    
    if (isTableDataLoading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <CircularProgress />
        </Box>)
        
    return (
        <>
            <Header />
            <Box sx={{ mt: '-10rem' }} >
                <WrapperSection>
                    <Search />
                </WrapperSection>
            </Box>
            <WrapperSection>
                    {tableData && tableData.length > 0 ? (
                        <>
                            <HeaderSection nameSection={t("Properties")} length={tableData.length > 0 ? tableData.length : 'no result found'} />
                            <GlobalList>
                                {tableData.map(res =>
                                    <Grid item md={4} xs={12} key={res.id}>
                                        <CardProperty
                                            img={url + res.master_plan}
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
                                    count={data?.data?.last_page}
                                    currentPage={currentPage} />
                        </>
                    ) : (
                        <EmptyContent title={t("EmptyContent")} />
                    )}
            </WrapperSection>
        </>
    )
}

export default SearchPage