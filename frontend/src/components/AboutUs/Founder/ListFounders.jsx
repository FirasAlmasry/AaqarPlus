import React, { useEffect, useState } from 'react'
import GlobalList from '../../global/GlobalList'
import { Grid } from '@mui/material'
import CardFounder from './CardFounder'
import WrapperSection from '../../global/WrapperSection'
import HeaderSection from '../../global/HeaderSection'
import { useGetFoundersQuery } from '../../../state/founders'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
const ListFounders = () => {
    let lng = i18next.language

    const { data, isBrandsLoading } = useGetFoundersQuery({ type: 'FOUNDER', lng });

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
                <HeaderSection nameSection={t("Founder")} mb={2} />
                <GlobalList>
                    {tableData?.map((res, i) =>
                        <Grid item md={3} xs={12} key={i} >
                            <CardFounder dirCol={i % 2 === 0 ? 'column' : 'column-reverse'} img={res?.image} name={res?.name} title_job={res?.description} />
                        </Grid>
                    )}
                </GlobalList>
            </WrapperSection>
        </>
    )
}

export default ListFounders