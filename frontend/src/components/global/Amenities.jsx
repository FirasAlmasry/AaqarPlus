// Amenities.js

import React from 'react';
import { Box, CardMedia, Collapse, IconButton } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Amenities = ({ displayedAmenities, allAmenities, showAll, handleToggleShow, url, icon }) => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {displayedAmenities?.map((res) => (
                <Box key={res?.name} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CardMedia
                    loading='lazy'
                        alt={res?.name}
                        component={'img'}
                        src={res?.icon ? `${url}${res?.icon}` : icon}
                        sx={{ width: '18px', height: '18px' }}
                    />
                    {res?.name}
                </Box>
            ))}
            <Collapse in={showAll} timeout="auto" unmountOnExit>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {allAmenities?.map((res) => (
                        <Box key={res?.name} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CardMedia
                            loading='lazy'
                                alt={res?.name}
                                component={'img'}
                                src={res?.icon ? `${url}${res?.icon}` : icon}
                                sx={{ width: '18px', height: '18px' }}
                            />
                            {res?.name}
                        </Box>
                    ))}
                </Box>
            </Collapse>
            {allAmenities?.length > 3 && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginTop: 1 }}>
                    <IconButton onClick={handleToggleShow}>
                        {showAll ? <ExpandLessIcon /> : <MoreHorizIcon />}
                    </IconButton>
                </Box>
            )}
        </Box>
    );
};

export default Amenities;
