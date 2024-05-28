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

BannersTableRow.propTypes = {
    row: PropTypes.object,
    selected: PropTypes.bool,
    onEditRow: PropTypes.func,
    onDeleteRow: PropTypes.func,
    onSelectRow: PropTypes.func,
};

export default function BannersTableRow({
    row,
    selected,
    onEditRow,
    onSelectRow,
    onDeleteRow,
}) {
    const { title, image, description, is_main } = row;
    const url = `https://aqarbackend.revampbrands.com/storage/${image}`
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
                {/* <TableCell padding="checkbox">
                    <Checkbox checked={selected} onClick={onSelectRow} />
                </TableCell> */}

                <TableCell>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar alt={title?.ar} src={url} />

                        <Typography variant="subtitle2" noWrap>
                            {title?.ar}
                        </Typography>
                    </Stack>
                </TableCell>
                <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    {title?.en}
                </TableCell>
                <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    <div className="desc" dangerouslySetInnerHTML={{ __html: description?.ar }}></div>
                </TableCell>
                <TableCell align="left" sx={{ textTransform: "capitalize" }}>
                    <div className="desc" dangerouslySetInnerHTML={{ __html: description?.en }}></div>
                </TableCell>
                <TableCell align="center" sx={{ textTransform: "capitalize" }}>
                    {is_main === 1 ? <Avatar alt={title.en} src={'/assets/done.svg'} /> : <Avatar alt={title.en} src={'/assets/unDone.svg'} />}
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