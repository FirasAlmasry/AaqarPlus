import React from 'react';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { Button, CardMedia, Typography } from '@mui/material';
import i18next from 'i18next';
import arIcon from './../../assets/Icon material-language.png'
export default function BasicSelect() {

    const { i18n } = useTranslation();
    let lng = i18next.language;

    const toggleLanguage = () => {
        const otherLng = lng === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(otherLng);
    };


    return (
        <div>
            <Box>
                <Button onClick={toggleLanguage} sx={{ border:'1px solid #386387', backgroundColor: 'transparent' }} >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexDirection: 'row-reverse' }} >
                        <CardMedia
                            component={'img'}
                            src={arIcon}
                            sx={{ width: '20px' }}
                        />
                            <Typography color={'primary.main'} >{lng === 'en' ? 'En' : 'Ar'}</Typography>
                    </Box> 
                    </Button>
            </Box>
        </div>
    );
}