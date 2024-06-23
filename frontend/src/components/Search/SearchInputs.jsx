import React, { useState } from 'react';
import { Box, MenuItem } from '@mui/material';
import MenuItems from '../NavBar/MenuItems';
import DropdownWithSearch from './DropdownWithSearch'

const SearchInputs = ({
    selectedItem,
    selectedChildId,
    selectedCountry,
    selectedArea,
    tagsValue,
    maxPriceValue,
    handleTagsChange,
    handleMaxPriceChange,
    countryData,
    AreaData,
    isInvestSelected,
    lng,
    setSelectedChildId,
    setSelectedCountry,
    setSelectedArea
}) => {
    const [Unit, setUnit] = useState(null);
    const open = Boolean(Unit);
    const [anchorEl, setAnchorEl] = useState(null);
    const openContry = Boolean(anchorEl);
    const [AreaEl, setAreaEl] = useState(null);
    const openArea = Boolean(AreaEl);

    const handleClick = (event) => {
        setUnit(event.currentTarget);
    };

    const handleClose = () => {
        setUnit(null);
    };

    const handleClickCountry = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseCountry = () => {
        setAnchorEl(null);
    };

    const handleClickArea = (event) => {
        setAreaEl(event.currentTarget);
    };

    const handleCloseArea = () => {
        setAreaEl(null);
    };

    const handleChildItemClick = (childId) => {
        setSelectedChildId(childId);
        handleClose();
    };

    const handleCountryClick = (country) => {
        setSelectedCountry(country);
        handleCloseCountry();
    };

    const handleAreaClick = (Area) => {
        setSelectedArea(Area);
        handleCloseArea();
    };

    return (
        <Box sx={{ mx: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1, flexDirection: { md: 'row', xs: 'column' }, width: '100%' }}>
            <Box
                sx={{
                    width: { md: '35%', xs: '100%' },
                    px: 2,
                    border: '0.5px solid #707070',
                    borderRadius: '6px',
                    py: 2,
                    backgroundColor: isInvestSelected ? 'rgba(0, 0, 0, 0.12)' : '#FFF',
                    pointerEvents: isInvestSelected ? 'none' : 'auto',
                    opacity: isInvestSelected ? 0.5 : 1
                }}
            >
                {selectedItem && (
                    <MenuItems
                        name={
                            selectedItem.id
                                ? selectedChildId
                                    ? selectedItem.children.find((item) => item.id === selectedChildId?.id)?.name
                                    : selectedItem.name
                                : lng === 'ar'
                                    ? 'اختر النوع اولا'
                                    : 'select Type First'
                        }
                        selected={selectedChildId?.name || selectedItem.name}
                        handleClick={handleClick}
                        anchorEl={Unit}
                        open={open}
                        handleClose={handleClose}
                        wid={260}
                        
                    >
                        {selectedItem?.children?.map((subItem, index) => (
                            <MenuItem key={index} onClick={() => handleChildItemClick(subItem)} disableRipple>
                                {subItem?.name}
                            </MenuItem>
                        ))}
                    </MenuItems>
                )}
            </Box>
            {isInvestSelected ? (
                <Box
                    sx={{
                        width: { md: '35%', xs: '100%' },
                        px: 2,
                        border: '0.5px solid #707070',
                        borderRadius: '6px',
                        py: 2
                    }}
                >
                    <MenuItems
                        name={selectedCountry || (lng === 'en' ? 'Invest' : 'استثمر')}
                        handleClick={handleClickCountry}
                        anchorEl={anchorEl}
                        open={openContry}
                        handleClose={handleCloseCountry}
                        wid={260}
                    >
                        {countryData?.map((res) => (
                            <MenuItem key={res?.id} onClick={() => handleCountryClick(res?.name)} disableRipple>
                                {res?.name}
                            </MenuItem>
                        ))}
                    </MenuItems>
                </Box>
            ) : (
                <DropdownWithSearch
                    selectedArea={selectedArea}
                    handleClickArea={handleClickArea}
                    AreaData={AreaData}
                    handleAreaClick={handleAreaClick}
                    lng={lng}
                />
            )}
            <input
                id="tagsName"
                variant="filled"
                size="medium"
                name="tagsName"
                className="input_search"
                placeholder={lng === 'en' ? 'Search' : 'بحث'}
                value={tagsValue}
                onChange={handleTagsChange}
            />
            <input
                id="maxPrice"
                variant="filled"
                size="medium"
                name="maxPrice"
                className="input_search"
                placeholder={lng === 'en' ? 'Max Price' : 'اعلى سعر'}
                value={maxPriceValue}
                onChange={handleMaxPriceChange}
            />
        </Box>
    );
};

export default SearchInputs;
