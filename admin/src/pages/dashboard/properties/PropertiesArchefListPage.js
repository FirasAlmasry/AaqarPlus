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
    Box,
    Typography,
    Pagination,
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
    PropertiesTableToolbar,
    PropertiesTableRow,
} from "../../../sections/@dashboard/properties/list";
import { useDeleteArchefPropertiesMutation, useDeletePropertiesMutation, useGetPropertiesQuery, useRestorePropertiesMutation } from "../../../state/properties";
import { useSnackbar } from "notistack";

// ----------------------------------------------------------------------

const STATUS_OPTIONS = [];

const ROLE_OPTIONS = ["all", "activ", "unActiv"];

const TABLE_HEAD = [




    { id: "ref_number", label: "Ref Number", align: "left" },
    { id: "nameAr", label: "nameAr ", align: "left" },
    { id: "start_price", label: "Start Price", align: "left" },
    { id: "end_price", label: "End Price", align: "left" },
    { id: "house_area", label: "House Area", align: "left" },
    { id: "bedrooms", label: "Bedrooms", align: "left" },
    { id: "bathrooms", label: "Bathrooms", align: "left" },
    { id: "", label: "", align: "left" },
];
// ----------------------------------------------------------------------

export default function PropertiesListPage() {
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

    

    const [openConfirm, setOpenConfirm] = useState(false);

    const [filterName, setFilterName] = useState("");

    const [filterRole, setFilterRole] = useState("all");

    const [filterStatus, setFilterStatus] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    const { data, isPropertiesLoading, refetch } = useGetPropertiesQuery({ onlyTrashed: 'true', currentPage, limit: rowsPerPage, ref_number: filterName });
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isPropertiesLoading) {
            setTableData(data?.data?.data)
        }
    }, [data, tableData, isPropertiesLoading])
    useEffect(() => {
        // Call applyFilter whenever filterName changes
        setTableData(applyFilter({
            inputData: data?.data?.data || [], // Ensure inputData is defined
            comparator: getComparator(order, orderBy),
            filterName,
            filterStatus,
            filterRole,
        }));

    }, [filterName, data, order, orderBy, filterStatus, filterRole]);
    const dataFiltered = applyFilter({
        inputData: tableData,
        comparator: getComparator(order, orderBy),
        filterName,
        filterRole,
        filterStatus,
    });
    // const dataFiltered = applyFilter({
    //     inputData: tableData,
    //     comparator: getComparator(order, orderBy),
    //     filterName,
    //     filterRole,
    //     filterStatus,
    // });

    const dataInPage = dataFiltered.slice(
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
    const { enqueueSnackbar } = useSnackbar();
    const [deleteProperties] = useDeleteArchefPropertiesMutation()

    const handleDeleteRow = async (id) => {
        const response = await deleteProperties(id);
        if (response && response.error) {
            console.error("An error occurred while deleting area:", response.error);
            const errorMessage = response.error.data.message || 'An error occurred';
            enqueueSnackbar(errorMessage, { variant: 'error' });
            handleCloseConfirm(); // تنفيذ الدالة لإغلاق الـ "بوب آب"
            setOpenConfirm(false);
        } else {
            const deleteRow = tableData?.filter((row) => row?.id !== id);
            setSelected([]);
            setTableData(deleteRow);
            refetch();
            handleCloseConfirm(); // تنفيذ الدالة لإغلاق الـ "بوب آب"
            setOpenConfirm(false);
            if (page > 0) {
                if (dataInPage.length < 2) {
                    setPage(page - 1);
                }
            }
        }
    };

    const handleDeleteRows = (selectedRows) => {
        const deleteRows = tableData.filter(
            (row) => !selectedRows.includes(row.id)
        );
        setSelected([]);
        setTableData(deleteRows);

        if (page > 0) {
            if (selectedRows.length === dataInPage.length) {
                setPage(page - 1);
            } else if (selectedRows.length === dataFiltered.length) {
                setPage(0);
            } else if (selectedRows.length > dataInPage.length) {
                const newPage =
                    Math.ceil(
                        (tableData.length - selectedRows.length) / rowsPerPage
                    ) - 1;
                setPage(newPage);
            }
        }
    };

    const [restorePropertiesMutation] = useRestorePropertiesMutation();
    const handleEditRow = (id) => {
        const handleRestore = async () => {
            try {
                // تنفيذ الدالة restoreProperties مع استخدام معرف الخاصية (id)
                const response = await restorePropertiesMutation(id);
                // يمكنك تنفيذ الإجراءات التي تحتاج إليها بعد الاسترداد هنا
                console.log('Properties restored successfully:', response);
                refetch();
            } catch (error) {
                // معالجة الأخطاء إذا حدثت
                console.error('Failed to restore properties:', error);

            }
        };

        // استدعاء دالة handleRestore عند الحاجة إلى استرداد الخاصية
        handleRestore();
    };

    const handleResetFilter = () => {
        setFilterName("");
        setFilterRole("all");
        setFilterStatus("all");
    };

    return (
        <>
            <Helmet>
                <title> Properties: List </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Properties Archive List"
                    links={[
                        { name: "Dashboard", href: PATH_DASHBOARD.root },
                        {
                            name: "Properties",
                            href: PATH_DASHBOARD.properties.list,
                        },
                        { name: "List" },
                    ]}
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

                    <PropertiesTableToolbar
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
                            numSelected={selected.length}
                            rowCount={tableData.length}
                            onSelectAllRows={(checked) =>
                                onSelectAllRows(
                                    checked,
                                    tableData.map((row) => row.id)
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
                                        .slice(
                                            page * rowsPerPage,
                                            page * rowsPerPage + rowsPerPage
                                        )
                                        .map((row) => (
                                            <PropertiesTableRow
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
                                                txt="Restore"
                                            />
                                        ))}

                                    <TableEmptyRows
                                        height={denseHeight}
                                        emptyRows={emptyRows(
                                            page,
                                            rowsPerPage,
                                            tableData.length
                                        )}
                                    />

                                    <TableNoData isNotFound={isNotFound} />
                                </TableBody>
                            </Table>
                        </Scrollbar>
                    </TableContainer>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', py: 2, alignItems: 'center' }}>
                        <Typography fontSize={'small'} >5 item in each page</Typography>
                        <Pagination
                            count={data?.data?.last_page}
                            shape="rounded"
                            page={currentPage}
                            showFirstButton
                            showLastButton
                            onChange={(event, value) => onPageChange(value)}
                        />
                        <Typography fontSize={'small'} >item available {data?.data?.total}</Typography>
                    </Box>
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
    const stabilizedThis = inputData.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });

    inputData = stabilizedThis.map((el) => el[0]);

    if (filterName) {
        inputData = inputData.filter(
            (user) =>
                user.ref_number
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
