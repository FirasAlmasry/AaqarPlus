import PropTypes from "prop-types";
import { useState } from "react";
// @mui
import {
    Stack,
    Avatar,
    Button,
    Checkbox,
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

CompoundsTableRow.propTypes = {
    row: PropTypes.object,
    selected: PropTypes.bool,
    onEditRow: PropTypes.func,
    onDeleteRow: PropTypes.func,
    onSelectRow: PropTypes.func,
};

export default function CompoundsTableRow({
    row,
    selected,
    onEditRow,
    onSelectRow,
    onDeleteRow,
}) {
    const { 
        name,
        address,
        whatsapp,
        phone_number,
        image_location,
        start_price,
        end_price,
        description,
        payment_plans,
        trending,} = row;
    const url = `https://aqarbackend.revampbrands.com/storage/${image_location}`
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

    return (
        <>
            <TableRow hover selected={selected}>

                <TableCell>
                    <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar alt={name.ar} src={url} />
                        <Typography variant="subtitle2" noWrap>
                            {`${name.ar.slice(0, 30)}...`}
                        </Typography>
                    </Stack>
                </TableCell>
                <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${address.ar.slice(0, 30)}...`}
                </TableCell>
                <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${whatsapp.slice(0, 30)}...`}
                </TableCell>
                <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${phone_number.slice(0, 30)}...`}
                </TableCell>
                <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${start_price.slice(0, 30)}`}
                </TableCell>
                <TableCell align="left" sx={{ textTransform: "capitalize" }}>   
                    {`${end_price.slice(0, 30)}`}
                </TableCell>
                {/* <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${name.ar.slice(0, 30)}...`}
                </TableCell> */}
                {/* <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${address.en.slice(0, 30)}}...`}
                </TableCell> */}
                {/* <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    <Avatar alt={name.en} src={url} />
                </TableCell> */}
                {/* <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${description.en.slice(0, 10)}...`}
                </TableCell>
                <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${description.ar.slice(0, 10)}...`}
                </TableCell> */}
                {/* <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${payment_plans.en.slice(0, 10)}...`}
                </TableCell> */}
                {/* <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${payment_plans.ar.slice(0, 30)}...`}
                </TableCell> */}
                <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {trending === 1 ? <Avatar alt={name.en} src={'/assets/done.svg'} /> : <Avatar alt={name.en} src={'/assets/unDone.svg'} />}
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
                    Edit
                </MenuItem>
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
