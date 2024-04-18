import React from 'react'
import WrapperSection from '../../global/WrapperSection'
import HeaderSection from '../../global/HeaderSection'
import ListNews from './ListNews'
import { useTranslation } from 'react-i18next'

const OurNews = () => {
    const {t} = useTranslation()
    return (
        <>
        <WrapperSection>
                <HeaderSection nameSection={t("OurNews")} />
            <ListNews />
        </WrapperSection>
        </>
    )
}

export default OurNews