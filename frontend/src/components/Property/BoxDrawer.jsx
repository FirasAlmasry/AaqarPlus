import React from 'react'
import Drawer from "@mui/material/Drawer";
import i18next from 'i18next';
import { Box, CardMedia } from '@mui/material';
// import Slider from '../global/Slider';
import ImageGallery from "react-image-gallery";

import CloseIcon from '@mui/icons-material/Close';
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

    // استخدم extractSrcFromIframe لاستخراج الـ src من tableData?.url_location
    const src = extractSrcFromIframe(tableData?.url_location);

    /*
    image_floor_plan
files
master_plan
url_location
    */
    const images = tableData?.files?.map(image => ({
        original: `${url}${image?.file}`, // رابط الصورة الأصلي
        thumbnail: `${url}${image?.file}`, // صورة مصغرة (يمكنك استبدالها بالحجم الصغير المطلوب)
        description: image.id.toString(), // وصف اختياري
    }));
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
                        width: '40vw'
                    },
                    position: 'relative',
                }}
            >
                <CloseIcon onClick={() => setDrawer(false)} sx={{ position: 'absolute', right: '2rem', top: '2rem', zIndex:99,  backgroundColor:'#fff', color:'#000'  }} />
                <Box sx={{ width: '100%', height: '100%', margin:'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {selectedBox === 'image_floor_plan' &&
                        <CardMedia component={'img'}
                            src={url + tableData?.image_floor_plan}
                            sx={{ objectFit: 'contain', }}
                        />
                    }
                    {selectedBox === 'master_plan' &&
                        <CardMedia component={'img'}
                            src={url + tableData?.master_plan}
                        sx={{objectFit: 'contain', }}
                        />
                    }
                    {selectedBox === 'files' &&
                    <ImageGallery items={images} 
                            thumbnailPosition='left'
                            autoPlay={true}
                            disableKeyDown={true}
                            disableSwipe={true}
                            disableThumbnailScroll={true}
                            lazyLoad={true}
                            showFullscreenButton={false}
                        />
                        // <Slider nav='true'>
                        //     {tableData?.files?.map(img =>
                        //         <CardMedia key={img?.id} src={url + img?.file}
                        //             component="img"
                        //             height="auto"
                        //             alt="green iguana"
                        //             sx={{
                        //                 height: '600px',
                        //                 borderRadius: '18px',
                        //                 objectFit: 'contain',
                        //                 width: { md: '100%', xs: '100%' }
                        //             }} />
                        //     )}
                        // </Slider>
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