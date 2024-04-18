import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import { auth } from "../../constants"
import { Link } from "react-router-dom";
import i18next from "i18next";
import MenuIcon from "@mui/icons-material/Menu";
import {  IconButton } from "@mui/material";

const Auth = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    let lng = i18next.language
    return (
        <>
            <Box>
                <IconButton id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    <MenuIcon sx={{ width: 30, height: 30, cursor: "pointer", backgroundColor: 'transparent', color:'#E00201' }} />
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {auth.map((page, i) => <MenuItem key={i} onClick={() => {handleClose()}}>
                        <Link
                            to={page.path}
                            style={{
                                // fontSize: 14,
                                textTransform: 'capitalize',
                                // fontWeight: 'bold'
                            }}
                            className="link">
                            {lng === 'ar' ? page.name : page.name_en}
                        </Link>
                    </MenuItem>
                )}
                </Menu>
            </Box>
        </>
    )
}

export default Auth