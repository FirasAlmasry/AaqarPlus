import React from 'react'
import Header from '../components/global/Header'
import ListNewProjects from '../components/NewProjects/ListNewProjects'
import { useTranslation } from 'react-i18next'

const NewProjects = () => {
    const { t } = useTranslation()
    return (
        <>
            <Header title={t("Properties") } />
            <ListNewProjects />
        </>
    )
}

export default NewProjects