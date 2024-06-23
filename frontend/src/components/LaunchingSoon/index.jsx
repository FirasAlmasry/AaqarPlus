import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import HeaderSection from '../global/HeaderSection'
import { Box, Button, CircularProgress } from '@mui/material'
import i18next from 'i18next'
import MultiItemSlider from '../global/MultiItemSlider'
import { useTranslation } from 'react-i18next'
import CardCompound from '../global/CardCompound'
import { useGetCompoundsQuery } from '../../state/compounds'

import theme from '../../util/theme';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const LaunchingSoon = () => {
    
    let lng = i18next.language

    const { data, isBrandsLoading } = useGetCompoundsQuery({ lng, coming_soon: 1 });

    const [tableData, setTableData] = useState([]);
    const [isTableDataLoading, setIsTableDataLoading] = useState(true);
    useEffect(() => {
        
        setIsTableDataLoading(true);
        if (data && !isBrandsLoading) {
            setTableData(data?.data?.data)
            
            setIsTableDataLoading(false);
        }
    }, [data, tableData, isBrandsLoading])
    const { t } = useTranslation()
    const navigate = useNavigate()


    return (
        <>
        
            <div style={{ backgroundColor: '#f5f5f5' }} >
                <WrapperSection>
                    <Box sx={{ width: '100%' }}>
                        <HeaderSection nameSection={t("LaunchingSoon")} path={'launching-soon'} pointer={'pointer'} length={tableData?.length === 0 ? t("NoResults") : tableData?.length} />
                        {isTableDataLoading ? (
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
                                <CircularProgress />
                            </Box>
                        ) : (
                        <>
                                    <MultiItemSlider>
                                        {tableData?.map(res =>
                                            <Box key={res?.id} sx={{ my: 2 }}>
                                                <CardCompound
                                                    img={res?.main_image?.file}
                                                    name={res?.name}
                                                    address={res?.address}
                                                    price={res?.end_price}
                                                    whatsapp={res?.whatsapp}
                                                    phone_number={res?.phone_number}
                                                    id={res?.slug}
                                                />
                                            </Box>
                                        )}
                                    </MultiItemSlider>
                        </>
                        )}
                        <Box sx={{ width: '100%', textAlign: 'center' }} >
                            <Button
                                endIcon={lng === 'en' ? <ArrowForwardIcon /> : <ArrowBackIcon />}
                                onClick={() => navigate('launching-soon')}
                                sx={{
                                    background: theme.palette.primary.text,
                                    color: theme.palette.secondary.main, fontWeight: '600', textTransform: 'capitalize', padding: '5px 16px', border: `0.8px solid ${theme.palette.secondary.main}`, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.20)", ':hover': { background: theme.palette.primary.main, color: theme.palette.primary.text, border: `0.8px solid ${theme.palette.primary.main}` }, width: '175px', gap: 1
                                }} >
                                {t("Explore.btn")}
                            </Button>
                        </Box>
                    </Box>
                </WrapperSection>
            </div >
        </>
    )
}

export default LaunchingSoon