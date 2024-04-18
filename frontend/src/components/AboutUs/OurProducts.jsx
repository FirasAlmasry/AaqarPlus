import React from 'react'
// import WrapperSection from '../global/WrapperSection'
import { Box, Typography } from '@mui/material'
import img from './../../assets/heading-bg-mask.png'
import HeaderSection from '../global/HeaderSection'
import { useTranslation } from 'react-i18next'
const OurProducts = ({ data }) => {
    const {t} = useTranslation()
    return (
        <>
            <Box sx={{
                backgroundImage: `url(${img})`,
                height: '30rem', display: 'flex',
                backgroundSize: '100% 100%', mb: 2, position: 'relative', zIndex: 9
            }} >
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center', width: '65%', ml: 'auto', mr: '2rem' }}>
                    <Box sx={{ mb: 2 }}>
                        <HeaderSection nameSection={t("OurProducts")} />
                    </Box>
                    <Typography>
                        <div className="desc" dangerouslySetInnerHTML={{ __html: data }}></div>
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default OurProducts