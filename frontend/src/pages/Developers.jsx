import React from 'react'
import Header from '../components/global/Header'
import ListDevelopers from '../components/Developers/ListDevelopers'
import { useTranslation } from 'react-i18next'

const Developers = () => {
  const { t } = useTranslation()
  return (
    <>
      <Header title={t("Developers")} />
      <ListDevelopers />
    </>
  )
}

export default Developers