import { Button } from '@mui/material'
import React from 'react'
import theme from '../../util/theme'
import { useNavigate } from 'react-router-dom';
const Btn = ({ bg, color, text = 'See Details', path, wid, widLa, borderColor }) => {
    const navigate = useNavigate()
    return (
        <>
            <Button 
                onClick={() => navigate(path)}
            sx={{ background: bg ? bg : theme.palette.primary.main,
                color: color ? color : theme.palette.primary.text, fontWeight: 'bold', textTransform: 'capitalize', padding: '5px 16px', border: `0.8px solid ${borderColor}`, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.20)", width: { md: widLa, xs: wid, }, ':hover': { background: bg ? bg : theme.palette.primary.main, color: color ? color : theme.palette.primary.text, } }} >
                {text}
            </Button>
        </>
    )
}

export default Btn