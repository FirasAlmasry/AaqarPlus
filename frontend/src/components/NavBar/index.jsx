import { useEffect, useState } from "react";
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
import i18next from "i18next";
import Auth from "./Auth";
import MenuItems from "./MenuItems";
import MenuItem from '@mui/material/MenuItem';
import theme from "../../util/theme";
import { useGetAreasQuery } from "../../state/areas";
import { useGetCountryQuery } from "../../state/Country";
import { useGetPropertyTypeQuery } from "../../state/PropertyType";






function NavBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setUnits(null);
    };

    const [Units, setUnits] = useState(null);
    const openUnits = Boolean(Units);
    const handleClickUnits = (event) => {
        setUnits(event.currentTarget);
    };

    const handleCloseUnits = () => {
        setUnits(null);
    };

    let lng = i18next.language
    const [drawer, setDrawer] = useState(false);
    const location = useLocation();
    let path = location.pathname.split('/')[1]
    const { data, isBrandsLoading } = useGetPropertyTypeQuery(lng);

    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBrandsLoading) {
            const filteredData = data.data.filter(item => {
                if (lng === 'en') {
                    return item?.name === 'Residential' || item?.name === 'Commercials' || item?.name === 'Administrative' || item?.name === 'medical' || item?.name === 'Vacation Homes';
                } else if (lng === 'ar') {
                    return item?.name === 'سكني' || item?.name === 'تجاري' || item?.name === 'إداري' || item?.name === 'طبي' || item?.name === 'عقارات مصايف';
                }
                return false;
            });
            setTableData(filteredData);
        }
    }, [data, isBrandsLoading, lng])
    // const available = tableData?.filter(res => res?.properties?.length > 0)

    const { data: area, isAryaLoading } = useGetAreasQuery({lng});
    const [AreaData, setAreaData] = useState([]);
    useEffect(() => {
        if (area && !isAryaLoading) {
            setAreaData(area?.data?.data)
        }
    }, [area, AreaData, isAryaLoading])
    const { data: country, isCountryLoading } = useGetCountryQuery(lng);

    const [countryData, setCountryData] = useState([]);
    useEffect(() => {
        if (country && !isCountryLoading) {
            setCountryData(country?.data?.data)
        }
    }, [country, countryData, isCountryLoading])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
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
                                    onClick={() => scrollToTop()}
                                    to={'/'}
                                    style={{ textTransform: 'capitalize', }}
                                    className="link">
                                    {lng === 'en' ? 'Home' : 'الرئيسية'}
                                </Link>
                                {/* <MenuItems name={lng === 'en' ? 'Available Units' : "الوحدات المتاحة"} handleClick={handleClickUnits} anchorEl={Units} open={openUnits} handleClose={handleCloseUnits} >
                                    {
                                        tableData?.map((res) => <Link
                                            to={`/property-type/${res?.id}`}
                                            key={res?.id}
                                            style={{ textTransform: 'capitalize', }}
                                            className="link"> 
                                            <MenuItem onClick={handleClose} disableRipple>
                                                {res?.name}
                                            </MenuItem>
                                        </Link>
                                        )
                                    }
                                </MenuItems> */}
                                <Link
                                    to={'/areas'}
                                    style={{ textTransform: 'capitalize', }}
                                    className="link">
                                    {lng === 'en' ? 'Areas' : "المناطق"}
                                </Link>
                                <MenuItems name={lng === 'en' ? 'Countries To Invest In' : "أستثمر بالخارج"} handleClick={handleClick} anchorEl={anchorEl} open={open} handleClose={handleClose} >
                                    
                                    {
                                        countryData?.map((res) => <Link
                                            to={`/country/${res?.id}`}
                                            key={res?.id}
                                            style={{ textTransform: 'capitalize', }}
                                            className="link">
                                            <MenuItem onClick={handleClose} disableRipple>
                                                {res?.name}
                                            </MenuItem>
                                        </Link>
                                        )
                                    }
                                </MenuItems>
                                <Link
                                    to={'/developers'}
                                    style={{ textTransform: 'capitalize', }}
                                    className="link">
                                    {lng === 'en' ? 'developers' : 'المطورون'}
                                </Link>
                                <Link
                                    to={'/design'}
                                    style={{ textTransform: 'capitalize', }}
                                    className="link">
                                    {lng === 'en' ? 'Interior Designs' : "التصميم الداخلي والديكورات"}
                                </Link>
                                <Link
                                    to={'/blogs'}
                                    style={{ textTransform: 'capitalize', }}
                                    className="link">
                                    {lng === 'en' ? 'Blogs' : "المقالات"}
                                </Link>
                                {/* <Link
                                    to={'/favorites'}
                                    style={{ textTransform: 'capitalize', }}
                                    className="link">
                                    {lng === 'ar' ? 'المفضلة' : "Favorites"}
                                </Link> */}
                                <Link
                                    to={'/contact-us'}
                                    style={{ textTransform: 'capitalize', }}
                                    className="link">
                                    {lng === 'en' ? 'Contact Us' : "اتصل بنا"}
                                </Link>
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
