import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import HeaderSection from '../global/HeaderSection'
import GlobalList from '../global/GlobalList'
import { Box, CircularProgress, Grid } from '@mui/material'
import CardProperty from '../global/CardProperty'
import i18next from 'i18next'
import { useGetPropertiesQuery } from '../../state/properties'
import { useTranslation } from 'react-i18next'
import CostPagination from '../global/CostPagination'


const ListNewProjects = () => {

    let lng = i18next.language
    const { t } = useTranslation()

    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading } = useGetPropertiesQuery({ lng, currentPage, coming_soon: 0 });
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        if (data && !isLoading) {
            setTableData(data?.data?.data)
        }
    }, [data, isLoading])


    if (isLoading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
        </Box>)

    return (
        <>
            <WrapperSection>
                <HeaderSection nameSection={t("Properties")} length={data?.data?.total} />
                <GlobalList>
                    {tableData?.map(res =>
                        <Grid item md={4} xs={12} key={res?.id}>
                            <CardProperty img={res?.master_plan}
                                name={res?.name}
                                address={res?.area_name}
                                num1={res?.bedrooms}
                                num2={res?.bathrooms}
                                num3={res?.house_area}
                                month={res?.monthly_installment}
                                years={res?.installment_years}
                                price={res?.end_price}
                                whatsapp={res?.whatsapp}
                                phone_number={res?.phone_number}
                                id={res?.slug}
                                agent_id={res?.agent_code}
                                // is_favorite={res?.is_favorite}
                                // toggleFavorite={toggleFavorite}
                            />
                        </Grid>
                    )}
                </GlobalList>
                <CostPagination
                    setCurrentPage={setCurrentPage}
                    count={data?.data?.last_page}
                    currentPage={currentPage} />
            </WrapperSection>
        </>
    )
}

export default ListNewProjects