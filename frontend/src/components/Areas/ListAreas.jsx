import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import HeaderSection from '../global/HeaderSection'
import GlobalList from '../global/GlobalList'
import CardArea from '../global/CardArea'
import { Box, CircularProgress, Grid, } from '@mui/material'
import { useGetAreasQuery } from '../../state/areas'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import EmptyContent from '../global/EmptyContent'
import CostPagination from '../global/CostPagination'


const ListAreas = () => {
    let lng = i18next.language
    const { t } = useTranslation()

    const [currentPage, setCurrentPage] = useState(1);

    const { data, isBrandsLoading } = useGetAreasQuery({ lng, currentPage });

    const [tableData, setTableData] = useState([]);
    const [isTableDataLoading, setIsTableDataLoading] = useState(true);



    useEffect(() => {
        setIsTableDataLoading(true);
        if (data && !isBrandsLoading) {
            setTableData(data?.data?.data)
            setIsTableDataLoading(false);
        }
    }, [data, tableData, isBrandsLoading])

    if (isTableDataLoading) return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
    </Box>)

    return (
            <WrapperSection>
                {tableData && tableData?.length > 0 ? (
                    <>
                    <HeaderSection nameSection={t("area")} length={data?.data?.total} />
                        <GlobalList>
                            {tableData?.map(res =>
                                <Grid item md={4} xs={12} key={res?.id}>
                                    <CardArea img={res?.image}
                                        title={res?.name}
                                        lengthCompounds={res?.total_compounds}
                                        lengthDevelopers={res?.total_developers}
                                        id={res?.slug} />
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
    )
}

export default ListAreas