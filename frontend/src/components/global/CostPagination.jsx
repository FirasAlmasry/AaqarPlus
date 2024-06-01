import { useTheme } from '@emotion/react';
import { Pagination, Stack, useMediaQuery } from '@mui/material'
import i18next from 'i18next';
import React from 'react'

const CostPagination = ({setCurrentPage, count, currentPage}) => {

    let lng = i18next.language
    const themeM = useTheme();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));
    const onPageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <Stack spacing={2}>
            <Pagination
                count={count}
                shape="rounded"
                page={currentPage}
                size={isMobile ? 'small' : 'large'}
                siblingCount={0}
                onChange={(event, value) => onPageChange(value)}
                sx={{
                    '.MuiPaginationItem-icon': {
                        transform: lng === 'ar' ? 'rotate(180deg)' : 'rotate(0deg)'
                    }
                }}
            />
        </Stack>
    )
}

export default CostPagination