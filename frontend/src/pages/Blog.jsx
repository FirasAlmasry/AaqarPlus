import React from 'react'
import Header from '../components/global/Header'
import BlogDetails from '../components/Blog/BlogDetails'
import ContactUs from '../components/ContactUs'
import { useTranslation } from 'react-i18next'

const Blog = () => {
    const {t} = useTranslation()
    return (
        <>
            <Header title={t("Blogs")} />
            <BlogDetails />
            <ContactUs />
        </>
    )
}

export default Blog