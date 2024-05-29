import React from 'react'
import { Box, CardMedia, Typography } from '@mui/material'
const CardFounder = ({ img, dirCol, name, title_job }) => {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: { md: dirCol ,xs:'column'}, alignItems: 'center', justifyContent: 'center', gap:1 }} >
                <CardMedia component={'img'} alt='image' src={img} sx={{ borderRadius: '8px', objectFit:'contain', width:'80%' }} />
                <Typography color={'secondary.main'} variant={'h6'} >
                    {name}
                </Typography>
                <Typography color={'secondary.supMain'} >
                    <div className="desc" dangerouslySetInnerHTML={{ __html: title_job }}></div>
                </Typography>
            </Box>
        </>
    )
}

export default CardFounder