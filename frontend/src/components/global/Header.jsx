import React from 'react'
import img from './../../assets/header/secHead.png'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@emotion/react';
const Header = ({title}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <Box position={'relative'} sx={{ backgroundImage: `url(${img})`,
                height: { md: '25rem' ,xs:'15rem'}, display: 'flex', alignItems: 'center',
                backgroundSize: '100% 100%', mb: '5rem', position: 'relative', }} >
                <div className="overlay">
                    {title && 
                    <Box sx={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", background: '#FFF', borderRadius: '12px', p: 2, height: {md:'50px',xs:'50px'}, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: { md: '-8%',xs:'-15%' }, transform:'translateY(-25%)' }} >
                        <Typography textAlign={'center'} color={'secondary.main'} variant={isMobile ? 'h6' :'h5'} >
                        {title}
                    </Typography>
                </Box>
                    }
                </div>
            </Box>
        </>
    )
}

export default Header