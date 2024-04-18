import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
// import { Pages } from '../../../constants'
import { Link } from 'react-router-dom'
import i18next from 'i18next'
import HeaderSection from '../../global/HeaderSection'
import { useGetCompoundsQuery } from '../../../state/compounds'
import { useTranslation } from 'react-i18next'

const Compounds = () => {
    let lng = i18next.language
    const { data, isBrandsLoading } = useGetCompoundsQuery({ lng });
    const { t } = useTranslation()
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data?.data)
        }
    }, [data, tableData, isBrandsLoading])
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-start', p: 1 }} >
                <HeaderSection nameSection={t("compound")} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0.5 }} >
                    {
                        tableData?.slice(0, 6)?.map((page, i) => <Link
                            key={i}
                            to={`/compound/${page?.id}`}
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

export default Compounds