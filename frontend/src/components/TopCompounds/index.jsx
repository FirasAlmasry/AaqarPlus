import React, { useEffect, useState } from 'react'
import HeaderSection from '../global/HeaderSection'
import WrapperSection from '../global/WrapperSection';
import CardCompound from '../global/CardCompound';
import i18next from 'i18next';
import { useGetCompoundsQuery } from '../../state/compounds';
import { Box } from '@mui/material';
import MultiItemSlider from '../global/MultiItemSlider';
import { useTranslation } from 'react-i18next';
const TopCompounds = () => {

    const url = 'https://aqarbackend.revampbrands.com/storage/'
    let lng = i18next.language
    const { t } = useTranslation()
    const { data, isBrandsLoading } = useGetCompoundsQuery({ lng, trending: 1 });

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
                    <HeaderSection nameSection={t("Top") + t("compound")} length={tableData?.length} />
                    <MultiItemSlider>
                        {tableData?.map(res =>
                            <Box key={res?.id} sx={{ my: 2 }}>
                                <CardCompound
                                    img={url + res?.main_image?.file}
                                    name={res?.name}
                                    address={res?.address}
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

export default TopCompounds