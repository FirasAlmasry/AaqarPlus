import { Box } from '@mui/material';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import CustomDot from './CustomDot';
const MultiItemSlider = ({ children }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };

    return (
        <>
            <Box sx={{ mb: 2, pb: 2 }} >
                <Carousel
                    autoPlay={true}
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    pauseOnHover={false}
                    infinite={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="transform 300ms ease-in-out"
                    transitionDuration={1000}
                    containerclassName="carousel-container"
                    dotListclassName="custom-dot-list-style"
                    itemclassName="carousel-item-padding-40-px"
                    rewindWithAnimation={true}
                    removeArrowOnDeviceType={['desktop', 'mobile', 'table']}
                // customDot={<CustomDot />}
                >
                    {children}
                </Carousel>
            </Box>
        </>
    )
}

export default MultiItemSlider