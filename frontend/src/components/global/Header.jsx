import React from 'react'
import img from './../../assets/header/secHead.png'
import { Box, Typography } from '@mui/material'
const Header = ({title}) => {
    return (
        <>
            <Box position={'relative'} sx={{ backgroundImage: `url(${img})`,
                height: '30rem', display: 'flex', alignItems: 'center',
                backgroundSize: '100% 100%', mb: '5rem', position: 'relative', }} >
                <div className="overlay">
                <Box sx={{ background: '#FFF', borderRadius: '50%', p: 2, height: '175px', width: '175px', display:'flex', alignItems:'center', justifyContent:'center', position:'absolute', bottom:'-25%', transform:'translateY(-25%)' }} >
                    <Typography textAlign={'center'} color={'secondary.main'} variant={'h5'} >
                        {title}
                    </Typography>
                </Box>
                </div>
            </Box>
        </>
    )
}

export default Header