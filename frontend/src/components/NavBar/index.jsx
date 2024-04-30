import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Container, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavDrawer from "./NavDrawer";
import TransLang from "./TransLang"
import logo from './../../assets/logo.png'
import './Nav.css'
// import theme from './../../util/theme';
// import { Pages } from "../../constants";
import i18next from "i18next";
import Auth from "./Auth";
import MenuItems from "./MenuItems";
import MenuItem from '@mui/material/MenuItem';
import theme from "../../util/theme";
// import Share from "../Share/Share";

function NavBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    let lng = i18next.language
    const [drawer, setDrawer] = useState(false);
    const location = useLocation();
    let path = location.pathname.split('/')[1]
    return (
        <>
            <AppBar position="static" elevation={0}
                style={{
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    padding: "10px",
                    position: path === 'auth' ? 'relative' : 'sticky',
                    top: 0,
                    zIndex: 999,
                    backgroundColor: 'rgba(235, 235, 235, 90%)'
                }}>
                {/* <div className={lng === 'ar' ? "bgC" : "bgCEn"}></div> */}
                <Container maxWidth="100%">
                    <Toolbar disableGutters>
                        <Box
                            sx={{
                                flexGrow: 1,
                                gap: 5,
                                marginInlineStart: 1,
                                display: { md: "flex", xs: "none" },
                                alignItems: "center",
                                justifyContent: 'space-between',
                            }}>
                            <Link
                                to="/"
                                style={{
                                    textDecoration: "none",
                                    marginInlineStart: 8
                                }}>
                                <img src={logo} alt="logo" className="nav-logo" />
                            </Link>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center',
                                    width: '90%'
                                }}>
                                <Link
                                    to={'/'}
                                    style={{ textTransform: 'capitalize', }}
                                    className="link">
                                    {lng === 'en' ? 'Home': 'الرئيسية'}
                                </Link>
                                <Link
                                    to={'/developers'}
                                    style={{ textTransform: 'capitalize', }}
                                    className="link">
                                    {lng === 'en' ? 'developers': 'المطورون'}
                                </Link>
                                <MenuItems name={lng === 'en' ? 'Available Units': "الوحدات المتاحة"} handleClick={handleClick} anchorEl={anchorEl} open={open} handleClose={handleClose} >
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
                                <MenuItems name={lng === 'en' ? 'Top Compounds': "اهم المجمعات السكنية"} handleClick={handleClick} anchorEl={anchorEl} open={open} handleClose={handleClose} >
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
                                <MenuItems name={lng === 'en' ? 'Countries To Invot In': "أستثمر بالخارج"} handleClick={handleClick} anchorEl={anchorEl} open={open} handleClose={handleClose} >
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
                                <Link
                                    to={'/design'}
                                    style={{ textTransform: 'capitalize', }}
                                    className="link">
                                    {lng === 'en' ? 'Internal Designs' : "التصميم الداخلي والديكورات"}
                                </Link>
                                <Link
                                    to={'/blogs'}
                                    style={{ textTransform: 'capitalize', }}
                                    className="link">
                                    {lng === 'en' ? 'Blogs' :"المقالات"}
                                </Link>
                                <Link
                                    to={'/contact-us'}
                                    style={{ textTransform: 'capitalize', }}
                                    className="link">
                                    {lng === 'en' ? 'Contact Us':"اتصل بنا"}
                                </Link>
                                {/* { 
                                    Pages?.map((page, i) => <Link
                                        key={i}
                                        to={page.path}
                                        style={{textTransform: 'capitalize',}}
                                        className="link">
                                        {lng === 'ar' ? page.name : page.name_en} 
                                    </Link>
                                    )}  */}
                                <TransLang />
                                <Auth />
                            </Box>
                        </Box>
                        <Box sx={{ justifyContent: 'space-between', display: 'flex', gap: { md: '65px', xs: 1 }, width: { md: 'fit-content', xs: '100%' }, alignItems: 'center' }} >
                            <Box
                                sx={{
                                    flexGrow: 0,
                                    display: { md: "none", xs: "flex" },
                                    justifyContent: "space-between",
                                    width: "100%",
                                    alignItems: 'center' 
                                }}>
                                <Link
                                    to="/"
                                    style={{
                                        textDecoration: "none",
                                        marginInlineStart: 8
                                    }}>
                                    <img src={logo} alt="logo" className="nav-logo" ></img>
                                </Link>
                                <IconButton onClick={() => setDrawer(true)}>
                                    <MenuIcon sx={{ fontSize: '2rem', color: theme.palette.primary.main }} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <NavDrawer drawer={drawer} setDrawer={setDrawer} />
        </>
    );
}
export default NavBar;
