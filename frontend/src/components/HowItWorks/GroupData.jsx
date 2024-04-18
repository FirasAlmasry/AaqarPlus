import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import GlobalList from '../global/GlobalList'
import { Grid } from '@mui/material'
import BoxData from './BoxData'
import i18next from 'i18next'
import { useGetInfoTextQuery } from '../../state/info'
import { useTranslation } from 'react-i18next'

const GroupData = () => {

    let lng = i18next.language

    const { data, isBrandsLoading } = useGetInfoTextQuery(lng);

    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data)
        }
    }, [data, tableData, isBrandsLoading])
    const { t } = useTranslation()
    
    return (
        <>
            <WrapperSection>
                <GlobalList>
                    <Grid item md={6} xs={12} >
                        <BoxData name={t("Buyer")} description={tableData?.description_buyer} />
                    </Grid>
                    <Grid item md={6} xs={12} >
                        <BoxData name={t("Seller")} description={tableData?.description_seller} />
                    </Grid>
                </GlobalList>
            </WrapperSection>
        </>
    )
}

export default GroupData