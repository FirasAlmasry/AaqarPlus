import { createTheme } from "@mui/material";
import i18next from "i18next";

let lng = i18next.language;

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#062371",
            text: "#ffffff",
        },
        secondary: {
            main: "#E00201",
            supMain: "#7A7A7A"
        },
        background: {
            default: "#fff",
        },
    },
    typography: {
        // fontFamily: (lng === 'en' ? "Lato, sans-serif" : "Tajawal, sans-serif"),
        fontWeight: '600',
        h1: {
            // fontFamily: (lng === 'en' ? "Ubuntu, sans-serif" : "Tajawal, sans-serif"),
            fontWeight: 'bold'
        },
        h2: {
            // fontFamily: (lng === 'en' ? "Ubuntu, sans-serif" : "Tajawal, sans-serif"),
            fontWeight: 'bold'
        },
        h3: {
            // fontFamily: (lng === 'en' ? "Ubuntu, sans-serif" : "Tajawal, sans-serif"),
            fontWeight: 'bold'
        },
        h4: {
            // fontFamily: (lng === 'en' ? "Ubuntu, sans-serif" : "Tajawal, sans-serif"),
            fontWeight: 'bold'
        },
        h5: {
            // fontFamily: (lng === 'en' ? "Ubuntu, sans-serif" : "Tajawal, sans-serif"),
            fontWeight: 'bold'
        },
        h6: {
            // fontFamily: (lng === 'en' ? "Ubuntu, sans-serif" : "Tajawal, sans-serif"),
            fontWeight: 'bold'
        },
    },
});

export default theme;
