import React from 'react'
import WrapperAuth from '../components/Auth/WrapperAuth'
import Sell from '../components/Auth/Sell'
import SellImage from './../assets/auth/young-business-woman-checking-satisfaction-checklist-box-copy-space.png'

const SellPage = () => {
  return (
      <>
          <WrapperAuth img={SellImage} name={`Sell`} >
              <Sell />
          </WrapperAuth>
      </>
  )
}

export default SellPage