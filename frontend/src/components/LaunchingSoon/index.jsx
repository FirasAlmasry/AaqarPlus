import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import HeaderSection from '../global/HeaderSection'
import { Box } from '@mui/material'
// import CardArea from '../global/CardArea'
// import { useGetAreasQuery } from '../../state/areas'
import i18next from 'i18next'
import MultiItemSlider from '../global/MultiItemSlider'
import { useTranslation } from 'react-i18next'
import { useGetPropertiesQuery } from '../../state/properties'
import CardProperty from '../global/CardProperty'

const LaunchingSoon = () => {
    const url = 'https://aqarbackend.revampbrands.com/storage/'
    let lng = i18next.language

    const { data, isBrandsLoading } = useGetPropertiesQuery({ lng });

    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data?.data)
        }
    }, [data, tableData, isBrandsLoading])
    const un_available = tableData?.filter(res => res?.is_available === 0)
    const { t } = useTranslation()


    return (
        <>
            <div style={{ backgroundColor: '#f5f5f5' }} >
                <WrapperSection>
                    <Box sx={{ width: '100%' }}>
                        <HeaderSection nameSection={t("LaunchingSoon")} length={un_available?.length} />
                        <MultiItemSlider>
                            {un_available?.map(res =>
                                <Box key={res?.id} sx={{ my: 2 }}>
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
                                </Box>
                            )}
                        </MultiItemSlider>
                    </Box>
                </WrapperSection>
            </div >
        </>
    )
}

export default LaunchingSoon