import React from 'react'
import { Box, Typography, Divider, useMediaQuery } from '@mui/material';
import theme from '../../util/theme';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@emotion/react';

const HeaderSection = ({ nameSection, length, mb, pointer, path }) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const themeM = useTheme();
  const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));
  return (
    <>
        <Box sx={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', width:'100%', mb:mb }} >
            <Box>
          <Typography variant={!isMobile ?'h5':'body1'} color={'primary.main'} mb={1} sx={{ cursor: pointer }} onClick={() => navigate(path)} >{nameSection}</Typography>
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