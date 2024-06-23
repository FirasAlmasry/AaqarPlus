import { Box, CircularProgress, Grid } from '@mui/material';
import i18next from 'i18next';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import GlobalList from '../components/global/GlobalList';
import HeaderSection from '../components/global/HeaderSection';
import WrapperSection from '../components/global/WrapperSection';
import Header from '../components/global/Header';
import { useGetCompoundsQuery } from '../state/compounds';
import CardCompound from '../components/global/CardCompound';
import CostPagination from '../components/global/CostPagination';


const AllLaunchingSoon = () => {

    let lng = i18next.language
    const { t } = useTranslation()

    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading } = useGetCompoundsQuery({ lng, currentPage, coming_soon: 1 });
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        if (data && !isLoading) {
            setTableData(data?.data?.data)
        }
    }, [data, tableData, isLoading])

    if (isLoading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
        </Box>)
        
    return (
        <>
            <Header title={t("LaunchingSoon")} />
            <WrapperSection>
                <HeaderSection nameSection={t("LaunchingSoon")} length={data?.data?.total} />
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
                                id={res?.id}
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

export default AllLaunchingSoon