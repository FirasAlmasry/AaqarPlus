import { Button } from '@mui/material'
import React from 'react'
import theme from '../../util/theme'
import { useNavigate } from 'react-router-dom';
const Btn = ({ bg, color, text = 'See Details', path }) => {
    const navigate = useNavigate()
    return (
        <>
            <Button 
                onClick={() => navigate(path)}
            style={{ background: bg ? bg : theme.palette.primary.main,
                color: color ? color : theme.palette.primary.text, fontWeight: 'bold', textTransform: 'capitalize', padding: '5px 16px' }} >
                {text}
            </Button>
        </>
    )
}

export default Btn