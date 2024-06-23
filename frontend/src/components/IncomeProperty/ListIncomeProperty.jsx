import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import HeaderSection from '../global/HeaderSection'
import GlobalList from '../global/GlobalList'
import { Box, CircularProgress, Grid } from '@mui/material'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import CostPagination from '../global/CostPagination'
import { useGetCompoundsQuery } from '../../state/compounds'
import CardCompound from '../global/CardCompound'
import EmptyContent from '../global/EmptyContent'


const ListIncomeProperty = () => {

    let lng = i18next.language

    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading } = useGetCompoundsQuery({ lng, coming_soon: 1 });
    const [tableData, setTableData] = useState([]);
    const { t } = useTranslation()

    useEffect(() => {
        if (data && !isLoading) {
            setTableData(data?.data?.data)
        }
    }, [data, isLoading])

    if (isLoading) return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
        <CircularProgress />
    </Box>

    if (!tableData || tableData?.length === 0) return <EmptyContent title={t("EmptyContent")} />

    return (
        <>
            <WrapperSection>
                <>
                    <HeaderSection nameSection={t("LaunchingSoon")} length={tableData?.length} />
                <GlobalList>
                    {tableData?.map(res =>
                        <Grid item md={4} xs={12} key={res?.id}>
                            <CardCompound
                                img={res?.main_image?.file}
                                name={res?.name}
                                address={res?.address}
                                price={res?.end_price}
                                whatsapp={res?.whatsapp}
                                phone_number={res?.phone_number}
                                id={res?.slug}
                            />
                        </Grid>
                    )}
                </GlobalList>
                <CostPagination
                    setCurrentPage={setCurrentPage}
                    count={data?.data?.last_page}
                    currentPage={currentPage} />
                    </>
            </WrapperSection>
        </>
    )
}

export default ListIncomeProperty