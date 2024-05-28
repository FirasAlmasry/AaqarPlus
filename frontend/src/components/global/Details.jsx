import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import Btn from './Btn'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import Share from '../Share/Share'
const Details = ({ title, refNumber, devName, startPrice, endPrice, address, finishing, whatsapp, phone_number, children }) => {
    let lng = i18next.language
    const { t } = useTranslation()
    const [show, setShow] = useState(false)
    useEffect(() => {
        const handleClickOutside = (event) => {
            // إعادة الـ 'show' للقيمة الافتراضية إذا تم النقر خارج العنصر
            if (event.target.closest('.icon_share') === null) {
                setShow(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    let url = window.location.href
    const encodedText = encodeURIComponent(` ${url} -- مرحبا! 
أود الحصول علي المزيد من المعلومات بخصوص هذا الاعلان. `);
    // const encodedText = encodeURIComponent(`name unit ${title} and ref number ${refNumber}`);

    return (
        <>
            <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column', mx: 4 }}>
                <Typography color={'primary.main'} variant='h6'>{title}</Typography>
                <Typography color={'primary.main'} variant='h6'>{devName}</Typography>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Typography color={'secondary.main'} display={'inline'} >{t("Price")} : {parseFloat(startPrice).toLocaleString()} {startPrice?.split(' ')[1]}
                    {/* {startPrice} */}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <span style={{ color: '#7A7A7A' }}>{t("MaxPrice")} {parseFloat(endPrice).toLocaleString()} {endPrice?.split(' ')[1]}</span>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Typography color={'primary.main'} variant='h6'>{t("address")}</Typography>
                    <Typography color={'secondary.supMain'}>{address}</Typography>
                </Box>
                {finishing && <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Typography color={'primary.main'} variant='h6'>{lng === 'en' ? 'Finishing' : "التشطيب"}</Typography>
                    <Typography color={'secondary.supMain'}>{finishing}</Typography>
                </Box>}
                <Typography color={'primary.main'} variant='h6' textAlign={'left'}>{t("Amenities")}</Typography>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                    {children}
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap', position: 'relative' }} >
                    {whatsapp &&
                        <a href={`whatsapp://send?phone=${whatsapp}&text=${encodedText}`} target="_blank" rel="noopener noreferrer">
                            <Btn bg={`#088D2B`} text={lng === 'en' ? 'Whatsapp' : 'واتس اب'} />
                        </a>
                    }
                    {phone_number &&
                        <a href={`tel:${phone_number}`} target="_blank" rel="noopener noreferrer">
                            <Btn bg={`#E00201`} text={lng === 'en' ? 'Call Us' : 'اتصل بنا'} />
                        </a>
                    }
                    <Box onClick={() => setShow(true)} >
                        <Btn bg={`#062371`} text={lng === 'en' ? 'Share' : 'مشاركة'} />
                        <Share show={show} name={title} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Details