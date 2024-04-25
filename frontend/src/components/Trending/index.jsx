import React, { useEffect, useState } from 'react'
import HeaderSection from '../global/HeaderSection'
import WrapperSection from '../global/WrapperSection';
// import CardCompound from '../global/CardCompound';
import i18next from 'i18next';
// import { useGetCompoundsQuery } from '../../state/compounds';
import { Box } from '@mui/material';
import MultiItemSlider from '../global/MultiItemSlider';
import { useTranslation } from 'react-i18next';
import { useGetPropertiesQuery } from '../../state/properties';
import CardProperty from '../global/CardProperty';
const Trending = () => {

     const url = 'https://aqarbackend.revampbrands.com/storage/'
    let lng = i18next.language
    const { t } = useTranslation()
    const { data, isBrandsLoading } = useGetPropertiesQuery({ lng, trending: 1 });

    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data?.data)
        }
    }, [data, tableData, isBrandsLoading])


    return (
        <>
            <WrapperSection>
                <Box sx={{ width: '100%' }}>
                    <HeaderSection nameSection={t("Trending")} length={tableData?.length} />
                     <MultiItemSlider>
                        {tableData?.map(res =>
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
        </>
    )
}

export default Trending