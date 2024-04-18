import React from 'react'
import Header from '../components/global/Header'
import BlogDetails from '../components/Blog/BlogDetails'
import ContactUs from '../components/ContactUs'

const Blog = () => {
    return (
        <>
            <Header title={`Article`} />
            <BlogDetails />
            <ContactUs />
        </>
    )
}

export default Blog