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
import { Pages } from "../../constants";
import i18next from "i18next";
import Auth from "./Auth";

function NavBar() {
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
                    position: path === 'auth' ? 'relative' :'fixed',
                    top:0,
                    zIndex: 999, 
                    backgroundColor:'rgba(235, 235, 235, 90%)'
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
                                justifyContent: 'space-between'
                            }}>
                            <Link
                                to="/"
                                style={{
                                    textDecoration: "none",
                                    marginInlineStart: 8
                                }}>
                                <img src={logo} height={60} alt="logo" className="nav-logo" />
                            </Link>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center',
                                    width: '90%'
                                }}>
                                { 
                                    Pages?.map((page, i) => <Link
                                        key={i}
                                        to={page.path}
                                        style={{
                                            // fontSize: 14,
                                            textTransform: 'capitalize',
                                            // fontWeight: 'bold'
                                        }}
                                        className="link">
                                        {lng === 'ar' ? page.name : page.name_en} 
                                    </Link>
                                    )} 
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
                                }}>
                                <Link
                                    to="/"
                                    style={{
                                        textDecoration: "none",
                                        marginInlineStart: 8
                                    }}>
                                    <img src={logo} height={60} alt="logo" className="nav-logo" ></img>
                                </Link>
                                <IconButton onClick={() => setDrawer(true)}>
                                    <MenuIcon sx={{ fontSize: '3rem', color: '#fff' }} />
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
