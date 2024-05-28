import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import GlobalList from '../global/GlobalList'
import { Box, CardMedia, Grid, Typography } from '@mui/material'
import CardBlogs from '../global/CardBlogs'
import HeaderSection from '../global/HeaderSection'
import { useGetBlogsIdQuery } from '../../state/blog'
import i18next from 'i18next'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const BlogDetails = () => {

    const url = 'https://aqarbackend.revampbrands.com/storage/'

    let lng = i18next.language
    let { id } = useParams()
    const { data, isBrandsLoading } = useGetBlogsIdQuery({ lng, id });
    const {t} = useTranslation()
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data)
        }
    }, [data, tableData, isBrandsLoading])
    return (
        <>
            <WrapperSection>
                <GlobalList>
                    <Grid item md={5} xs={12} >
                        <Box sx={{ position:'sticky', top:'15%' }} >
                            <CardBlogs
                                img={url + tableData?.main_image}
                                title={tableData?.name}
                                type={tableData?.date}
                                date={tableData?.time}
                            />
                            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 4, mt: 4 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >
                                    {tableData?.images?.map(res => <Box item md={3} xs={12} key={res?.id} >
                                        <Box>
                                            <CardMedia
                                                sx={{ height: 160, width: 160, borderRadius: '16px', }}
                                                image={url + res?.image}
                                                title="green iguana" />
                                        </Box>
                                    </Box>)}
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={1} ></Grid>
                    <Grid item md={6} xs={12} >
                        <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column', m:4 }}>
                            <HeaderSection nameSection={tableData?.name} />
                            <Typography color={'secondary.supMain'}>{tableData?.small_text}</Typography>
                            <Box sx={{ my:2 }}>
                                <HeaderSection nameSection={t("Description")} />
                                <div className="desc" dangerouslySetInnerHTML={{ __html: tableData?.large_text }}></div>
                            </Box>
                        </Box>
                    </Grid>
                </GlobalList>
                
            </WrapperSection>
        </>
    )
}

export default BlogDetails