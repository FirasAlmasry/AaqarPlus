import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import HeaderSection from '../global/HeaderSection'
import GlobalList from '../global/GlobalList'
import CardCompound from '../global/CardCompound'
import Grid from '@mui/material/Grid';
import i18next from 'i18next'
import { useGetCompoundsQuery } from '../../state/compounds'
import { useTranslation } from 'react-i18next'
import EmptyContent from '../global/EmptyContent'
import CostPagination from '../global/CostPagination'

const url = 'https://aqarbackend.revampbrands.com/storage/'
const ListCompounds = () => {
    let lng = i18next.language
    const { t } = useTranslation()

    const [currentPage, setCurrentPage] = useState(1);
    const { data, isBrandsLoading } = useGetCompoundsQuery({ lng, currentPage });
    const [tableData, setTableData] = useState([]);


    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data?.data)
        }
    }, [data, tableData, isBrandsLoading])

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

export default ListCompounds