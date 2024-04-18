import React from 'react'
import Header from '../components/global/Header'
import ListRent from '../components/Rent/ListRent'

const Rent = () => {
  return (
      <>
          <Header title={`Rent`} />
          <ListRent />
      </>
  )
}

export default Rent