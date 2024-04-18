import { Box } from '@mui/material'
import React from 'react'

const PaymentPlans = ({data}) => {
    return (
        <>
            <Box>
                <div className="PaymentPlans" dangerouslySetInnerHTML={{ __html: data }}></div>
            </Box>
        </>
    )
}

export default PaymentPlans