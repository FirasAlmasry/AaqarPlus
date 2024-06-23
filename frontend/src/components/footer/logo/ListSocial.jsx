import { Box, CardMedia } from '@mui/material'
import React, { useEffect, useState } from 'react'
import whats from './../../../assets/icons/Group 2785.png'
import face from './../../../assets/icons/Icon awesome-facebook.png'
import insta from './../../../assets/icons/Group 2831.png'
import { useGetContactUsQuery } from '../../../state/contactUs'

const ListSocial = () => {
  const { data: contact, isContactLoading } = useGetContactUsQuery();

  const [contactData, setContactData] = useState([]);

  useEffect(() => {

    if (contact && !isContactLoading) {
      setContactData(contact?.data)
    }
  }, [contact, contactData, isContactLoading])

  return (
    <>
      <Box >
        <a href={contactData?.instagram} target="_blank" rel="noopener noreferrer" >
          <CardMedia
          loading='lazy'
            component={'img'}
            src={insta}
            alt='image'
            sx={{ width: {md:'2.5rem', xs:'1.75rem'}, height: {md:'2.5rem', xs:'1.75rem'}, objectFit:'contain' }}
          />
        </a>
      </Box>
      <Box >
        <a href={contactData?.facebook} target="_blank" rel="noopener noreferrer" >
          <CardMedia
          loading='lazy'
            component={'img'}
            src={face}
            alt='image'
            sx={{ width: {md:'2.5rem', xs:'1.75rem'}, height: {md:'2.5rem', xs:'1.75rem'}, objectFit:'contain' }}
          />
        </a>
      </Box>
      <Box >
        <a href={`whatsapp://send?phone=${contactData?.whatsapp}`} target="_blank" rel="noopener noreferrer" >
          <CardMedia
          loading='lazy'
            component={'img'}
            src={whats}
            alt='image'
            sx={{ width: {md:'2.5rem', xs:'1.75rem'}, height: {md:'2.5rem', xs:'1.75rem'}, objectFit:'contain' }}
          />
        </a>
      </Box>
    </>
  )
}

export default ListSocial