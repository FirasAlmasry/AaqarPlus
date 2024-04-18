import { createTheme } from "@mui/material";

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
        h1: {
            fontFamily: "Ubuntu, sans-serif",
            fontWeight:'bold'
        },
        h2: {
            fontFamily: "Ubuntu, sans-serif",
            fontWeight:'bold'
        },
        h3: {
            fontFamily: "Ubuntu, sans-serif",
            fontWeight:'bold'
        },
        h4: {
            fontFamily: "Ubuntu, sans-serif",
            fontWeight:'bold'
        },
        h5: {
            fontFamily: "Ubuntu, sans-serif",
            fontWeight:'bold'
        },
        h6: {
            fontFamily: "Ubuntu, sans-serif",
            fontWeight:'bold'
        },
        fontFamily: "Lato, sans-serif",
        fontWeight:'600'
    },
});

export default theme;
