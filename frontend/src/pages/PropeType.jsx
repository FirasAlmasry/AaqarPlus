import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Grid, MenuItem, Pagination, Select, Stack } from '@mui/material'
import Header from '../components/global/Header'
import WrapperSection from '../components/global/WrapperSection'
import HeaderSection from '../components/global/HeaderSection'
import GlobalList from '../components/global/GlobalList'
import CardProperty from '../components/global/CardProperty'
import { useGetPropertyTypeIdQuery } from '../state/PropertyType'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import EmptyContent from '../components/global/EmptyContent'


const PropeType = () => {

    const url = 'https://aqarbackend.revampbrands.com/storage/'
    let { id } = useParams()
    let lng = i18next.language
    const [currentPage, setCurrentPage] = useState(1);
    const [saleTypeFilter, setSaleTypeFilter] = useState('');
    const onPageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    const { data, isBrandsLoading } = useGetPropertyTypeIdQuery({ id, lng, currentPage });
    // console.log("🚀 ~ PropeType ~ data:", data)
    const [tableData, setTableData] = useState([]);
    // console.log("🚀 ~ PropeType ~ tableData:", tableData)
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data)
        }
    }, [data, tableData, isBrandsLoading])

    const { t } = useTranslation() 
    const handleSaleTypeChange = (event) => {
        setSaleTypeFilter(event.target.value);
    };
    const filteredProperties = tableData?.properties?.data?.filter(res => saleTypeFilter === '' || res?.sale_type === saleTypeFilter);
    // console.log("🚀 ~ PropeType ~ filteredProperties:", filteredProperties)

    return (
        <>
            <Header title={lng === 'en' ? tableData?.property_type?.name?.en : tableData?.property_type?.name?.ar} />
            <WrapperSection>
                <Select
                    value={saleTypeFilter}
                    onChange={handleSaleTypeChange}
                    displayEmpty
                    fullWidth
                >
                    <MenuItem value=""> {lng === ' en' ? 'Filter by Sale Type' : 'تصفية حسب نوع البيع' }</MenuItem>
                    <MenuItem value="resale">Resale</MenuItem>
                    <MenuItem value="primary">Primary</MenuItem>
                    <MenuItem value="rent">Rent</MenuItem>
                </Select>
                {tableData && filteredProperties?.length > 0  ? (
                    <>
                        <HeaderSection nameSection={`${t("AvailableProp")} ${lng === 'en' ? tableData?.property_type?.name?.en : tableData?.property_type?.name?.ar}`} length={filteredProperties?.length} />
                <GlobalList>
                            <GlobalList>
                                {filteredProperties.map(res =>
                                    <Grid item md={4} xs={12} key={res?.id}>
                                        <CardProperty img={url + res?.master_plan}
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
                                            id={res?.id}
                                            agent_id={res?.agent_code}
                                        />
                                    </Grid>
                                )}
                            </GlobalList>
                </GlobalList>
                        <Stack spacing={2}>
                            <Pagination
                                count={data?.data?.properties?.last_page}
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

export default PropeType