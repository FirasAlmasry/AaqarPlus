import React from 'react'
import WrapperSection from '../global/WrapperSection'
import HeaderSection from '../global/HeaderSection'
import { Typography } from '@mui/material'
const SectionTerm = ({ name, description }) => {
    return (
        <>
            <WrapperSection>
                <HeaderSection nameSection={name} />
                <Typography color={'secondary.supMain'} my={2} sx={{ width:'100%' }} >
                    <div dangerouslySetInnerHTML={{ __html: description }}></div>
                </Typography>
            </WrapperSection>
        </>
    )
}

export default SectionTerm