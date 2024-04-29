import { Box } from '@mui/material'
import React from 'react'
import HeroText from './HeroText'
import img from './../../assets/header/aerial-photography-beautiful-coastline-sanya.jpg'
import { useTranslation } from 'react-i18next'
const Header = () => {
    const { t } = useTranslation()
    return (
        <>
            <Box position={'relative'} sx={{ backgroundImage: `url(${img})`, height: {md:'40rem',xs:'30rem'}, display: 'flex', alignItems: 'center', backgroundSize: '100% 100%', mb: 2, position: 'relative', backgroundAttachment: 'fixed' }} >
                <div className="overlay"></div>
                <HeroText title={t("Hero.title")} desc={t("Hero.desc")} />
            </Box>
        </>
    )
}

export default Header