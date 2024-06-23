import React from 'react'
import Drawer from "@mui/material/Drawer";
import i18next from 'i18next';
import { Box, CardMedia } from '@mui/material';
// import Slider from '../global/Slider';
// import ImageGallery from "react-image-gallery";

import CloseIcon from '@mui/icons-material/Close';
import Slider from '../global/Slider';
const BoxDrawer = ({ setDrawer, drawer, tableData, selectedBox }) => {
    const url = 'https://aqarbackend.revampbrands.com/storage/'
    let lng = i18next.language
    const extractSrcFromIframe = (iframeText) => {
        const regex = /src="([^"]+)"/;
        const match = regex.exec(iframeText);
        if (match && match.length > 1) {
            return match[1]; // يحتوي match[1] على قيمة src
        } else {
            return null; // في حالة عدم العثور على src أو في حالة الخطأ
        }
    };
    const renderMedia = (link, type) => {
        if (type === 'IMAGE') {
            return (
                <CardMedia
                    src={url + link}
                    component="img"
                    alt="image"
                    loading='lazy'
                    sx={{
                        height: '400px',
                        borderRadius: '18px',
                        backgroundSize: '100% 100%',
                        objectFit: 'contain',
                        width: { md: '100%', xs: '100%' }
                    }}
                />
            );
        } else if (type === 'VIDEO') {
            return (
                <video controls style={{ height: '400px', borderRadius: '18px', width: '100%', position: 'relative', zIndex: 99 }} autoPlay >
                    <source src={url + link} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            );
        }
    };
    const src = extractSrcFromIframe(tableData?.url_location);

    return (
        <>
            <Drawer
                anchor={lng === 'en' ? 'left' : 'right'}
                open={drawer}
                onClose={() => setDrawer(false)}
                sx={{
                    '.MuiDrawer-paper': {
                        height: '100% !important ',
                        borderBottomRightRadius: '16px',
                        overflow: 'hidden',
                        width: { md: '40vw', xs:'80vw'},
                        px:3
                    },
                    position: 'relative',
                }}
            >
                <CloseIcon onClick={() => setDrawer(false)} sx={{ position: 'absolute', right: '2rem', top: '2rem', zIndex:99,  backgroundColor:'#fff', color:'#000'  }} />
                <Box sx={{ width: '100%', height: '100%', margin:'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {selectedBox === 'image_floor_plan' &&
                        <CardMedia loading='lazy' alt="green iguana" component={'img'}
                            src={url + tableData?.image_floor_plan}
                            sx={{ objectFit: 'contain', }}
                        />
                    }
                    {selectedBox === 'master_plan' &&
                        <CardMedia loading='lazy' alt="green iguana" component={'img'}
                            src={url + tableData?.master_plan}
                        sx={{objectFit: 'contain', }}
                        />
                    }
                    {selectedBox === 'files' &&
                        <Slider nav='true'>
                            {tableData?.files?.map(img => renderMedia(img?.file, img?.type))}
                            {/* {tableData?.files?.map(img =>
                                <CardMedia key={img?.id} src={url + img?.file}
                                    component="img"
                                    height="auto"
                                    alt="green iguana"
                                    sx={{
                                        height: '600px',
                                        borderRadius: '18px',
                                        objectFit: 'contain',
                                        width: { md: '100%', xs: '100%' }
                                    }} />
                            )} */}
                        </Slider>
                    }
                    {selectedBox === 'url_location' &&
                        <iframe src={src} width="100%" height="100%" title={'test'} style={{ border: 0, marginTop: '16px' }}
                            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    }
                </Box>
            </Drawer>
        </>
    )
}

export default BoxDrawer