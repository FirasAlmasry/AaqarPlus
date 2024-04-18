import React from 'react'
import Header from '../components/global/Header'
import GroupData from '../components/HowItWorks/GroupData'
import ContactUs from '../components/ContactUs'
import { useTranslation } from 'react-i18next'

const HowItWorks = () => {
    const {t} = useTranslation()
    return (
        <>
            <Header title={t("HowItWorks")} />
            <GroupData />
            <ContactUs />
        </>
    )
}

export default HowItWorks