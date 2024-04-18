import React from 'react'
import WrapperSection from '../global/WrapperSection'
import {Box} from '@mui/material'
import Btn from '../global/Btn'
const DescContact = ({ data }) => {
    return (
        <>
            <WrapperSection>
                <Box color={'secondary.supMain'} sx={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:2, textAlign:'center' }} >
                    <div className="desc" dangerouslySetInnerHTML={{ __html: data }}></div>
                    <Btn text='contact Us' />
                </Box>
            </WrapperSection>
        </>
    )
}

export default DescContact