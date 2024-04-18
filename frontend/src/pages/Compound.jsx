import React from 'react'
import Header from '../components/global/Header'
import CompoundDetails from '../components/Compound/CompoundDetails'
import ContactUs from '../components/ContactUs'
import { useTranslation } from 'react-i18next'

const Compound = () => {
    const { t } = useTranslation() 
    return (
        <>
            <Header title={t("compound")} />
            <CompoundDetails />
            <ContactUs />
        </>
    )
}

export default Compound