import React, { useEffect, useState } from 'react'
import { Box, CardMedia, Typography } from '@mui/material'
import Btn from './Btn'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import Share from '../Share/Share'
import ic1 from './../../assets/icons/beadroom.png'
import ic2 from './../../assets/icons/bathroom.png'
import ic3 from './../../assets/icons/hausearea.png'
const Details = ({ title, refNumber, devName, startPrice, endPrice, address, finishing, whatsapp, phone_number, num1, num2, num3, children }) => {
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
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 2 }} >
                    {
                        num1 && !num1?.startsWith('0') &&
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#CACACA' }}>
                            <CardMedia loading='lazy' alt="image" component={'img'} src={ic1} sx={{ width: '26px', height: '26px', objectFit: 'fill' }} />
                            {num1}
                        </Box>
                    }
                    {
                        num2 && !num2?.startsWith('0') &&
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#CACACA' }}>
                            <CardMedia loading='lazy' alt="image" component={'img'} src={ic2} sx={{ width: '26px', height: '26px', objectFit: 'fill' }} />
                            {num2}
                        </Box>
                    }
                    {
                        num3 && !num3?.startsWith('0') &&
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#CACACA' }}>
                            <CardMedia loading='lazy' alt="image" component={'img'} src={ic3} sx={{ width: '26px', height: '26px', objectFit: 'fill' }} />
                            {num3}
                        </Box>
                    }
                </Box>
                <Box sx={{ display:'flex', flexWrap:'wrap', gap:2 }} >
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexGrow:1 }}>
                        <Typography color={'#000'} variant='h6'>{t("Price")}</Typography>
                        <Typography color={'secondary.supMain'}>{parseFloat(startPrice).toLocaleString()} {startPrice?.split(' ')[1]}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexGrow:1 }}>
                        <Typography color={'#000'} variant='h6'>{t("MaxPrice")}</Typography>
                        <Typography color={'secondary.supMain'}>{parseFloat(endPrice).toLocaleString()} {endPrice?.split(' ')[1]}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexGrow:1 }}>
                        <Typography color={'#000'} variant='h6'>{t("address")}</Typography>
                        <Typography color={'secondary.supMain'}>{address}</Typography>
                    </Box>
                    {finishing && <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexGrow:1 }}>
                        <Typography color={'#000'} variant='h6'>{lng === 'en' ? 'Finishing' : "التشطيب"}</Typography>
                        <Typography color={'secondary.supMain'}>{finishing}</Typography>
                    </Box>}
                </Box>
                <Typography color={'#000'} variant='h6'>{t("Amenities")}</Typography>
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
                        <Btn bg={`#fff`} color={'#062371'} borderColor={'#062371'} text={lng === 'en' ? 'Share' : 'مشاركة'} />
                        <Share show={show} name={title} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Details