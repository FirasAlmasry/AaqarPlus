// IframeDisplay.js

import React from 'react';
import { Box } from '@mui/material';
import HeaderSection from '../global/HeaderSection';
import Description from '../global/Description';
import { useTranslation } from 'react-i18next';

const extractSrcFromIframe = (iframeText) => {
    const regex = /src="([^"]+)"/;
    const match = regex.exec(iframeText);
    if (match && match.length > 1) {
        return match[1];
    } else {
        return null;
    }
};

const IframeDisplay = ({ iframeText, name }) => {
    const src = extractSrcFromIframe(iframeText);
    const { t } = useTranslation();

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <HeaderSection nameSection={t("Contacts.Location")} />
            {
                src === null ? <Description data={iframeText} /> :
                    <iframe src={src} width="100%" height="100%" title={name} style={{ border: 0, marginTop: '16px' }}
                        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            }
        </Box>
    );
};

export default IframeDisplay;
