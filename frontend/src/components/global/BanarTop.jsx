import { Box, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Btn from './Btn';
import theme from '../../util/theme';
import { useTheme } from '@emotion/react';
// import { useTranslation } from 'react-i18next';
// import img from './../../assets/Bennar/5459403.png';
import WrapperSection from './WrapperSection';
import i18next from 'i18next';
import { useGetBannersQuery } from '../../state/banners';

const BanarTop = () => {
    const themeM = useTheme();
    // const { t } = useTranslation();
    const lng = i18next.language;
    const url = 'https://aqarbackend.revampbrands.com/storage/';
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));
    const { data, isBrandsLoading } = useGetBannersQuery(lng);
    console.log("🚀 ~ BanarTop ~ data:", data);

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data?.data);
        }
    }, [data, isBrandsLoading]);

    const mainItems = tableData?.filter(item => item.is_main === 1);

    return (
        <WrapperSection>
            {mainItems && mainItems.length > 0 && mainItems.map((item, index) => (
                <Box key={index} position={'relative'} sx={{ backgroundImage: `url(${url + item.image_url})`, height: { md: '25rem', xs: '12rem' }, display: 'flex', alignItems: 'center', backgroundSize: '100% 100%', mb: 2, position: 'relative', width: '100%', }}>
                    <div className={lng === 'en' ? "overlayBenner" : "overlayBennerar"}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: { md: 3, xs: 1 }, ml: {md:4,xs:2} }}>
                            <Typography variant={isMobile ? 'body1' : 'h5'} color={'secondary.main'} sx={{ fontWeight:'bold' }}>{item.title}</Typography>
                            <Typography variant={isMobile ? 'body1' : 'body1'} color={'primary.text'} textAlign={'center'}>
                                <div className="desc" dangerouslySetInnerHTML={{ __html: item.description }}></div>
                            </Typography>
                            <Btn bg={theme.palette.primary.text} color={theme.palette.primary.main} text={item.button_text} path={item.url_link} />
                        </Box>
                    </div>
                </Box>
            ))}
        </WrapperSection>
    );
}

export default BanarTop;
