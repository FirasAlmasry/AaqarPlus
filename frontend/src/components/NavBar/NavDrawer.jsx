import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import TransLang from "./TransLang"
import { Pages, auth } from "../../constants";
import i18next from "i18next";
import { IconButton } from "@mui/material";
import logo from './../../assets/logo.png'
// import { useGetCountryQuery } from "../../state/Country";
// import { useEffect } from "react";
import CountryAccordion from "./CountryAccordion";
// import close from './../../assets/Icon ionic-md-close-circle.png'

export default function NavDrawer({ setDrawer, drawer }) {
    let lng = i18next.language
    // const { data: country, isCountryLoading } = useGetCountryQuery(lng);

    // const [countryData, setCountryData] = React.useState([]);
    // useEffect(() => {
    //     if (country && !isCountryLoading) {
    //         setCountryData(country?.data?.data)
    //     }
    // }, [country, countryData, isCountryLoading])


    // // دالة تقوم بتقديم النصوص بناءً على لغة المستخدم
    // const renderTitle = (lng) => {
    //     return (
    //         <Typography
    //             style={{
    //                 textDecoration: "none",
    //                 fontSize: 14,
    //                 textTransform: 'capitalize',
    //                 fontWeight: 'bold'
    //             }}
    //             className="link">
    //             {lng === 'en' ? 'Countries To Invest In' : "أستثمر بالخارج"}
    //         </Typography>
    //     );
    // }

    // // دالة تقوم بتقديم قائمة العناصر
    // const renderItems = (countryData, setDrawer) => {
    //     return (
    //         <Box sx={{ pl: 2, gap: 1, display: "flex", flexDirection: "column" }}>
    //             {countryData?.map((res) => (
    //                 <Link
    //                     key={res?.id}
    //                     to={`/country/${res?.id}`}
    //                     style={{
    //                         textDecoration: "none",
    //                         fontSize: 13,
    //                         textTransform: 'capitalize',
    //                         fontWeight: 'bold'
    //                     }}
    //                     className="link"
    //                     onClick={() => setDrawer(false)}
    //                 >
    //                     - {res?.name}
    //                 </Link>
    //             ))}
    //         </Box>
    //     );
    // }

    return (
        <div>
            <React.Fragment>
                <Drawer
                    anchor={lng === 'en' ? 'left' : 'right'}
                    open={drawer}
                    onClose={() => setDrawer(false)}
                    sx={{ 
                        '.MuiDrawer-paper': {
                            height: '80% !important ',
                            borderBottomRightRadius: '16px',
                            overflowY: 'auto'
                        }
                    }}
                    >
                    <Box
                        sx={{
                            width: 300,
                            gap: 2,
                            display: "flex",
                            flexDirection: "column",
                            textAlign:  lng === 'en' ? 'left' : 'right',
                            padding: "40px 20px",
                        }}>
                        <Box
                            sx={{
                                flexGrow: 0,
                                display: { md: "none", xs: "flex" },
                                justifyContent: "space-between",
                                width: "100%",
                                alignItems: "center",
                            }}>
                            <Link to="/">
                                <img src={logo} alt="logo" style={{ width:'50%' }} ></img>
                            </Link>
                            <IconButton onClick={() => setDrawer(false)}>
                                {/* <img src={close} style={{ height:'20px' }} alt="close" ></img> */}
                            </IconButton>
                        </Box>
                        {
                            Pages?.slice(0,4)?.map((page, i) => (
                                <Link
                                    key={i}
                                    to={page.path}
                                    style={{
                                        textDecoration: "none",
                                        fontSize: 14,
                                        textTransform: 'capitalize',
                                        fontWeight: 'bold'
                                    }}
                                    className="link"
                                    onClick={() => setDrawer(false)}
                                >
                                    {lng === 'ar' ? page.name : page.name_en}
                                </Link>
                            ))
                        }
                        <CountryAccordion setDrawer={setDrawer} />
                        {/* <Typography 
                            style={{
                                textDecoration: "none",
                                fontSize: 14,
                                textTransform: 'capitalize',
                                fontWeight: 'bold'
                            }} className="link">{lng === 'en' ? 'Countries To Invest In' : "أستثمر بالخارج"}</Typography>
                        <Box sx={{
                            pl: 2, gap: 1,
                            display: "flex",
                            flexDirection: "column",
                            textAlign: lng === 'en' ? 'left' : 'right', }} >
                                {
                                countryData?.map((res) => <Link
                                key={res?.id}
                                    to={`/country/${res?.id}`}
                                style={{
                                    textDecoration: "none",
                                    fontSize: 13,
                                    textTransform: 'capitalize',
                                    fontWeight: 'bold'
                                }}
                                className="link"
                                onClick={() => setDrawer(false)}
                            >
                                    -{res?.name}
                            </Link>
                            )}
                            </Box> */}

                        {
                            Pages?.slice(4)?.map((page, i) => (
                                <Link
                                    key={i}
                                    to={page.path}
                                    style={{
                                        textDecoration: "none",
                                        fontSize: 14,
                                        textTransform: 'capitalize',
                                        fontWeight: 'bold'
                                    }}
                                    className="link"
                                    onClick={() => setDrawer(false)}
                                >
                                    {lng === 'ar' ? page.name : page.name_en}
                                </Link>
                            ))
                        }
                        {
                            auth?.map((page, i) => (
                                <Link
                                    key={i}
                                    to={page.path}
                                    style={{
                                        textDecoration: "none",
                                        fontSize: 14,
                                        textTransform: 'capitalize',
                                        fontWeight: 'bold'
                                    }}
                                    className="link_auth"
                                    onClick={() => setDrawer(false)}
                                >
                                    {lng === 'ar' ? page.name : page.name_en}
                                </Link>
                            ))
                        }
                        {/* <a href="tel:+96341556670" style={{ textDecoration: 'none', color: '#FFF', }} >
                            <Typography
                                style={{
                                    textTransform: 'capitalize',
                                    fontWeight: 'bold'
                                }}
                                className="link">
                                {lng === 'ar' ? 'اتصل بنا' : 'contact us'}
                            </Typography>
                        </a> */}
                        <TransLang />
                    </Box>
                </Drawer>
            </React.Fragment>
        </div>
    );
}
