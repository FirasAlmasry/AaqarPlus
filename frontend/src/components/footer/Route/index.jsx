import { Box } from '@mui/material'
import i18next from 'i18next'
import React from 'react'
import { Link } from 'react-router-dom'

const Route = () => {
    let lng = i18next.language

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: { md: 6,xs:2 } }} >
            <Link
                to={'/about-us'}
                style={{ textTransform: 'capitalize', color: '#707070', textDecoration: 'none' }}>
                {lng === 'en' ? 'About' : "نبذة عنا"}
            </Link>
            <Link
                to={'/terms'}
                style={{ textTransform: 'capitalize', color: '#707070', textDecoration: 'none' }}>
                {lng === 'en' ? 'Privacy Policy' : "سياسة الخصوصة"}
            </Link>
            <Link
                to={'/how-it-works'}
                style={{ textTransform: 'capitalize', color: '#707070', textDecoration: 'none' }}>
                {lng === 'en' ? 'How It Works' : "كيفية العمل"}
            </Link>
            <Link
                to={'/'}
                style={{ textTransform: 'capitalize', color: '#707070', textDecoration: 'none' }}>
                {lng === 'en' ? 'Carers' : "كارير"}
            </Link>
        </Box>
    )
}

export default Route