import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
const CardBlogs = ({ img, title, type, date }) => {
    return (
        <Box sx={{ m: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor:'pointer' }}>
            <CardMedia
                sx={{ height: 250, backgroundSize: '100% 100%', width: '100%', borderRadius: '16px', }}
                component={'img'}
                loading='lazy'
                src={img}
                title="green iguana" />
            <Box sx={{ p: 1, backgroundColor: '#fff', borderRadius: '16px', mt: '-2rem', ml: '-2rem', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", display: 'flex', alignItems: 'flex-start', width: '100%', flexDirection: 'column' }}>
                <Typography gutterBottom color={'primary.main'} component="div" sx={{ mb: 0 }}>
                    {title?.slice(0, 25)}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap:2 }}>
                    <Typography color={'secondary.supMain'}>
                        {type}
                    </Typography>
                    <Typography color={'secondary.supMain'}>
                        ,{date}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default CardBlogs