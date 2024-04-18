import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Btn from './Btn';
const CardDevelopers = ({ img, Align, title, length, id }) => (
    <Box sx={{ m: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <CardMedia
            sx={{ height: 250, backgroundSize: '100% 100%', width: '100%', borderRadius: '16px', }}
                image={img}
                title="green iguana" />
            <Box sx={{ p: 1, backgroundColor: '#fff', borderRadius: '16px', mt: '-2rem', ml: '-2rem', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", display: 'flex', justifyContent: 'space-between', alignItems: 'center', width:'100%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography gutterBottom color={'primary.main'} component="div" sx={{ mb: 0 }}>
                        {title}
                    </Typography>
                    <Typography color={'secondary.supMain'}>
                        {length} Compounds
                    </Typography>
                </Box>
            <Btn text='See Details' path={`/developer/${id}`} />
            </Box>
    </Box>
)

export default CardDevelopers