import { Grid } from '@mui/material'
import React from 'react'

const GlobalList = ({ children }) => {
  return (
    <>
        <Grid container spacing={1}>
            {children}
        </Grid>
    </>
  )
}

export default GlobalList