import { Box } from '@mui/material'
import React from 'react'

import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    EmailShareButton,
    EmailIcon,
    LinkedinShareButton,
    LinkedinIcon,
    PinterestShareButton,
    PinterestIcon,
    TelegramShareButton,
    TelegramIcon,
    WhatsappShareButton,
    WhatsappIcon
} from 'react-share'

const Share = ({ show, isHome }) => {
    let url = window.location.href
    return (
        <>
            {
                show === true && 
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", gap: 1, p: 1, position: 'absolute', background: '#FFF', top: isHome === true && '32%' }} >
                <FacebookShareButton url={url}>
                    <FacebookIcon className='icon_share' />
                </FacebookShareButton>
                <TwitterShareButton url={url} >
                    <TwitterIcon className='icon_share' />
                </TwitterShareButton>
                <EmailShareButton url={url}>
                    <EmailIcon className='icon_share' />
                </EmailShareButton>
                <LinkedinShareButton url={url}>
                    <LinkedinIcon className='icon_share' />
                </LinkedinShareButton>
                <PinterestShareButton url={url}>
                    <PinterestIcon className='icon_share' />
                </PinterestShareButton>
                <TelegramShareButton url={url}>
                    <TelegramIcon className='icon_share' />
                </TelegramShareButton>
                <WhatsappShareButton url={url}>
                    <WhatsappIcon className='icon_share' />
                </WhatsappShareButton>
            </Box>
            }
        </>
    )
}

export default Share