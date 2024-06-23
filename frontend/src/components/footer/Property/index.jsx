import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
// import { Pages } from '../../../constants'
import { Link } from 'react-router-dom'
import i18next from 'i18next'
import HeaderSection from '../../global/HeaderSection'
import { useGetPropertiesQuery } from '../../../state/properties'
import { useTranslation } from 'react-i18next'

const Property = () => {
    let lng = i18next.language

    const { data, isBrandsLoading } = useGetPropertiesQuery({ lng });
    const { t } = useTranslation()
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data?.data)
        }
    }, [data, tableData, isBrandsLoading])
    const available = tableData?.filter(res => res?.is_available === 1)
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-start', p: 1 }} >
                <HeaderSection nameSection={t("Properties")} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0.5 }} >
                    {
                        available?.slice(0, 6)?.map((page, i) => <Link
                            key={i}
                            to={`/property/${page?.slug}`}
                            style={{
                                // fontSize: 14,
                                textTransform: 'capitalize',
                                fontWeight: 'bold',
                                textDecoration: 'none'
                            }}>
                            <Typography color={'secondary.supMain'} >
                                {page?.name}
                            </Typography>
                        </Link>
                        )}
                </Box>
            </Box>
        </>
    )
}

export default Property