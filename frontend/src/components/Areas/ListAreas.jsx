import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import HeaderSection from '../global/HeaderSection'
import GlobalList from '../global/GlobalList'
import CardArea from '../global/CardArea'
import { Grid, Pagination, Stack, useMediaQuery } from '@mui/material'
import { useGetAreasQuery } from '../../state/areas'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import EmptyContent from '../global/EmptyContent'
import { useTheme } from '@emotion/react'
const ListAreas = () => {
    const url = 'https://aqarbackend.revampbrands.com/storage/'
    let lng = i18next.language
    
    const [currentPage, setCurrentPage] = useState(1);
const themeM = useTheme();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm')); 
    const onPageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    const { data, isBrandsLoading } = useGetAreasQuery({ lng, currentPage });

    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data?.data)
        }
    }, [data, tableData, isBrandsLoading])
const {t} = useTranslation()
    return (
        <>
            <WrapperSection>
                {tableData && tableData?.length > 0 ? (
                    <>
                <HeaderSection nameSection={t("area")} length={tableData?.length} />
                <GlobalList>
                    {tableData?.map(res =>
                        <Grid item md={4} xs={12} key={res?.id}>
                            <CardArea img={url + res?.image}
                                title={res?.name}
                                lengthCompounds={res?.total_compounds}
                                lengthDevelopers={res?.total_developers}
                                id={res?.id} />
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
                        sx={{ '.MuiPaginationItem-icon': {
                            transform: lng === 'ar' ? 'rotate(180deg)' : 'rotate(0deg)'
                        } }}
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

export default ListAreas