import React from 'react'
import { Box, Typography, Divider } from '@mui/material';
import theme from '../../util/theme';
import { useTranslation } from 'react-i18next';

const HeaderSection = ({ nameSection, length, mb }) => {
  const { t } = useTranslation()
  return (
    <>
        <Box sx={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', width:'100%', mb:mb }} >
            <Box>
                <Typography variant={'h5'} color={'primary.main'} mb={1} >{nameSection}</Typography>
                <Divider sx={{ borderColor:theme.palette.secondary.main, borderWidth:'1px', width:'75%', mb:1 }} />
                <Divider sx={{ borderColor:theme.palette.secondary.main, borderWidth:'1px', width:'50%' }} />
            </Box>
            {
              length &&
            <Box>
              <Typography color={'secondary.supMain'} >{length} {t("Results")}</Typography>

              
            </Box>
            }
        </Box>
    </>
  )
}

export default HeaderSection