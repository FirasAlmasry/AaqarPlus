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
            component={'img'}
            src={insta}
            sx={{ width: '2.5rem', height: '2.5rem' }}
          />
        </a>
      </Box>
      <Box >
        <a href={contactData?.facebook} target="_blank" rel="noopener noreferrer" >
          <CardMedia
            component={'img'}
            src={face}
            sx={{ width: '2.5rem', height: '2.5rem' }}
          />
        </a>
      </Box>
      <Box >
        <a href={contactData?.whatsapp} target="_blank" rel="noopener noreferrer" >
          <CardMedia
            component={'img'}
            src={whats}
            sx={{ width: '2.5rem', height: '2.5rem' }}
          />
        </a>
      </Box>
    </>
  )
}

export default ListSocial