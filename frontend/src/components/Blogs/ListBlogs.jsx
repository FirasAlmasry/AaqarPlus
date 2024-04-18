import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import HeaderSection from '../global/HeaderSection'
import GlobalList from '../global/GlobalList'
import { Grid, Pagination, Stack } from '@mui/material'
import CardBlogs from '../global/CardBlogs'
import i18next from 'i18next'
import { useGetBlogsQuery } from '../../state/blog'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ListBlogs = () => {
    const url = 'https://aqarbackend.revampbrands.com/storage/'
    let lng = i18next.language
    const navigate = useNavigate()
     const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    const { data, isBrandsLoading } = useGetBlogsQuery({ lng, currentPage });

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
                <HeaderSection nameSection={t("Blogs")} length={tableData?.length} />
                <GlobalList>
                    {isBrandsLoading ? 'loading' : tableData?.map((res, i) =>
                        <Grid item md={4} xs={12} key={i} onClick={() => navigate(`/blog/${res?.id}`)} >
                            <CardBlogs img={url + res?.main_image} title={res?.name} type={res?.date} date={res?.time} />
                        </Grid>
                    )}
                </GlobalList>
                <Stack spacing={2}>
                    <Pagination
                        count={data?.data?.last_page}
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
            </WrapperSection>
        </>
    )
}

export default ListBlogs