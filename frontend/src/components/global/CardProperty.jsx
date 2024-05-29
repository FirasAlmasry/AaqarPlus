import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ic1 from './../../assets/icons/beadroom.png'
import ic2 from './../../assets/icons/bathroom.png'
import ic3 from './../../assets/icons/hausearea.png'
import fiv from './../../assets/icons/share.png'
// import heart from './../../assets/icons/heart.png'
import mark from './../../assets/icons/Icon feather-bookmark.png'
import whats from './../../assets/icons/Icon awesome-whatsapp.png'
import phone from './../../assets/icons/Icon feather-phone.png'
// import Floor from './../../assets/icons/blueprint.png'

import Btn from './Btn';
import i18next from 'i18next';
import theme from '../../util/theme';
import { useState } from 'react';
import Share from '../Share/Share';
import { useLocation } from 'react-router-dom';
const CardProperty = ({ img, Align, name, address, num1, num2, num3, num4, month, years, price, is_favorite, whatsapp, phone_number, id, agent_id = '000' }) => {
    let lng = i18next.language
    const [show, setShow] = useState(false)
    React.useEffect(() => {
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
    const location = useLocation();
    let path = location.pathname.split('/')[1]
    let isHome = path === ''
    return (
        <>
            <Card sx={{ maxWidth: '100%', my: 1,mx:{md:1,xs:0}, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.20)", height:'32rem' }}>
                {
                    img &&
                    <CardMedia
                    // component={'img'}
                    //     sx={{ height: 250, objectFit:'fill' }}
                        sx={{ height: 250, backgroundSize: 'cover' }}
                        image={img}
                        // src={img}
                        title="green iguana"
                    />
                }
                <CardContent sx={{ textAlign: Align, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', gap: 1, width: '75%' }} >
                        {
                            name &&
                            <Typography gutterBottom variant="body2" component="div" color={'primary.main'} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }} >
                                {`${name?.slice(0, 25)}`}
                            </Typography>
                        }
                        {
                            address &&
                            <Typography gutterBottom variant="body2" component="div" color={'secondary.main'} sx={{ textTransform: 'uppercase', fontWeight: '500' }} >
                                {`${address?.slice(0, 25)}`}
                            </Typography>
                        }
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', gap: 1 }} >
                            {
                                num1 && !num1?.startsWith('0') &&
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#CACACA' }}>
                                    <CardMedia alt="image" component={'img'} src={ic1} sx={{ width: '24px', height: '24px', objectFit:'fill' }} />
                                    {num1}
                                </Box>
                            }
                            {
                                num2 && !num2?.startsWith('0') &&
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#CACACA' }}>
                                    <CardMedia alt="image" component={'img'} src={ic2} sx={{ width: '24px', height: '24px', objectFit:'fill' }} />
                                    {num2}
                                </Box>
                            }
                            {
                                num3 && !num3?.startsWith('0') &&
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#CACACA' }}>
                                    <CardMedia alt="image" component={'img'} src={ic3} sx={{ width: '24px', height: '24px', objectFit:'fill' }} />
                                    {num3}
                                </Box>
                            }
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                            {month && !month?.startsWith('0') && (
                                <Typography>{month} Monthly /</Typography>
                            )}{years && !years?.startsWith('0') && <Typography>{years} years</Typography>}
                        </Box>
                        {/* {price && !price?.startsWith('0') && <Typography>{price}</Typography>} */}
                        {price && !price?.startsWith('0') && (
                            <Typography>
                                {parseFloat(price).toLocaleString()} {price.split(' ')[1]}
                            </Typography>
                        )}

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: 1 }} >
                            <Btn text={lng === 'en' ? 'Details' : 'التفاصيل'}
                                path={`/property/${id}`} />
                                {agent_id && <Btn text={`ag.${agent_id}`} bg={'transparent'} color={'#062371'} borderColor={theme.palette.primary.main} />}
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: 2 }} >
                        <Box sx={{ borderRadius: '50%', background: '#E6E3DE' }} >
                            <CardMedia alt="image" component={'img'} src={mark} sx={{ m: 1, width: '15px', height: '15px', objectFit: 'contain' }} />
                        </Box>
                        <Box sx={{ borderRadius: '50%', background: '#E6E3DE', cursor: 'pointer' }} >
                            <CardMedia alt="image" component={'img'} src={fiv} sx={{ m: 1, width: '15px', height: '15px', objectFit: 'contain' }} onClick={() => setShow(true)} />
                            <Share show={show} isHome={isHome} name={name} id={id} />
                        </Box>
                        <Box sx={{ borderRadius: '50%', background: '#E6E3DE' }} >
                            <a href={`whatsapp://send?phone=${whatsapp}`} target="_blank" rel="noopener noreferrer">
                                <CardMedia alt="image" component={'img'} src={whats} sx={{ m: 1, width: '15px', height: '15px', objectFit: 'contain' }} />
                            </a>
                        </Box>
                        <Box sx={{ borderRadius: '50%', background: '#E6E3DE' }} >
                            <a href={`tel:${phone_number}`} target="_blank" rel="noopener noreferrer">
                                <CardMedia alt="image" component={'img'} src={phone} sx={{ m: 1, width: '15px', height: '15px', objectFit: 'contain' }} />
                            </a>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default CardProperty