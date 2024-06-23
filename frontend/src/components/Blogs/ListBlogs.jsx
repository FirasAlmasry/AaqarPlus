import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import HeaderSection from '../global/HeaderSection'
import GlobalList from '../global/GlobalList'
import { Box, CircularProgress, Grid } from '@mui/material'
import CardBlogs from '../global/CardBlogs'
import i18next from 'i18next'
import { useGetBlogsQuery } from '../../state/blog'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import EmptyContent from '../global/EmptyContent'
import CostPagination from '../global/CostPagination'


const ListBlogs = () => {
    let lng = i18next.language
    const navigate = useNavigate()
    const { t } = useTranslation()

    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading } = useGetBlogsQuery({ lng, currentPage });
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
            <WrapperSection>
                {tableData && tableData?.length > 0 ? (
                    <>
                        <HeaderSection nameSection={t("Blogs")} length={tableData?.length} />
                        <GlobalList>
                            {tableData?.map((res, i) =>
                                <Grid item md={4} xs={12} key={i} onClick={() => navigate(`/blog/${res?.slug}`)} >
                                    <CardBlogs img={res?.main_image} title={res?.name} type={res?.date} date={res?.time} />
                                </Grid>
                            )}
                        </GlobalList>
                        <CostPagination
                            setCurrentPage={setCurrentPage}
                            count={data?.data?.last_page}
                            currentPage={currentPage} />
                    </>) : (
                    <EmptyContent title={t("EmptyContent")} />
                )}
            </WrapperSection>
        </>
    )
}

export default ListBlogs