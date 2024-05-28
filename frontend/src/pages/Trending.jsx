import { Grid, Pagination, Stack, useMediaQuery } from '@mui/material';
import i18next from 'i18next';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
// import CardProperty from '../components/global/CardProperty';
import GlobalList from '../components/global/GlobalList';
import HeaderSection from '../components/global/HeaderSection';
import WrapperSection from '../components/global/WrapperSection';
// import { useGetPropertiesQuery } from '../state/properties';
import Header from '../components/global/Header';
import CardCompound from '../components/global/CardCompound';
import { useGetCompoundsQuery } from '../state/compounds';
import { useTheme } from '@emotion/react'
const Trending = () => {

    const url = 'https://aqarbackend.revampbrands.com/storage/'
    let lng = i18next.language
    const [currentPage, setCurrentPage] = useState(1);
const themeM = useTheme();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm')); 
    const onPageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    const { data, isBrandsLoading } = useGetCompoundsQuery({ lng, currentPage, trending: 1 });
    // console.log("🚀 ~ ListNewProjects ~ data:", data)

    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data?.data)
        }
    }, [data, tableData, isBrandsLoading])
    const { t } = useTranslation()
    return (
        <>
            <Header title={t("Trending")} />
            <WrapperSection>
                <HeaderSection nameSection={t("Trending")} length={tableData?.length} />
                <GlobalList>
                    {tableData?.map(res =>
                        <Grid item md={4} xs={12} key={res?.id}>
                            <CardCompound
                                    img={url + res?.main_image?.file}
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

export default Trending