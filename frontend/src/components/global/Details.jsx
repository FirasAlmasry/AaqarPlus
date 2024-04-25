import React from 'react'
import { Box, Typography } from '@mui/material'
import Btn from './Btn'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
const Details = ({ title, startPrice, endPrice, address, finishing, whatsapp, phone_number, children }) => {
    let lng = i18next.language
    const { t } = useTranslation()


    return (
        <>
            <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column', mx: 4 }}>
                <Typography color={'primary.main'} variant='h6'>{title}</Typography>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Typography color={'secondary.main'} display={'inline'} >{t("Price")} : {startPrice}</Typography>
                    {/* <span style={{ color: '#7A7A7A' }}>{t("MaxPrice")} {endPrice}</span> */}
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    {/* <Typography color={'secondary.main'} display={'inline'} >{t("Price")} : {startPrice}</Typography> */}
                    <span style={{ color: '#7A7A7A' }}>{t("MaxPrice")} {endPrice}</span>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Typography color={'primary.main'} variant='h6'>{t("address")}</Typography>
                    <Typography color={'secondary.supMain'}>{address}</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Typography color={'primary.main'} variant='h6'>{lng === 'en' ? 'Finishing' : "التشطيب"}</Typography>
                    <Typography color={'secondary.supMain'}>{finishing}</Typography>
                </Box>
                <Typography color={'#000'} variant='h6' textAlign={'left'}>{t("Amenities")}</Typography>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    {children}
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap:'wrap' }} >
                    <a href={`tel:${whatsapp}`} target="_blank" rel="noopener noreferrer">
                        <Btn bg={`#088D2B`} text={lng === 'en' ? 'Whatsapp' : 'واتس اب'} />
                    </a>
                    <a href={`tel:${phone_number}`} target="_blank" rel="noopener noreferrer">
                        <Btn bg={`#E00201`} text={lng === 'en' ? 'Call Us' : 'اتصل بنا'} />
                    </a>
                    {/* <a href={`tel:${phone_number}`} target="_blank" rel="noopener noreferrer"> */}
                    <Btn bg={`#062371`} text={lng === 'en' ? 'Share' : 'مشاركة'} />
                    {/* </a> */}
                </Box>
            </Box>
        </>
    )
}

export default Details