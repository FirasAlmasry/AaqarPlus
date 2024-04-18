import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import HeaderSection from '../global/HeaderSection'
import GlobalList from '../global/GlobalList'
// import img from './../../assets/external-view-contemporary-house-with-pool-dusk_190619-224.png'
import { Grid, Pagination, Stack } from '@mui/material'
import CardProperty from '../global/CardProperty'
import i18next from 'i18next'
import { useGetPropertiesQuery } from '../../state/properties'
import { useTranslation } from 'react-i18next'

const ListNewProjects = () => {

    const url = 'https://aqarbackend.revampbrands.com/storage/'
    let lng = i18next.language
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    const { data, isBrandsLoading } = useGetPropertiesQuery({ lng, currentPage });

    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data?.data)
        }
    }, [data, tableData, isBrandsLoading])
    const available = tableData?.filter(res => res?.is_available === 1)
    const { t } = useTranslation()
    return (
        <>
            <WrapperSection>
                <HeaderSection nameSection={t("Properties") } length={available?.length} />
                <GlobalList>
                    {available?.map(res =>
                        <Grid item md={4} xs={12} key={res?.id}>
                            <CardProperty img={url + res?.master_plan}
                                name={res?.name}
                                address={res?.address}
                                num1={res?.bedrooms}
                                num2={res?.bathrooms}
                                num3={res?.house_area}
                                month={res?.monthly_installment}
                                years={res?.installment_years}
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
            </WrapperSection>
        </>
    )
}

export default ListNewProjects