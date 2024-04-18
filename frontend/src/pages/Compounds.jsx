import React from 'react'
import Header from '../components/global/Header'
import ListCompounds from '../components/Compounds/ListCompounds'
import { useTranslation } from 'react-i18next'

const Compounds = () => {
    const { t } = useTranslation()
    return (
        <>
            <Header title={t("compound")} />
            <ListCompounds />
        </>
    )
}

export default Compounds