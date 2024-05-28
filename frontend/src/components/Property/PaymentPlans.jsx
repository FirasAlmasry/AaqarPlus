import { Box, Typography } from '@mui/material'
import React from 'react'
import HeaderSection from '../global/HeaderSection'
import { useTranslation } from 'react-i18next'

const PaymentPlans = ({ MonthlyInstallment ,DownPayment ,InstallmentYears }) => {
    const {t} = useTranslation()
    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2, py: 2 }}>
                {!MonthlyInstallment?.startsWith('0') && !DownPayment?.startsWith('0') && !InstallmentYears && (
                    <HeaderSection nameSection={t("PaymentPlans")} />
                )}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap:'wrap' }}>
                    {MonthlyInstallment && !MonthlyInstallment?.startsWith('0') && <Typography color={'primary.main'} sx={{ fontWeight: 'bold' }} >{parseFloat(MonthlyInstallment).toLocaleString()}  <span style={{ color: '#E00201' }} >Monthly</span> | </Typography>} {DownPayment && !DownPayment?.startsWith('0') && <Typography>{parseFloat(DownPayment).toLocaleString()} {DownPayment?.split(' ')[1]}-Down Payment | </Typography>} {InstallmentYears && !InstallmentYears?.startsWith('0') &&<Typography color={'primary.main'} sx={{ fontWeight: 'bold' }} >{InstallmentYears}Years</Typography>}
                </Box>
            </Box>
        </>
    )
}

export default PaymentPlans