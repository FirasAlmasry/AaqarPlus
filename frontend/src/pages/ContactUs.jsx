import React from 'react'
import Header from '../components/global/Header'
import ContactUsPage from '../components/ContactUsPage'
import { useTranslation } from 'react-i18next'

const ContactUs = () => {
  const {t} = useTranslation()
  return (
    <>
      <Header title={t("Contacts.title")} />
        <ContactUsPage />
    </>
  )
}

export default ContactUs