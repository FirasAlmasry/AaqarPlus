import { Grid, Pagination, Stack, useMediaQuery } from '@mui/material';
import i18next from 'i18next';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import CardProperty from '../components/global/CardProperty';
import GlobalList from '../components/global/GlobalList';
import HeaderSection from '../components/global/HeaderSection';
import WrapperSection from '../components/global/WrapperSection';
import { useGetPropertiesQuery } from '../state/properties';
import Header from '../components/global/Header';
import { useGetCompoundsQuery } from '../state/compounds';
import CardCompound from '../components/global/CardCompound';
import { useTheme } from '@emotion/react'
const AllLaunchingSoon = () => {

    const url = 'https://aqarbackend.revampbrands.com/storage/'
    let lng = i18next.language
    const [currentPage, setCurrentPage] = useState(1);
const themeM = useTheme();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm')); 
    const onPageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    const { data, isBrandsLoading } = useGetCompoundsQuery({ lng, currentPage, coming_soon: 1 });
    // console.log("🚀 ~ ListNewProjects ~ data:", data)

    const [tableData, setTableData] = useState([]);
    // console.log("🚀 ~ ListNewProjects ~ tableData:", tableData)
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data?.data)
        }
    }, [data, tableData, isBrandsLoading])
    // const available = tableData?.filter(res => res?.is_available === 1)
    // console.log("🚀 ~ ListNewProjects ~ available:", available)
    const { t } = useTranslation()
    return (
        <>
            <Header title={t("LaunchingSoon")} />
            <WrapperSection>
                <HeaderSection nameSection={t("LaunchingSoon")} length={tableData?.length} />
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

export default AllLaunchingSoon