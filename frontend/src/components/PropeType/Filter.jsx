import { MenuItem, Select } from '@mui/material'
import i18next from 'i18next';
import React from 'react'

const Filter = ({ saleTypeFilter, setSaleTypeFilter }) => {

    let lng = i18next.language
    const handleSaleTypeChange = (event) => {
        setSaleTypeFilter(event.target.value);
    };
    return (
        <>
            <Select
                value={saleTypeFilter}
                onChange={handleSaleTypeChange}
                displayEmpty
                fullWidth
            >
                <MenuItem value=""> {lng === 'en' ? 'All' : 'الكل'}</MenuItem>
                <MenuItem value="resale">{lng === 'en'?'Resale': 'بيع مرة أخرى'}</MenuItem>
                <MenuItem value="primary">{lng === 'en'?'Primary': 'أساسي'}</MenuItem>
                <MenuItem value="rent">{lng === 'en'?'Rent': 'استئجار'}</MenuItem>
            </Select>
        </>
    )
}

export default Filter