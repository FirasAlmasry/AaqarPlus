import React from 'react'
import WrapperSection from '../global/WrapperSection'
import {Box} from '@mui/material'
import Btn from '../global/Btn'
import i18next from 'i18next'
const DescContact = ({ data }) => {
    let lng = i18next.language
    return (
        <>
            <WrapperSection>
                <Box color={'secondary.supMain'} sx={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:2, textAlign:'center' }} >
                    <div className="desc" dangerouslySetInnerHTML={{ __html: data }}></div>
                    <Btn text={lng === 'en' ? 'contact Us': 'تواصل معنا'} />
                </Box>
            </WrapperSection>
        </>
    )
}

export default DescContact