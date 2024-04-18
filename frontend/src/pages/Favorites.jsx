import React from 'react'
import Header from '../components/global/Header'
import ListFavorites from '../components/Favorites/ListFavorites'

const Favorites = () => {
  return (
      <>
          <Header title={`Favorites`} />
          <ListFavorites />
      </>
  )
}

export default Favorites