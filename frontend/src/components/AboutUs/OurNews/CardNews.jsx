import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const CardNews = ({ img, Align, title, color, data }) => {
    return (
        <>
            <Card sx={{ maxWidth: '100%', m: 1, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.20)", }}>
                <CardMedia
                    sx={{ height: 175 }}
                    image={img}
                    title="green iguana"
                />
                <CardContent sx={{ textAlign: Align, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'column', gap: 1 }} >
                    <Box>
                        <Typography gutterBottom variant="body2" component="div" color={'primary.main'} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }} >
                            {title}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2" color={color ? color : 'secondary.supMain'}>
                            <div className="desc" dangerouslySetInnerHTML={{ __html: data }}></div>
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default CardNews