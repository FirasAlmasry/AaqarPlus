import PropTypes from "prop-types";
import { useState } from "react";
// @mui
import {
    // Stack,
    Avatar,
    Button,
    Checkbox,
    TableRow,
    MenuItem,
    TableCell,
    IconButton,
    Typography,
    // Typography,
} from "@mui/material";
// components
// import Label from "../../../../components/label";
import Iconify from "../../../../components/iconify";
import MenuPopover from "../../../../components/menu-popover";
import ConfirmDialog from "../../../../components/confirm-dialog";
import { Stack } from "@mui/system";
import { useGetAreasIdQuery } from "../../../../state/areas";

// ----------------------------------------------------------------------

DevelopersTableRow.propTypes = {
    row: PropTypes.object,
    selected: PropTypes.bool,
    onEditRow: PropTypes.func,
    onDeleteRow: PropTypes.func,
    onSelectRow: PropTypes.func,
};

export default function DevelopersTableRow({
    row,
    selected,
    onEditRow,
    onSelectRow,
    onDeleteRow,
}) {
    const { image, name, bio_title, bio_description, top_project_title, top_project_description, area_id, } = row;
    const url = `https://aqarbackend.revampbrands.com/storage/${image}`
    const [openConfirm, setOpenConfirm] = useState(false);

    const [openPopover, setOpenPopover] = useState(null);
    const { data: areas, isCoinsLoading } = useGetAreasIdQuery(area_id);
    const area_name = areas?.data?.name?.en
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
                {/* <TableCell padding="checkbox">
                    <Checkbox checked={selected} onClick={onSelectRow} />
                </TableCell> */}
                <TableCell>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar alt={name.en} src={url} />

                        <Typography variant="subtitle2" noWrap>
                            {`${name.ar.slice(0, 20)}...`}
                        </Typography>
                    </Stack>
                </TableCell>
                {/* <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${name.ar.slice(0, 20)}...`}
                </TableCell> */}
                {/* <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${bio_title.en.slice(0, 20)}}...`}
                </TableCell> */}
                {/* <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${bio_title.ar.slice(0, 20)}}...`}
                </TableCell> */}
                {/* <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${bio_description.en.slice(0, 10)}...`}
                </TableCell>
                <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${bio_description.ar.slice(0, 10)}...`}
                </TableCell> */}
                {/* <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${top_project_title.en.slice(0, 10)}}...`}
                </TableCell> */}
                {/* <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${top_project_title.ar.slice(0, 20)}}...`}
                </TableCell> */}
                {/* <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${top_project_description.en.slice(0, 10)}...`}
                </TableCell>
                <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {`${top_project_description.ar.slice(0, 10)}...`}
                </TableCell> */}
                <TableCell align="center" sx={{ textTransform: "capitalize" }}>
                    {area_name}
                </TableCell>
                {/* <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {compounds.length > 0 ? compounds[0] : 'No Compounds View' }
                </TableCell> */}
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
