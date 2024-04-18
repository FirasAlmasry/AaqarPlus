import React from 'react'
import Header from '../components/global/Header'
import PropertyDetails from '../components/Property/PropertyDetails'
import ContactUs from '../components/ContactUs'
import { useTranslation } from 'react-i18next'

const Property = () => {
    const {t} = useTranslation()
    return (
        <>
            <Header title={t("Properties")} />
            <PropertyDetails />
            <ContactUs />
        </>
    )
}

export default Property