import React from 'react'
import { Box } from '@mui/material'
import HeaderSection from '../global/HeaderSection'

const BoxData = ({ name, title, description }) => {
    return (
        <>
            <Box sx={{ width: '90%', height: '100%', background: 'rgba(242,242,242, 80%)', p: 3, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2, borderRadius:'16px', m:'auto' }}>
                <HeaderSection nameSection={name} />
                <Box my={2} sx={{ display:'flex',  }} >
                    <div dangerouslySetInnerHTML={{ __html: description }}></div>
                </Box>
            </Box>
        </>
    )
}

export default BoxData