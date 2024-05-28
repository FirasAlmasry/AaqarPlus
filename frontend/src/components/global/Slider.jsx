import React from 'react'
import Carousel from 'react-material-ui-carousel'


const Slider = ({ nav= false ,children }) => {
    return (
        <>
            <Carousel
                indicators={false}
                navButtonsAlwaysVisible={nav}
                fullHeightHover={true}
                autoPlay={false}
                sx={{
                    marginTop: "25px",
                    width: { md: "100%", xs: "100%" },
                    margin: "auto"
                }}>
                {children}
            </Carousel>
        </>
    )
}

export default Slider