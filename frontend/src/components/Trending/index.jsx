import React, { useEffect, useState } from 'react'
import HeaderSection from '../global/HeaderSection'
import WrapperSection from '../global/WrapperSection';
import i18next from 'i18next';
import { Box, Button, CircularProgress } from '@mui/material';
import MultiItemSlider from '../global/MultiItemSlider';
import { useTranslation } from 'react-i18next';
import theme from '../../util/theme';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useGetCompoundsQuery } from '../../state/compounds';
import CardCompound from '../global/CardCompound';
const Trending = () => {

    let lng = i18next.language
    const { t } = useTranslation()
    const { data, isBrandsLoading } = useGetCompoundsQuery({ lng, trending: 1 });

    const [tableData, setTableData] = useState([]);
    const [isTableDataLoading, setIsTableDataLoading] = useState(true);

    useEffect(() => {
        setIsTableDataLoading(true);
        if (data && !isBrandsLoading) {
            setTableData(data?.data?.data)
            setIsTableDataLoading(false);
        }
    }, [data, tableData, isBrandsLoading])
    const navigate = useNavigate()

    return (
        <>
            <WrapperSection>
                <Box sx={{ width: '100%' }}>
                    <HeaderSection nameSection={t("Trending")} path={'trending'} pointer={'pointer'} length={tableData?.length === 0 ? t("NoResults") : tableData?.length} />
                    {isTableDataLoading ? (
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
                                <CircularProgress />
                            </Box>
                        ) : (
                        <><MultiItemSlider>
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
                    </MultiItemSlider></>
                        )}
                    <Box sx={{ width:'100%', textAlign:'center' }} >
                        <Button
                            endIcon={lng === 'en' ? <ArrowForwardIcon /> : <ArrowBackIcon  />}
                            onClick={() => navigate('trending')}
                            sx={{
                                background: theme.palette.primary.text,
                                color: theme.palette.secondary.main, fontWeight: '600', textTransform: 'capitalize', padding: '5px 16px', border: `0.8px solid ${theme.palette.secondary.main}`, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.20)", ':hover': { background: theme.palette.primary.main, color: theme.palette.primary.text, border: `0.8px solid ${theme.palette.primary.main}` },width:'175px', gap:1
                            }} >
                            {t("Explore.btn")}
                        </Button>
                    </Box>
                {/* <Btn bg={theme.palette.secondary.main} color={theme.palette.primary.text} text={t("Explore.btn")} path={'developers'} /> */}
                </Box>
            </WrapperSection>
        </>
    )
}

export default Trending