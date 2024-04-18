import React, { useEffect, useState } from 'react'
import Header from '../components/global/Header'
import WrapperSection from '../components/global/WrapperSection'
import HeaderSection from '../components/global/HeaderSection'
import GlobalList from '../components/global/GlobalList'
import { Grid } from '@mui/material'
import CardDevelopers from '../components/global/CardDevelopers'
// import img from './../assets/wet-garden-vintage-nature-swimming.png'
import i18next from 'i18next'
import { useGetAreasIdQuery } from '../state/areas'
import { useParams } from 'react-router-dom'

const Area = () => {
    const url = 'https://aqarbackend.revampbrands.com/storage/'
    let lng = i18next.language
    let { id } = useParams()
    const { data, isBrandsLoading } = useGetAreasIdQuery({ id, lng });

    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data)
        }
    }, [data, tableData, isBrandsLoading])

    return (
        <>
            <Header title={tableData?.name} />
            <WrapperSection>
                <HeaderSection nameSection={`Developers with ${tableData?.name}`} length={tableData?.developers?.length === 0 ? 'no data Here 0' : tableData?.developers?.length} />
                <GlobalList>
                    {tableData?.developers?.map(res =>
                        <Grid item md={4} xs={12} key={res.id} >
                            <CardDevelopers
                                img={url + res?.image}
                                title={lng === 'ar' ? res?.name?.ar : res?.name?.en}
                                length={res?.compounds?.length}
                                id={res?.id}
                                />
                        </Grid>
                    )}
                </GlobalList>
            </WrapperSection>
        </>
    )
}

export default Area