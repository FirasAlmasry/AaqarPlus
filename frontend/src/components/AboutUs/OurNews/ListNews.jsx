import React, { useEffect, useState } from 'react'
import GlobalList from '../../global/GlobalList'
import { Grid } from '@mui/material'
import CardNews from './CardNews'
import { useGetFoundersQuery } from '../../../state/founders'
import i18next from 'i18next'
const ListNews = () => {
    
    let lng = i18next.language

    const { data, isBrandsLoading } = useGetFoundersQuery({ type: 'NEWS', lng });

    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data)
        }
    }, [data, tableData, isBrandsLoading])
    const url = 'https://aqarbackend.revampbrands.com/storage/'

    return (
        <>
            <GlobalList>
                {tableData?.map((res, i) => 
                    <Grid item md={4} xs={12} key={i}>
                        <CardNews img={url + res?.image} title={res?.name} data={res?.description?.slice(0,200)} />
                </Grid>
            )}
            </GlobalList>
        </>
    )
}

export default ListNews