import { Box } from '@mui/material'
import React from 'react'

const Description = ({data}) => {
    return (
        <>
            <Box>
                <div className="desc" dangerouslySetInnerHTML={{ __html: data }}></div>
            </Box>
        </>
    )
}

export default Description