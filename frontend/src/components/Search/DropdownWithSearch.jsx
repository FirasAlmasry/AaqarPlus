import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

const DropdownWithSearch = ({ selectedArea, handleClickArea, AreaData, handleAreaClick, lng }) => {
    const options = AreaData?.map((res) => ({
        value: res?.id,
        label: res?.name
    }));

    const handleChange = (event, newValue) => {
        if (newValue) {
            handleAreaClick(newValue.value);
        }
    };

    return (
        <Autocomplete
            value={selectedArea ? options.find(option => option.value === selectedArea) : null}
            onChange={handleChange}
            options={options}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={selectedArea ? options.find(option => option.value === selectedArea)?.label : (lng === 'en' ? 'Area' : 'المنطقة')}
                    variant="outlined"
                    fullWidth
                    sx={{
                        width: { md: '100%', xs: '100%' },
                        borderRadius: '16px'
                    }}
                />
            )}
            sx={{
                width: { md: '35%', xs: '100%' },
                borderRadius: '16px'
            }}
        />
    );
};

export default DropdownWithSearch;
