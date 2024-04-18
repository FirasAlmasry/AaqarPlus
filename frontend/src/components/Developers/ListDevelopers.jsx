import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import HeaderSection from '../global/HeaderSection'
import GlobalList from '../global/GlobalList'
import { Grid, Pagination, Stack } from '@mui/material'
// import img from './../../assets/wet-garden-vintage-nature-swimming.png'
import CardDevelopers from '../global/CardDevelopers'
import i18next from 'i18next'
import { useGetDevelopersQuery } from '../../state/developers'
import { useTranslation } from 'react-i18next'

const ListDevelopers = () => {
    const url = 'https://aqarbackend.revampbrands.com/storage/'
    let lng = i18next.language
    const [currentPage, setCurrentPage] = useState(1);
const { t } = useTranslation()
    const onPageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    const { data, isBrandsLoading } = useGetDevelopersQuery({ lng, currentPage });

    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data?.data)
        }
    }, [data, tableData, isBrandsLoading])
    return (
        <>
            <WrapperSection>
                <HeaderSection nameSection={t("Developers")} length={tableData?.length === 0 ? 'no data Here' : tableData?.length} />
                <GlobalList>
                    {tableData?.map(res =>
                        <Grid item md={4} xs={12} key={res.id} >
                            <CardDevelopers
                                img={url + res?.image}
                                title={res?.name}
                                length={res?.compounds?.length}
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
            </WrapperSection>
        </>
    )
}

export default ListDevelopers