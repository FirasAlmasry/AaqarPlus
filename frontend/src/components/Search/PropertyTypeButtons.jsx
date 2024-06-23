import React from 'react';
import { Box, Button } from '@mui/material';

const PropertyTypeButtons = ({ tableData, isInvestSelected, setIsInvestSelected, setSelectedItem, setSelectedChildId, setSelectedCountry, selectedItem, lng }) => {

    const handleButtonClick = (res) => {
        setSelectedItem(res);
        setSelectedChildId(null);
        setIsInvestSelected(false);
        setSelectedCountry(null);
    };

    const handleInvestClick = () => {
        setIsInvestSelected((prevState) => !prevState);
        setSelectedItem([]);
        setSelectedChildId(null);
        setSelectedCountry(null);
    };

    return (
        <Box sx={{ display: 'flex', gap: { md: '5%', xs: 1 }, mb: '-1px', mt: 1, flexWrap: 'nowrap', justifyContent: 'center' }} size="large" aria-label="large button group">
            {tableData?.map((res) => (
                <Button
                    key={res?.id}
                    sx={{
                        borderRadius: '8px 8px 0 0',
                        backgroundColor: isInvestSelected ? 'rgba(255,255,255, 85%)' : (selectedItem === res ? '#fff' : 'rgba(255,255,255, 85%)'),
                        '&:hover': { backgroundColor: '#FFF' },
                        width: '150px',
                        py: 1.5,
                        px: 4,
                        fontWeight: 'bold'
                    }}
                    onClick={() => handleButtonClick(res)}
                >
                    {res?.name}
                </Button>
            ))}
            {tableData?.length > 0 && (
                <Button
                    sx={{
                        borderRadius: '8px 8px 0 0',
                        backgroundColor: isInvestSelected ? '#fff' : 'rgba(255,255,255, 85%)',
                        '&:hover': { backgroundColor: '#FFF' },
                        width: '150px',
                        py: 1.5,
                        px: 4,
                        fontWeight: 'bold'
                    }}
                    onClick={handleInvestClick}
                >
                    {lng === 'en' ? 'Invest' : 'استثمار'}
                </Button>
            )}
        </Box>
    );
};

export default PropertyTypeButtons;
