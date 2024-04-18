import React from 'react'
import Header from '../components/global/Header'
import ListAreas from '../components/Areas/ListAreas'
import { useTranslation } from 'react-i18next'

const Areas = () => {
  const {t} = useTranslation()
  return (
    <>
        <Header title={t("area")} />
        <ListAreas />
    </>
  )
}

export default Areas