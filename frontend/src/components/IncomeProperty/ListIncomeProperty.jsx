import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import HeaderSection from '../global/HeaderSection'
import GlobalList from '../global/GlobalList'
// import img from './../../assets/external-view-contemporary-house-with-pool-dusk_190619-224.png'
import { Grid, Pagination, Stack, useMediaQuery } from '@mui/material'
import CardProperty from '../global/CardProperty'
import { useGetPropertiesQuery } from '../../state/properties'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@emotion/react'
const ListIncomeProperty = () => {

    const url = 'https://aqarbackend.revampbrands.com/storage/'
    let lng = i18next.language

    const [currentPage, setCurrentPage] = useState(1);
const themeM = useTheme();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm')); 
    const onPageChange = (newPage) => {
        setCurrentPage(newPage);
    };
        const { data, isBrandsLoading } = useGetPropertiesQuery({ lng, currentPage, coming_soon: 1 });

    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data?.data)
        }
    }, [data, tableData, isBrandsLoading])
    // const un_available = tableData?.filter(res => res?.is_available === 0)
const { t } = useTranslation()
    return (
        <>
            <WrapperSection>
                <HeaderSection nameSection={t("IncomeProperty") }  length={tableData?.length} />
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
            </WrapperSection>
        </>
    )
}

export default ListIncomeProperty