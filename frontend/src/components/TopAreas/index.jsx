import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import HeaderSection from '../global/HeaderSection'
import { Box } from '@mui/material'
import CardArea from '../global/CardArea'
import { useGetAreasQuery } from '../../state/areas'
import i18next from 'i18next'
import MultiItemSlider from '../global/MultiItemSlider'
import { useTranslation } from 'react-i18next'

const TopAreas = () => {

    const url = 'https://aqarbackend.revampbrands.com/storage/'
    let lng = i18next.language
    const { t } = useTranslation()
    const { data, isBrandsLoading } = useGetAreasQuery({ lng, trending: 1});

    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data?.data)
        }
    }, [data, tableData, isBrandsLoading])

    return (
        <>
            <div style={{ backgroundColor: '#f5f5f5' }} >
                <WrapperSection>
                    <Box sx={{ width:'100%' }}>
                        <HeaderSection nameSection={t("Top") + t("area")} length={tableData?.length} />
                        <MultiItemSlider>
                            {tableData?.map(res =>
                                <Box key={res?.id} sx={{ my:2 }}>
                                    <CardArea img={url + res?.image}
                                        title={res?.name}
                                        lengthCompounds={res?.total_compounds}
                                        lengthDevelopers={res?.total_developers}
                                        id={res?.id} />
                                </Box>
                            )}
                        </MultiItemSlider>
                    </Box>
                </WrapperSection>
        </div >
        </>
    )
}

export default TopAreas