import { Box, Typography } from '@mui/material'
import React from 'react'
import HeaderSection from '../global/HeaderSection'

const PaymentPlans = ({ MonthlyInstallment ,DownPayment ,InstallmentYears }) => {
    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2, py: 2 }}>
                <HeaderSection nameSection={'Payment Plans'} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography color={'primary.main'} sx={{ fontWeight:'bold' }} >{MonthlyInstallment} <span style={{ color:'#E00201' }} >Monthly</span></Typography> | <Typography>{DownPayment}-Down Payment</Typography> | <Typography color={'primary.main'} sx={{ fontWeight:'bold' }} >{InstallmentYears}Years</Typography>
                </Box>
            </Box>
        </>
    )
}

export default PaymentPlans