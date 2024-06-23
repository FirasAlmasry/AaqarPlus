import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetPropertyTypeQuery } from '../../state/PropertyType';
import { useGetCountryQuery } from '../../state/Country';
import i18next from 'i18next';
import { useGetAreasQuery } from '../../state/areas';
import PropertyTypeButtons from '../Search/PropertyTypeButtons';
import SearchInputs from '../Search/SearchInputs';
import SearchButton from '../Search/SearchButton';

const Search = ({ selectedItem, setSelectedItem, selectedChildId, setSelectedChildId }) => {
    const { t } = useTranslation();
    const [tagsValue, setTagsValue] = useState('');
    const [maxPriceValue, setMaxPriceValue] = useState('');
    const [isInvestSelected, setIsInvestSelected] = useState(false);

    const handleTagsChange = (event) => {
        setTagsValue(event.target.value);
    };

    const handleMaxPriceChange = (event) => {
        setMaxPriceValue(event.target.value);
    };

    let lng = i18next.language;
    const { data, isBrandsLoading } = useGetPropertyTypeQuery(lng);

    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBrandsLoading) {
            const filteredData = data.data.filter((item) => {
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

    const { data: Area, isLoading: isAreaLoading } = useGetAreasQuery({ lng, currentPage: 1, limit: 99999 });
    const [AreaData, setAreaData] = useState([]);
    useEffect(() => {
        if (Area && !isAreaLoading) {
            setAreaData(Area?.data?.data);
        }
    }, [Area, isAreaLoading]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedArea, setSelectedArea] = useState(null);

    const resetSearchInputs = () => {
        setTagsValue('');
        setMaxPriceValue('');
        setIsInvestSelected(false);
        setSelectedCountry(null);
        setSelectedArea(null);
    };

    const handleLinkClick = () => {
        const queryParams = {};

        if (isInvestSelected) {
            queryParams.type = 'invest';
        }
        if (selectedCountry) {
            queryParams.country = selectedCountry;
        }
        if (selectedChildId?.id || selectedItem?.id) {
            queryParams.property_type = selectedChildId?.id || selectedItem?.id;
        }
        if (selectedArea) {
            queryParams.area = selectedArea;
        }
        if (tagsValue) {
            queryParams.tags = tagsValue;
        }
        if (maxPriceValue) {
            queryParams.max_price = maxPriceValue;
        }
        if (lng) {
            queryParams.lng = lng;
        }

        const queryString = new URLSearchParams(queryParams).toString();
        const searchUrl = `/search?${queryString}`;
        return searchUrl;
    };

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <PropertyTypeButtons
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                    selectedChildId={selectedChildId}
                    setSelectedChildId={setSelectedChildId}
                    tableData={tableData}
                    isInvestSelected={isInvestSelected}
                    setIsInvestSelected={setIsInvestSelected}
                    setSelectedCountry={setSelectedCountry}
                    lng={lng}
                />
                <Box
                    sx={{
                        py: 4,
                        px: 2,
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        background: '#FFF',
                        borderRadius: { md: '8px', xs: 0 },
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: { md: 'row', xs: 'column' },
                        gap: 1
                    }}
                >
                    <SearchInputs
                        selectedItem={selectedItem}
                        selectedChildId={selectedChildId}
                        selectedCountry={selectedCountry}
                        selectedArea={selectedArea}
                        tagsValue={tagsValue}
                        maxPriceValue={maxPriceValue}
                        handleTagsChange={handleTagsChange}
                        handleMaxPriceChange={handleMaxPriceChange}
                        countryData={countryData}
                        AreaData={AreaData}
                        isInvestSelected={isInvestSelected}
                        lng={lng}
                        setSelectedChildId={setSelectedChildId}
                        setSelectedCountry={setSelectedCountry}
                        setSelectedArea={setSelectedArea}
                    />
                    <SearchButton handleLinkClick={handleLinkClick} resetSearchInputs={resetSearchInputs} t={t} />
                </Box>
            </Box>
        </>
    );
};

export default Search;
