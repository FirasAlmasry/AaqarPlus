import { Helmet } from "react-helmet-async";
import { paramCase } from "change-case";
import { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
// @mui
import {
    Tab,
    Tabs,
    Card,
    Table,
    Button,
    Tooltip,
    Divider,
    TableBody,
    Container,
    IconButton,
    TableContainer,
} from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// _mock_
// import { _consoltingList } from "../../../_mock/arrays";
// components
import Iconify from "../../../components/iconify";
import Scrollbar from "../../../components/scrollbar";
import ConfirmDialog from "../../../components/confirm-dialog";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
import { useSettingsContext } from "../../../components/settings";
import {
    useTable,
    getComparator,
    emptyRows,
    TableNoData,
    TableEmptyRows,
    TableHeadCustom,
    TableSelectedAction,
    TablePaginationCustom,
} from "../../../components/table";
// sections
import {
    BannersTableToolbar,
    BannersTableRow,
} from "../../../sections/@dashboard/banners/list";
import { useDeleteBannersMutation, useGetBannersQuery } from "../../../state/banners";

// ----------------------------------------------------------------------

const STATUS_OPTIONS = [];

const ROLE_OPTIONS = ["all", "activ", "unActiv"];

const TABLE_HEAD = [
    { id: "titlear", label: "Name ar", align: "left" },
    { id: "titleen", label: "Name en", align: "left" },
    { id: "descriptionar", label: "Description ar", align: "left" },
    { id: "descriptionen", label: "Description en", align: "left" },
    { id: "main", label: "Main", align: "left" },
    { id: "" },
];

// ----------------------------------------------------------------------

export default function BannersListPage() {
    const {
        dense,
        page,
        order,
        orderBy,
        rowsPerPage,
        setPage,
        //
        selected,
        setSelected,
        onSelectRow,
        onSelectAllRows,
        //
        onSort,
        onChangeDense,
        onChangePage,
        onChangeRowsPerPage,
    } = useTable();

    const { themeStretch } = useSettingsContext();

    const navigate = useNavigate();

    const { data, isBannersLoading, refetch } = useGetBannersQuery();

    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBannersLoading) {
            setTableData(data?.data?.data)
        }
    }, [data, tableData, isBannersLoading])

    const [openConfirm, setOpenConfirm] = useState(false);

    const [filterName, setFilterName] = useState("");

    const [filterRole, setFilterRole] = useState("all");

    const [filterStatus, setFilterStatus] = useState("all");

    const dataFiltered = applyFilter({
        inputData: tableData,
        comparator: getComparator(order, orderBy),
        filterName,
        filterRole,
        filterStatus,
    });

    const dataInPage = dataFiltered?.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

    const denseHeight = dense ? 52 : 72;

    const isFiltered =
        filterName !== "" || filterRole !== "all" || filterStatus !== "all";

    const isNotFound =
        (!dataFiltered.length && !!filterName) ||
        (!dataFiltered.length && !!filterRole) ||
        (!dataFiltered.length && !!filterStatus);

    const handleOpenConfirm = () => {
        setOpenConfirm(true);
    };

    const handleCloseConfirm = () => {
        setOpenConfirm(false);
    };

    const handleFilterStatus = (event, newValue) => {
        setPage(0);
        setFilterStatus(newValue);
    };

    const handleFilterName = (event) => {
        setPage(0);
        setFilterName(event.target.value);
    };

    const handleFilterRole = (event) => {
        setPage(0);
        setFilterRole(event.target.value);
    };
    const [deleteBanner] = useDeleteBannersMutation()
    const handleDeleteRow = async (id) => {
        await deleteBanner(id);
        const deleteRow = tableData?.filter((row) => row?.id !== id);
        setSelected([]);
        setTableData(deleteRow);
        refetch()
        if (page > 0) {
            if (dataInPage.length < 2) {
                setPage(page - 1);
            }
        }
    };

    const handleDeleteRows = (selectedRows) => {
        const deleteRows = tableData?.filter(
            (row) => !selectedRows.includes(row?.id)
        );
        setSelected([]);
        setTableData(deleteRows);

        if (page > 0) {
            if (selectedRows?.length === dataInPage?.length) {
                setPage(page - 1);
            } else if (selectedRows?.length === dataFiltered?.length) {
                setPage(0);
            } else if (selectedRows?.length > dataInPage?.length) {
                const newPage =
                    Math.ceil(
                        (tableData?.length - selectedRows?.length) / rowsPerPage
                    ) - 1;
                setPage(newPage);
            }
        }
    };

    const handleEditRow = (id) => {
        id = String(id);
        navigate(PATH_DASHBOARD.banners.edit(paramCase(id)));
    };

    const handleResetFilter = () => {
        setFilterName("");
        setFilterRole("all");
        setFilterStatus("all");
    };

    const is_available = tableData?.length === 3 
    console.log("🚀 ~ BannersListPage ~ is_available:", is_available)

    return (
        <>
            <Helmet>
                <title> Banners: List </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Banners List"
                    links={[
                        { name: "Dashboard", href: PATH_DASHBOARD.root },
                        {
                            name: "Banners",
                            href: PATH_DASHBOARD.banners.list,
                        },
                        { name: "List" },
                    ]}
                    action={
                        !is_available && 
                        <Button
                            component={RouterLink}
                            to={PATH_DASHBOARD.banners.new}
                            variant="contained"
                            startIcon={<Iconify icon="eva:plus-fill" />}
                        >
                            New Banner
                        </Button>
                    }
                />

                <Card>
                    <Tabs
                        value={filterStatus}
                        onChange={handleFilterStatus}
                        sx={{
                            px: 2,
                            bgcolor: "background.neutral",
                        }}
                    >
                        {STATUS_OPTIONS.map((tab) => (
                            <Tab key={tab} label={tab} value={tab} />
                        ))}
                    </Tabs>

                    <Divider />

                    <BannersTableToolbar
                        isFiltered={isFiltered}
                        filterName={filterName}
                        filterRole={filterRole}
                        optionsRole={ROLE_OPTIONS}
                        onFilterName={handleFilterName}
                        onFilterRole={handleFilterRole}
                        onResetFilter={handleResetFilter}
                    />

                    <TableContainer
                        sx={{ position: "relative", overflow: "unset" }}
                    >
                        <TableSelectedAction
                            dense={dense}
                            numSelected={selected?.length}
                            rowCount={tableData?.length}
                            onSelectAllRows={(checked) =>
                                onSelectAllRows(
                                    checked,
                                    tableData?.map((row) => row.id)
                                )
                            }
                            action={
                                <Tooltip title="Delete">
                                    <IconButton
                                        color="primary"
                                        onClick={handleOpenConfirm}
                                    >
                                        <Iconify icon="eva:trash-2-outline" />
                                    </IconButton>
                                </Tooltip>
                            }
                        />

                        <Scrollbar>
                            <Table
                                size={dense ? "small" : "medium"}
                                sx={{ minWidth: 800 }}
                            >
                                <TableHeadCustom
                                    order={order}
                                    orderBy={orderBy}
                                    headLabel={TABLE_HEAD}
                                    rowCount={tableData.length}
                                    numSelected={selected.length}
                                    onSort={onSort}
                                    onSelectAllRows={(checked) =>
                                        onSelectAllRows(
                                            checked,
                                            tableData.map((row) => row.id)
                                        )
                                    }
                                />

                                <TableBody>
                                    {dataFiltered
                                        ?.slice(
                                            page * rowsPerPage,
                                            page * rowsPerPage + rowsPerPage
                                        )
                                        ?.map((row) => (
                                            <BannersTableRow
                                                key={row?.id}
                                                row={row}
                                                selected={selected.includes(
                                                    row?.id
                                                )}
                                                onSelectRow={() =>
                                                    onSelectRow(row?.id)
                                                }
                                                onDeleteRow={() =>
                                                    handleDeleteRow(row?.id)
                                                }
                                                onEditRow={() =>
                                                    handleEditRow(row?.id)
                                                }
                                            />
                                        ))}

                                    <TableEmptyRows
                                        height={denseHeight}
                                        emptyRows={emptyRows(
                                            page,
                                            rowsPerPage,
                                            tableData?.length
                                        )}
                                    />

                                    <TableNoData isNotFound={isNotFound} />
                                </TableBody>
                            </Table>
                        </Scrollbar>
                    </TableContainer>


                    {/* <Box sx={{ display: 'flex', justifyContent: 'space-around', py: 2, alignItems: 'center' }}>

                        <Typography fontSize={'small'} >{rowsPerPage} item in each page</Typography>
                        <Select value={rowsPerPage} onChange={onRowsPerPageChange} style={{ width: '75px', height: '35px' }} >
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                        </Select>
                        <Pagination
                            count={data?.data?.last_page}
                            shape="rounded"
                            page={currentPage}
                            showFirstButton
                            showLastButton
                            onChange={(event, value) => onPageChange(value)}
                        />
                        <Typography fontSize={'small'} >item available {data?.data?.total}</Typography>
                    </Box> */}
                    {/* <TablePaginationCustom
                        count={data?.data?.total}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        onPageChange={onChangePage}
                        onRowsPerPageChange={onChangeRowsPerPage}
                        //
                        dense={dense}
                        onChangeDense={onChangeDense}
                    /> */}
                </Card>
            </Container>

            <ConfirmDialog
                open={openConfirm}
                onClose={handleCloseConfirm}
                title="Delete"
                content={
                    <>
                        Are you sure want to delete{" "}
                        <strong> {selected.length} </strong> items?
                    </>
                }
                action={
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                            handleDeleteRows(selected);
                            handleCloseConfirm();
                        }}
                    >
                        Delete
                    </Button>
                }
            />
        </>
    );
}

// ----------------------------------------------------------------------

function applyFilter({
    inputData,
    comparator,
    filterName,
    filterStatus,
    filterRole,
}) {
    const stabilizedThis = inputData?.map((el, index) => [el, index]);

    stabilizedThis?.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });

    inputData = stabilizedThis?.map((el) => el[0]);

    if (filterName) {
        inputData = inputData?.filter(
            (user) =>
                user.name.ar
                    .toLowerCase()
                    .indexOf(filterName.toLowerCase()) !== -1
        );
    }

    if (filterStatus !== "all") {
        inputData = inputData.filter((user) => user.active === filterStatus);
    }

    if (filterRole !== "all") {
        inputData = inputData.filter((user) => user.role === filterRole);
    }

    return inputData;
}