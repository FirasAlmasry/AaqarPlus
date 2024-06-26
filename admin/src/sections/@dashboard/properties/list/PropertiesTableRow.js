import PropTypes from "prop-types";
import { useState } from "react";
// @mui
import {
    Stack,
    Button,
    TableRow,
    MenuItem,
    TableCell,
    IconButton,
    Typography,
} from "@mui/material";
// components
import Iconify from "../../../../components/iconify";
import MenuPopover from "../../../../components/menu-popover";
import ConfirmDialog from "../../../../components/confirm-dialog";

// ----------------------------------------------------------------------

PropertiesTableRow.propTypes = {
    row: PropTypes.object,
    selected: PropTypes.bool,
    onEditRow: PropTypes.func,
    onDeleteRow: PropTypes.func,
    onSelectRow: PropTypes.func,
};

export default function PropertiesTableRow({
    row,
    selected,
    onEditRow,
    onSelectRow,
    onDeleteRow,
    txt = 'Edit',
    is_available = false,
}) {
    const {
        name,
        agent_code,
        start_price,
        end_price,
        house_area,
        ref_number,
        bedrooms,
        bathrooms,
        slug } = row;
    const [openConfirm, setOpenConfirm] = useState(false);

    const [openPopover, setOpenPopover] = useState(null);
    const handleOpenConfirm = () => {
        setOpenConfirm(true);
    };

    const handleCloseConfirm = () => {
        setOpenConfirm(false);
    };

    const handleOpenPopover = (event) => {
        setOpenPopover(event.currentTarget);
    };

    const handleClosePopover = () => {
        setOpenPopover(null);
    };
    const handleClick = () => {
        window.open(`https://aqarpluseg.com/property/${slug?.en}`, '_blank');
    };
    return (
        <>
            <TableRow hover selected={selected}>
                <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${ref_number}`}
                </TableCell>
                <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${agent_code}`}
                </TableCell>
                <TableCell>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography variant="subtitle2" noWrap>
                            {`${name.en.slice(0, 10)}...`}
                        </Typography>
                    </Stack>
                </TableCell>
                <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${start_price}`}
                </TableCell>
                <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${end_price}`}
                </TableCell>
                <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${house_area}`}
                </TableCell>

                <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${bedrooms}`}
                </TableCell>
                <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${bathrooms}`}
                </TableCell>
                <TableCell align="right">
                    <IconButton
                        color={openPopover ? "inherit" : "default"}
                        onClick={handleOpenPopover}
                    >
                        <Iconify icon="eva:more-vertical-fill" />
                    </IconButton>
                </TableCell>
            </TableRow>
            <MenuPopover
                open={openPopover}
                onClose={handleClosePopover}
                arrow="right-top"
                sx={{ width: 140 }}
            >
                <MenuItem
                    onClick={() => {
                        handleOpenConfirm();
                        handleClosePopover();
                    }}
                    sx={{ color: "error.main" }}
                >
                    <Iconify icon="eva:trash-2-outline" />
                    Delete
                </MenuItem>

                <MenuItem
                    onClick={() => {
                        onEditRow();
                        handleClosePopover();
                    }}
                >
                    <Iconify icon="eva:edit-fill" />
                    {txt}
                </MenuItem>
                {
                    is_available &&
                    <MenuItem onClick={handleClick} >
                            <Iconify icon="eva:eye-fill" />
                        view
                    </MenuItem>
                }
            </MenuPopover>

            <ConfirmDialog
                open={openConfirm}
                onClose={handleCloseConfirm}
                title="Delete"
                content="Are you sure want to delete?"
                action={
                    <Button
                        variant="contained"
                        color="error"
                        onClick={onDeleteRow}
                    >
                        Delete
                    </Button>
                }
            />
        </>
    );
}
