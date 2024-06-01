import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import HeaderSection from '../global/HeaderSection'
import GlobalList from '../global/GlobalList'
import { Box, CircularProgress, Grid} from '@mui/material'
import CardDevelopers from '../global/CardDevelopers'
import i18next from 'i18next'
import { useGetDevelopersQuery } from '../../state/developers'
import { useTranslation } from 'react-i18next'
import EmptyContent from '../global/EmptyContent'
import CostPagination from '../global/CostPagination'
const url = 'https://aqarbackend.revampbrands.com/storage/'
const ListDevelopers = () => {
    let lng = i18next.language
    const { t } = useTranslation()

    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading } = useGetDevelopersQuery({ lng, currentPage });
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        if (data && !isLoading) {
            setTableData(data?.data?.data)
        }
    }, [data, tableData, isLoading])

    if (isLoading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <CircularProgress />
        </Box>)


    return (
            <WrapperSection>
                {tableData && tableData?.length > 0 ? (
                    <>
                        <HeaderSection nameSection={t("Developers")} length={tableData?.length === 0 ? 'no data Here' : tableData?.length} />
                        <GlobalList>
                            {tableData?.map(res =>
                                <Grid item md={4} xs={12} key={res.id} >
                                    <CardDevelopers
                                        img={url + res?.main_image?.file}
                                        title={res?.name}
                                        length={res?.compounds?.length}
                                        id={res?.id}
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
    )
}

export default ListDevelopers