import React from 'react'
import { Box, Typography } from '@mui/material'
import Btn from './Btn'
import i18next from 'i18next'
const Details = ({ title, startPrice, endPrice, address, whatsapp, phone_number, children }) => {
    let lng = i18next.language 
    return (
        <>
            <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
                <Typography color={'primary.main'} variant='h6'>{title}</Typography>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Typography color={'secondary.main'} display={'inline'} >Price : {startPrice}</Typography>
                    <span style={{ color: '#7A7A7A' }}>Max Price {endPrice}</span>
                </Box>
                <Typography color={'primary.main'} variant='h6'>{address}</Typography>
                <Typography color={'#000'} variant='h6'>Amenities</Typography>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    {children}
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }} >
                    <a href={`tel:${whatsapp}`} target="_blank" rel="noopener noreferrer">
                        <Btn bg={`#088D2B`} text={lng === 'en' ? 'Whatsapp': 'واتس اب'} />
                    </a>
                    <a href={`tel:${phone_number}`} target="_blank" rel="noopener noreferrer">
                        <Btn bg={`#E00201`} text={lng === 'en' ? 'Call Us': 'اتصل بنا'} />
                    </a>
                </Box>
            </Box>
        </>
    )
}

export default Details