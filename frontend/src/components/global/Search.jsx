import { Box, MenuItem, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MenuItems from '../NavBar/MenuItems'
import Btn from './Btn'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useGetPropertyTypeQuery } from '../../state/PropertyType'
import { useGetCountryQuery } from '../../state/Country'
import i18next from 'i18next'

const Search = () => {
    const [areaValue, setAreaValue] = useState('');
    const [tagsValue, setTagsValue] = useState('');
    const [maxPriceValue, setMaxPriceValue] = useState('');
    const [isInvestSelected, setIsInvestSelected] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleAreaChange = (event) => {
        setAreaValue(event.target.value);
    };

    const handleTagsChange = (event) => {
        setTagsValue(event.target.value);
    };

    const handleMaxPriceChange = (event) => {
        setMaxPriceValue(event.target.value);
    };

    const { t } = useTranslation();
    const [Unit, setUnit] = useState(null);
    const open = Boolean(Unit);
    const openContry = Boolean(anchorEl);

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

    let lng = i18next.language;
    const { data, isBrandsLoading } = useGetPropertyTypeQuery(lng);

    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBrandsLoading) {
            const filteredData = data.data.filter(item => {
                if (lng === 'en') {
                    return item?.name === 'sale' || item?.name === 'rent';
                } else if (lng === 'ar') {
                    return item?.name === 'بيع' || item?.name === 'إيجار';
                }
                return false;
            });
            setTableData(filteredData);
        }
    }, [data, isBrandsLoading, lng]);

    const { data: country, isCountryLoading } = useGetCountryQuery(lng);
    const [countryData, setCountryData] = useState([]);
    useEffect(() => {
        if (country && !isCountryLoading) {
            setCountryData(country?.data?.data);
        }
    }, [country, isCountryLoading]);

    const [selectedItem, setSelectedItem] = useState([]);
    const [selectedChildId, setSelectedChildId] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleButtonClick = (res) => {
        setSelectedItem(res);
        setSelectedChildId(null);
        setIsInvestSelected(false);
        setSelectedCountry(null)
    };

    const handleInvestClick = () => {
        setIsInvestSelected(prevState => !prevState);
        setSelectedItem([])
        setSelectedChildId(null)
        setAreaValue(null)
        setTagsValue(null)
        setMaxPriceValue(null)
    };

    const handleChildItemClick = (childId) => {
        setSelectedChildId(childId);
        handleClose();
    };

    const handleCountryClick = (country) => {
        setSelectedCountry(country);
        handleCloseCountry();
    };
    const resetSearchInputs = () => {
        setAreaValue('');
        setTagsValue('');
        setMaxPriceValue('');
        setIsInvestSelected(false);
        setSelectedItem([]);
        setSelectedChildId(null);
        setSelectedCountry(null);
    };

    const handleLinkClick = () => {
        const queryParams = {};
        // console.log("🚀 ~ handleLinkClick ~ queryParams:", queryParams)

        if (isInvestSelected) {
            queryParams.type = 'invest';
        }
            if (selectedCountry) {
                queryParams.country = selectedCountry;
            }
        // } else {
            if (selectedChildId || selectedItem?.id) {
                queryParams.property_type = selectedChildId || selectedItem?.id;
            }
            if (areaValue) {
                queryParams.area = areaValue;
            }
            if (tagsValue) {
                queryParams.tags = tagsValue;
            }
            if (maxPriceValue) {
                queryParams.max_price = maxPriceValue;
            }
        // }
        if (lng) {
            queryParams.lng = lng;
        }

        const queryString = new URLSearchParams(queryParams).toString();
        const searchUrl = `/search?${queryString}`;
        // Reset input fields after generating the search URL
        // resetSearchInputs();
        return searchUrl;
    };

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Box sx={{ display: 'flex', gap: { md: '5%', xs: 1 }, mb: '-1px', mt: 1, flexWrap: 'nowrap', justifyContent: 'center' }}
                    size="large" aria-label="large button group">
                    {tableData?.map((res) =>
                        <Button
                            key={res?.id}
                            sx={{
                                borderRadius: '8px 8px 0 0', backgroundColor: isInvestSelected ?
                                    'rgba(255,255,255, 85%)' : (selectedItem === res ? '#fff' : 'rgba(255,255,255, 85%)'),
                                '&:hover': { backgroundColor: '#FFF' },
                                width: '150px', py: 1.5, px: 4, fontWeight: 'bold'

                            }} onClick={() => handleButtonClick(res)} >{res?.name}</Button>
                    )}
                    {tableData?.length > 0 && <Button
                        sx={{
                            borderRadius: '8px 8px 0 0', backgroundColor: isInvestSelected ? '#fff' : 'rgba(255,255,255, 85%)',
                            '&:hover': { backgroundColor: '#FFF' },
                            width: '150px', py: 1.5, px: 4, fontWeight: 'bold'
                        }} onClick={handleInvestClick}
                    >{lng === 'en' ? 'Invest' : 'استثمار'}</Button>}
                    
                </Box>
                <Box sx={{ py: 4, px: 2, boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", background: '#FFF', borderRadius: { md: '8px', xs: 0 }, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { md: 'row', xs: 'column' }, gap: 1 }} >
                    <Box sx={{ mx: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1, flexDirection: { md: 'row', xs: 'column' }, width: '100%' }} >
                        <Box sx={{
                            width: { md: '35%', xs: '100%' },
                            px: 2,
                            border: '0.5px solid #707070', borderRadius: '8px', py: 1,
                            backgroundColor: isInvestSelected ? 'rgba(0, 0, 0, 0.12)' : '#FFF',
                            pointerEvents: isInvestSelected ? 'none' : 'auto',
                            opacity: isInvestSelected ? 0.5 : 1
                        }} >
                            {selectedItem && (
                                <MenuItems
                                    name={selectedChildId ? selectedItem?.children.find(item => item.id === selectedChildId)?.name : selectedItem?.name}
                                    handleClick={handleClick}
                                    anchorEl={Unit}
                                    open={open}
                                    handleClose={handleClose}
                                    wid={260}>
                                    {selectedItem?.children?.map((subItem, index) => (
                                        <MenuItem key={index} onClick={() => handleChildItemClick(subItem.id)} disableRipple>
                                            {subItem?.name}
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            )}
                        </Box>
                        {isInvestSelected ? (
                            <Box sx={{
                                width: { md: '35%', xs: '100%' },
                                px: 2,
                                border: '0.5px solid #707070', borderRadius: '8px', py: 1
                            }} >
                                <MenuItems
                                    name={selectedCountry || (lng === 'en' ? 'Invest' : "استثمر ")}
                                    handleClick={handleClickCountry}
                                    anchorEl={anchorEl}
                                    open={openContry}
                                    handleClose={handleCloseCountry}
                                    wid={260}>
                                    {countryData?.map((res) => (
                                        <MenuItem key={res?.id} onClick={() => handleCountryClick(res?.name)} disableRipple>
                                            {res?.name}
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Box>
                        ) : (
                            <input
                                style={{ backgroundColor: '#FFF' }}
                                id="areaName"
                                variant="filled"
                                size="medium"
                                name='areaName'
                                className='input_search'
                                placeholder={lng === 'en' ? 'Area' : 'المنطقة'}
                                value={areaValue}
                                onChange={handleAreaChange}
                            />
                        )}
                        <input
                            style={{
                                backgroundColor: isInvestSelected ? 'rgba(0, 0, 0, 0.12)' : '#FFF',
                                pointerEvents: isInvestSelected ? 'none' : 'auto',
                                opacity: isInvestSelected ? 0.5 : 1
                            }}
                            id="tagsName"
                            variant="filled"
                            size="medium"
                            name='tagsName'
                            className='input_search'
                            placeholder={lng === 'en' ? 'Search' : 'بحث'}
                            value={tagsValue}
                            onChange={handleTagsChange}
                            disabled={isInvestSelected}

                        />
                        <input
                            style={{
                                backgroundColor: isInvestSelected ? 'rgba(0, 0, 0, 0.12)' : '#FFF',
                                pointerEvents: isInvestSelected ? 'none' : 'auto',
                                opacity: isInvestSelected ? 0.5 : 1
                            }}
                            id="maxPrice"
                            variant="filled"
                            size="medium"
                            name='maxPrice'
                            className='input_search'
                            placeholder={lng === 'en' ? 'Max Price' : 'اعلى سعر'}
                            value={maxPriceValue}
                            onChange={handleMaxPriceChange}
                            disabled={isInvestSelected}

                        />
                    </Box>
                    <Box sx={{
                        width: { md: 'auto', xs: '100%' }, 
                    }} >
                        <Link to={handleLinkClick()} onClick={ ()=> resetSearchInputs()}>
                            <Btn text={t('btn')} wid={'100%'} widLa={'150px'} />
                        </Link>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Search;
