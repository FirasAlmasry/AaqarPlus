import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import HeaderSection from '../global/HeaderSection'
import GlobalList from '../global/GlobalList'
import CardCompound from '../global/CardCompound'
import Grid from '@mui/material/Grid';
// import img from './../../assets/external-view-contemporary-house-with-pool-dusk_190619-224.png'
import i18next from 'i18next'
import { useGetCompoundsQuery } from '../../state/compounds'
import { Pagination, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'
import EmptyContent from '../global/EmptyContent'

const ListCompounds = () => {
    const url = 'https://aqarbackend.revampbrands.com/storage/'
    let lng = i18next.language
    const [currentPage, setCurrentPage] = useState(1);

    const { data, isBrandsLoading } = useGetCompoundsQuery({ lng, currentPage });

    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data?.data)
        }
    }, [data, tableData, isBrandsLoading])
    const onPageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    const { t } = useTranslation()
    return (
        <>
            <WrapperSection>
                {tableData && tableData?.length > 0 ? (
                    <>
                        <HeaderSection nameSection={t("compound")} length={tableData?.length} />
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
                                onChange={(event, value) => onPageChange(value)}
                                sx={{
                                    '.MuiPaginationItem-icon': {
                                        transform: lng === 'ar' ? 'rotate(180deg)' : 'rotate(0deg)'
                                    }
                                }}
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

export default ListCompounds