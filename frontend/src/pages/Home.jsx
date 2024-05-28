import React from 'react'
import Header from '../components/Header'
import Trending from '../components/Trending'
import ExploreNewProjects from '../components/ExploreNewProjects'
import LaunchingSoon from '../components/LaunchingSoon'
import AvailableUnits from '../components/AvailableUnits'
import ContactUs from '../components/ContactUs'
import Search from '../components/global/Search'
import { Box } from '@mui/material'
import WrapperSection from '../components/global/WrapperSection'
import BanarButtom from '../components/global/BanarButtom'
import BanarTop from '../components/global/BanarTop'
// import Search from '../components/global/Search'

const Home = () => {
  return (
    <>
      <Header />
      <Box sx={{ mt:'-10rem' }} >
        <WrapperSection>
          <Search />
        </WrapperSection>
      </Box>
      <LaunchingSoon />
      <ExploreNewProjects />
      <Trending />
      <BanarTop />
      <AvailableUnits />
      <BanarButtom />
      <ContactUs />
    </>
  )
}

export default Home