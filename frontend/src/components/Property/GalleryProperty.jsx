import React, { useState } from 'react'
import HeaderSection from '../global/HeaderSection'
import { Box, CardMedia, Typography } from '@mui/material'
import Floor from './../../assets/icons/blueprint.png'
import Gallery from './../../assets/icons/image-gallery.png'
import Master from './../../assets/icons/master-plan.png'
// import Map from './../../assets/icons/location.png'
import BoxDrawer from './BoxDrawer'

const GalleryProperty = ({ tableData }) => {
    const [selectedBox, setSelectedBox] = useState(null);
    const [drawer, setDrawer] = useState(false);
    const handleBoxClick = (box) => {
        setSelectedBox(box);
        setDrawer(true)
    };

    return (
        <>
            <HeaderSection nameSection={'Details'} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 2, flexWrap: 'wrap' }} >
                {tableData?.image_floor_plan &&
                    <Box sx={{ border: "1px solid #707070", p: 1, m: 1, borderRadius: '8px' }}
                        onClick={() => handleBoxClick('image_floor_plan')}>
                        <Box sx={{ py: 2, px: 4, borderRadius: '8px', backgroundColor: '#F0EFEE', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                            <CardMedia
                                component={'img'}
                                src={Floor}
                                sx={{ objectFit: 'fill', width: '50px' }}
                            />
                            <Typography>Floor</Typography>
                        </Box>
                    </Box>
                }
                {tableData?.files  &&
                    <Box sx={{ border: "1px solid #707070", p: 1, m: 1, borderRadius: '8px' }}
                        onClick={() => handleBoxClick('files')}>
                        <Box sx={{ py: 2, px: 4, borderRadius: '8px', backgroundColor: '#F0EFEE', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                            <CardMedia
                                component={'img'}
                                src={Gallery}
                                sx={{ objectFit: 'fill', width: '50px' }}
                            />
                            <Typography>Gallery</Typography>
                        </Box>
                    </Box>
                }
                {tableData?.master_plan &&
                    <Box sx={{ border: "1px solid #707070", p: 1, m: 1, borderRadius: '8px' }}
                        onClick={() => handleBoxClick('master_plan')}>
                        <Box sx={{ py: 2, px: 4, borderRadius: '8px', backgroundColor: '#F0EFEE', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                            <CardMedia
                                component={'img'}
                                src={Master}
                                sx={{ objectFit: 'fill', width: '50px' }}
                            />
                            <Typography>Master</Typography>
                        </Box>
                    </Box>
                }
                {/* {tableData?.url_location &&
                    <Box sx={{ border: "1px solid #707070", p: 1, m: 1, borderRadius: '8px' }}
                        onClick={() => handleBoxClick('url_location')}>
                        <Box sx={{ py: 2, px: 4, borderRadius: '8px', backgroundColor: '#F0EFEE', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                            <CardMedia
                                component={'img'}
                                src={Map}
                                sx={{ objectFit: 'fill', width: '50px' }}
                            />
                            <Typography>View Map</Typography>
                        </Box>
                    </Box>
                } */}
            </Box>
            <BoxDrawer drawer={drawer} setDrawer={setDrawer} tableData={tableData}
                selectedBox={selectedBox} />
        </>
    )
}

export default GalleryProperty