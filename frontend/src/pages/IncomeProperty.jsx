import React from 'react'
import Header from '../components/global/Header'
import ListIncomeProperty from '../components/IncomeProperty/ListIncomeProperty'
import { useTranslation } from 'react-i18next'

const IncomeProperty = () => {
    const { t } = useTranslation()
    return (
        <>
            <Header title={t("LaunchingSoon") } />
            <ListIncomeProperty />
        </>
    )
}

export default IncomeProperty