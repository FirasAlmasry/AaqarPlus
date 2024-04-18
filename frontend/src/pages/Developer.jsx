import React from 'react'
import Header from '../components/global/Header'
import DeveloperDetails from '../components/Developer/DeveloperDetails'
import { useTranslation } from 'react-i18next'

const Developer = () => {
    const {t} = useTranslation()
    return (
        <>
            <Header title={t("Developers")} />
            <DeveloperDetails />
        </>
    )
}

export default Developer