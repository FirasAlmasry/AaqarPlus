import { Box, Typography } from '@mui/material'
import i18next from 'i18next'
import React from 'react'
import { Link } from 'react-router-dom'

const Route = () => {
    let lng = i18next.language

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { md: 'center', xs:'space-between' }, gap: { md: 6,xs:1 } }} >
            <Link
                to={'/about-us'}
                style={{ textTransform: 'capitalize', color: '#707070', textDecoration: 'none' }}>
               <Typography sx={{ fontSize:{md:'initial', xs:'small'} }}> {lng === 'en' ? 'About' : "نبذة عنا"}</Typography>
            </Link>
            <Link
                to={'/terms'}
                style={{ textTransform: 'capitalize', color: '#707070', textDecoration: 'none' }}>
                <Typography sx={{ fontSize:{md:'initial', xs:'small'} }}>{lng === 'en' ? 'Privacy Policy' : "سياسة الخصوصة"}</Typography>
            </Link>
            <Link
                to={'/how-it-works'}
                style={{ textTransform: 'capitalize', color: '#707070', textDecoration: 'none' }}>
                <Typography sx={{ fontSize:{md:'initial', xs:'small'} }}>{lng === 'en' ? 'How It Works' : "كيفية العمل"}</Typography>
            </Link>
            <Link
                to={'/'}
                style={{ textTransform: 'capitalize', color: '#707070', textDecoration: 'none' }}>
                <Typography sx={{ fontSize:{md:'initial', xs:'small'} }}>{lng === 'en' ? 'Careers' : "كارير"}</Typography>
            </Link>
        </Box>
    )
}

export default Route