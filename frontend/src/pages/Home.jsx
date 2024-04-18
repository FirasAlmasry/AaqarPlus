import React from 'react'
import Header from '../components/Header'
import TopCompounds from '../components/TopCompounds'
import ExploreNewProjects from '../components/ExploreNewProjects'
import TopAreas from '../components/TopAreas'
import TopProperty from '../components/TopProperty'
import ContactUs from '../components/ContactUs'

const Home = () => {
  return (
    <>
        <Header />
        <TopAreas /> 
        <ExploreNewProjects /> 
        <TopCompounds />
        <TopProperty />
        <ContactUs />
    </>
  )
}

export default Home