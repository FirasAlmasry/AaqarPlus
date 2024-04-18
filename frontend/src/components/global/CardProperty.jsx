import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ic1 from './../../assets/icons/Icon ionic-ios-book.png'
import ic2 from './../../assets/icons/Icon map-grocery-or-supermarket.png'
import ic3 from './../../assets/icons/Icon simple-sitepoint.png'
import fiv from './../../assets/icons/Icon feather-heart.png'
import heart from './../../assets/icons/heart.png'
import mark from './../../assets/icons/Icon feather-bookmark.png'
import whats from './../../assets/icons/Icon awesome-whatsapp.png'
import phone from './../../assets/icons/Icon feather-phone.png'
import Btn from './Btn';
const CardProperty = ({ img, Align, name, address, num1, num2, num3, month, years, price, is_favorite, whatsapp, phone_number, id }) => {
    return (
        <>
            <Card sx={{ maxWidth: '100%', m: 1, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.20)", }}>
                <CardMedia
                    sx={{ height: 250, backgroundSize: '100% 100%' }}
                    image={img}
                    title="green iguana"
                />
                <CardContent sx={{ textAlign: Align, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', gap: 1 }} >
                        <Typography gutterBottom variant="body2" component="div" color={'primary.main'} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }} >
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div" color={'secondary.main'} sx={{ textTransform: 'uppercase', fontWeight: '500' }} >
                            {address}
                        </Typography>
                        <Box sx={{ display:'flex', alignItems:'center', justifyContent:'space-evenly', gap:1 }} >
                            <Box sx={{ display:'flex', alignItems:'center', gap:1, color:'#CACACA' }}>
                                <CardMedia component={'img'} src={ic1} sx={{ width:'18px', height:'18px' }} />
                                {num1}
                            </Box>
                            <Box sx={{ display:'flex', alignItems:'center', gap:1, color:'#CACACA' }}>
                                <CardMedia component={'img'} src={ic2} sx={{ width:'18px', height:'18px' }} />
                                {num2}
                            </Box>
                            <Box sx={{ display:'flex', alignItems:'center', gap:1, color:'#CACACA' }}>
                                <CardMedia component={'img'} src={ic3} sx={{ width:'18px', height:'18px' }} />
                                {num3}
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography>{month} Monthly</Typography> / <Typography>{years} years</Typography>
                        </Box>
                        <Typography>{price}</Typography>
                        <Btn text={'See Details'} path={`/property/${id}`} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: 2 }} >
                        <Box sx={{ borderRadius:'50%', background:'#E6E3DE'  }} >
                            <CardMedia component={'img'} src={is_favorite ? heart : fiv} sx={{ m:1, width:'15px', height:'15px', objectFit:'contain' }} />
                        </Box>
                        <Box sx={{ borderRadius:'50%', background:'#E6E3DE'  }} >
                            <CardMedia component={'img'} src={mark} sx={{ m:1, width:'15px', height:'15px', objectFit:'contain' }} />
                        </Box>
                        <Box sx={{ borderRadius: '50%', background: '#E6E3DE' }} >
                            <a href={`tel:${whatsapp}`} target="_blank" rel="noopener noreferrer">
                                <CardMedia component={'img'} src={whats} sx={{ m: 1, width: '15px', height: '15px', objectFit: 'contain' }} />
                            </a>
                        </Box>
                        <Box sx={{ borderRadius: '50%', background: '#E6E3DE' }} >
                            <a href={`tel:${phone_number}`} target="_blank" rel="noopener noreferrer">
                                <CardMedia component={'img'} src={phone} sx={{ m: 1, width: '15px', height: '15px', objectFit: 'contain' }} />
                            </a>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default CardProperty