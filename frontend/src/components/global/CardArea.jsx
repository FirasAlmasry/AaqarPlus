import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Btn from './Btn';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


const CardArea = ({ img, Align, title, color, lengthCompounds, lengthDevelopers, id }) => {

    const {t} = useTranslation()
    let lng = i18next.language
    return (
        <>
            <Card sx={{ maxWidth: '100%', m: 1, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.20)",  }} > 
                <CardMedia
                    sx={{ height: 250, backgroundSize:'100% 100%' }}
                    component={'img'}
                    loading='lazy'
                    src={img}
                    title="green iguana"
                />
                <CardContent sx={{ textAlign: Align, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                    <Box>
                        <Typography gutterBottom variant="body2" component="div" color={'primary.main'} sx={{ textTransform: 'uppercase', fontWeight:'bold', mb:1 }} >
                            {title}
                        </Typography>
                        <Btn text={lng === 'en' ? 'See Details' :'المزيد'} path={`/area/${id}`}/>
                    </Box>
                    <Box>
                        <Typography variant="body2" color={color ? color : 'secondary.supMain'}>
                            {lengthCompounds} {t("compound")}
                        </Typography>
                        <Typography variant="body2" color={color ? color : 'secondary.supMain'}>
                            {lengthDevelopers} {t("Developers")}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default CardArea