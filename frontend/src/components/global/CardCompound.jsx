import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import whats from './../../assets/icons/Icon awesome-whatsapp.png'
import phone from './../../assets/icons/Icon feather-phone.png'
import Btn from './Btn';
import i18next from 'i18next';
const CardCompound = ({ img, Align, name, address, month, years, price, whatsapp, phone_number, id, }) => {
     let lng = i18next.language 
    return (
        <>
            <Card sx={{ maxWidth: '100%', my: 1, mx: { md: 1, xs: 0 }, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.20)", }}>
                <CardMedia
                    sx={{ height: 240, backgroundSize: '100% 100%' }}
                    component={'img'}
                    loading='lazy'
                    src={img}
                    title="green iguana"
                />
                <CardContent sx={{ textAlign: Align, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', gap: 1, width: '100%' }} >
                        <Typography gutterBottom variant="body2" component="div" color={'primary.main'} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }} >
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div" color={'secondary.main'} sx={{ textTransform: 'uppercase', fontWeight: '500' }} >
                            {address}
                        </Typography>
                        {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><Typography>{month} Monthly</Typography> / <Typography>{years} years</Typography></Box> */}
                        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'space-between' }}>
                            <Typography>{parseFloat(price).toLocaleString()} {price.split(' ')[1]}</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Box sx={{ borderRadius: '50%', background: '#E6E3DE' }} >
                                    <a href={`whatsapp://send?phone=${whatsapp}`} target="_blank" rel="noopener noreferrer">
                                        <CardMedia alt='image' loading='lazy' component={'img'} src={whats} sx={{ m: 1, width: '15px', height: '15px', objectFit: 'contain' }} />
                                    </a>
                                </Box>
                                <Box sx={{ borderRadius: '50%', background: '#E6E3DE' }} >
                                    <a href={`tel:${phone_number}`} target="_blank" rel="noopener noreferrer">
                                        <CardMedia alt='image' loading='lazy' component={'img'} src={phone} sx={{ m: 1, width: '15px', height: '15px', objectFit: 'contain' }} />
                                    </a>
                                </Box>
                            </Box>
                        </Box>
                        <Btn text={lng === 'en' ? 'See Details' :'المزيد'} path={`/compound/${id}`} />
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default CardCompound