import React, { useEffect, useState } from 'react'
import WrapperSection from './WrapperSection'
import { Box, Typography, useMediaQuery } from '@mui/material'
import theme from '../../util/theme'
import Btn from './Btn'
import img from './../../assets/Bennar/11.png'
import { useTheme } from '@emotion/react'
import { useTranslation } from 'react-i18next'
import { useGetBannersQuery } from '../../state/banners'
import i18next from 'i18next'

const BanarButtom = () => {
    const themeM = useTheme();
    const { t } = useTranslation()
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));
    const lng = i18next.language;

    const url = 'https://aqarbackend.revampbrands.com/storage/';
    const { data, isBrandsLoading } = useGetBannersQuery(lng);
    console.log("🚀 ~ BanarTop ~ data:", data);

    const [tableData, setTableData] = useState([]);
    console.log("🚀 ~ BanarTop ~ tableData:", tableData);

    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data?.data);
        }
    }, [data, isBrandsLoading]);

    const mainItems = tableData?.filter(item => item.is_main === 0);
    console.log("🚀 ~ BanarTop ~ mainItems:", mainItems);
    return (
        <>
            <WrapperSection>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '5%', width: '100%', flexWrap: 'wrap' }} >
                    {/* <Box sx={{ flexGrow: 1 }}>
                        <Box position={'relative'} sx={{ backgroundImage: `url(${img})`, justifyContent: 'center', height: '15rem', display: 'flex', alignItems: 'center', backgroundSize: '100% 100%', mb: 2, position: 'relative' }} >
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: '100%', gap: 3, mx: 3 }}  >
                                <Typography variant={isMobile ? 'body1' : 'h5'} color={'secondary.main'} >{t("Bnr.title")}</Typography>
                                <Typography variant={isMobile ? 'body1' : 'body1'} color={'secondary.supMain'} textAlign={'center'}  >{t("Bnr.desc")}</Typography>
                                <Btn bg={theme.palette.primary.text} color={theme.palette.primary.main} text={t("Bnr.btn")} path={'developers'} />
                            </Box>
                        </Box>
                    </Box> */}
                    {mainItems && mainItems.length > 0 && mainItems.map((item, index) => (
                        <Box sx={{ flexGrow: 1 }}>
                            <Box key={index} position={'relative'} sx={{ backgroundImage: `url(${img})`, justifyContent: 'center', height: '15rem', display: 'flex', alignItems: 'center', backgroundSize: '100% 100%', mb: 2, position: 'relative' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: '100%', gap: { md: 3, xs: 1 }, ml: 4 }}>
                                        <Typography variant={isMobile ? 'body1' : 'h5'} color={'secondary.main'}>{item.title}</Typography>
                                        <Typography variant={isMobile ? 'body1' : 'body1'} color={'secondary.supMain'} textAlign={'center'}>
                                            <div className="desc" dangerouslySetInnerHTML={{ __html: item.description }}></div>
                                        </Typography>
                                    <a href={`whatsapp://send?phone=${item.url_link}`} target="_blank" rel="noopener noreferrer"
                                        style={{ backgroundColor: theme.palette.primary.text, color: theme.palette.primary.main, textDecoration:'none', padding:'8px 16px', borderRadius:'8px', fontWeight:'bold' }} >
                                        {item.button_text}
                                    </a>
                                    {/* <Btn bg={theme.palette.primary.text} color={theme.palette.primary.main} text={item.button_text} path={`whatsapp://send?phone=${item.url_link}`} /> */}
                                    </Box>
                            </Box>
                            {/* // href={`whatsapp://send?phone=${whatsapp}`} */}
                        </Box>
                    ))}
                    {/* <Box sx={{ flexGrow: 1 }}>
                        <Box position={'relative'} sx={{ backgroundImage: `url(${img})`, justifyContent: 'center', height: '15rem', display: 'flex', alignItems: 'center', backgroundSize: '100% 100%', mb: 2, position: 'relative' }} >

                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: '100%', gap: 3, mx: 3 }}  >
                                <Typography variant={isMobile ? 'body1' : 'h5'} color={'primary.main'} >{t("aq")}</Typography>
                                <Typography variant={isMobile ? 'body1' : 'body1'} color={'secondary.supMain'} textAlign={'center'}  >{t("Bnr.desc")}</Typography>
                                <Btn bg={theme.palette.primary.text} color={theme.palette.primary.main} text={t("Bnr.btn")} path={'developers'} />
                            </Box>
                        </Box>
                    </Box> */}
                </Box>
            </WrapperSection>
        </>
    )
}

export default BanarButtom