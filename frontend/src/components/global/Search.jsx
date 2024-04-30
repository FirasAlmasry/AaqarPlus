import { Box, MenuItem, Button } from '@mui/material'
import React, { useState } from 'react'
import MenuItems from '../NavBar/MenuItems'
import Btn from './Btn'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'


const Search = () => {
    // const isSmallScreen = useMediaQuery('(max-width:600px)');
    // let lng = i18next.language
    // const [idTour, setIdTour] = useState(1)
    // const [Tour, setTour] = useState(idTour);
    // const [chunkIndex, setChunkIndex] = useState(0);


    // function handleIdTour(id) {
    //     setIdTour(id)
    //     setChunkIndex(0);
    // }

    // useEffect(() => {

    //     const foundTour = Tours.find((Tour) => Tour.id === Number(idTour));

    //     setTour(foundTour);
    // }, [idTour]);

    const { t } = useTranslation()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }} > 
                <Box sx={{ display: 'flex', gap: { md: '5%', xs: 1 }, mb: '-1px', mt: 1, flexWrap: 'nowrap', justifyContent: 'center' }}
                    size="large" aria-label="large button group">
                    <Button
                        sx={{
                            borderRadius: '8px 8px 0 0', backgroundColor: '#FFF',
                            '&:hover': { backgroundColor: '#FFF' },
                            width: '150px', py: 1.5, px: 4, fontWeight: 'bold'
                        }} >{'Sale '}</Button>
                    <Button
                        sx={{
                            borderRadius: '8px 8px 0 0', backgroundColor: 'rgba(255,255,255, 75%)',
                            '&:hover': { backgroundColor: '#FFF' },
                            width: '150px', py: 1.5, px: 4, fontWeight: 'bold'
                        }} >{'Rent '}</Button>
                    <Button
                        sx={{
                            borderRadius: '8px 8px 0 0', backgroundColor: 'rgba(255,255,255, 75%)',
                            '&:hover': { backgroundColor: '#FFF' },
                            width: '150px', py: 1.5, px: 4, fontWeight: 'bold'
                        }} >{'Invest'}</Button>
                </Box>
                <Box sx={{ py: 4, px: 2, boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", background: '#FFF', borderRadius: { md: '8px',xs:0 }, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { md: 'row', xs: 'column' },gap:1 }} >
                    <Box sx={{ mx: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1, flexDirection: { md: 'row', xs: 'column' }, width: '100%' }} >
                        <Box sx={{
                            width: { md: '35%', xs: '100%' },
                            px: 2,
                            border: '0.5px solid #707070', borderRadius: '8px', py: 1
                        }} >
                            <MenuItems name={t("UnitType")} handleClick={handleClick} anchorEl={anchorEl} open={open} handleClose={handleClose} wid={400} >
                                <Link
                                    to={'/'}
                                    style={{ textTransform: 'capitalize', }}
                                    className="link">
                                    <MenuItem onClick={handleClose} disableRipple>
                                        Unit1
                                    </MenuItem>
                                </Link>
                                <Link
                                    to={'/'}
                                    style={{ textTransform: 'capitalize', }}
                                    className="link">
                                    <MenuItem onClick={handleClose} disableRipple>
                                        Unit2
                                    </MenuItem>
                                </Link>
                                <Link
                                    to={'/'}
                                    style={{ textTransform: 'capitalize', }}
                                    className="link">
                                    <MenuItem onClick={handleClose} disableRipple>
                                        Unit3
                                    </MenuItem>
                                </Link>
                            </MenuItems>
                        </Box>
                        <Box sx={{
                            width: { md: '35%', xs: '100%' },
                            px: 2,
                            border: '0.5px solid #707070', borderRadius: '8px', py: 1
                        }} >
                            <MenuItems name={t("search")}
                                handleClick={handleClick}
                                anchorEl={anchorEl}
                                open={open}
                                handleClose={handleClose} wid={400}>
                                <Link
                                    to={'/'}
                                    style={{ textTransform: 'capitalize', }}
                                    className="link">
                                    <MenuItem onClick={handleClose} disableRipple>
                                        Unit1
                                    </MenuItem>
                                </Link>
                                <Link
                                    to={'/'}
                                    style={{ textTransform: 'capitalize', }}
                                    className="link">
                                    <MenuItem onClick={handleClose} disableRipple>
                                        Unit2
                                    </MenuItem>
                                </Link>
                                <Link
                                    to={'/'}
                                    style={{ textTransform: 'capitalize', }}
                                    className="link">
                                    <MenuItem onClick={handleClose} disableRipple>
                                        Unit3
                                    </MenuItem>
                                </Link>
                            </MenuItems>
                        </Box>
                        <Box sx={{
                            width: { md: '35%', xs: '100%' },
                            px: 2,
                            border: '0.5px solid #707070', borderRadius: '8px', py: 1
                        }} >
                            <MenuItems name={t("MaxPrice")}
                                handleClick={handleClick}
                                anchorEl={anchorEl}
                                open={open}
                                handleClose={handleClose} wid={400}>
                                <Link
                                    to={'/'}
                                    style={{ textTransform: 'capitalize', }}
                                    className="link">
                                    <MenuItem onClick={handleClose} disableRipple>
                                        Unit1
                                    </MenuItem>
                                </Link>
                                <Link
                                    to={'/'}
                                    style={{ textTransform: 'capitalize', }}
                                    className="link">
                                    <MenuItem onClick={handleClose} disableRipple>
                                        Unit2
                                    </MenuItem>
                                </Link>
                                <Link
                                    to={'/'}
                                    style={{ textTransform: 'capitalize', }}
                                    className="link">
                                    <MenuItem onClick={handleClose} disableRipple>
                                        Unit3
                                    </MenuItem>
                                </Link>
                            </MenuItems>
                        </Box>
                    </Box>
                    <Box sx={{ width: { md: 'auto', xs: '100%' } }} >
                        <Btn text={t('btn')} wid={'100%'} widLa={'150px'} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Search