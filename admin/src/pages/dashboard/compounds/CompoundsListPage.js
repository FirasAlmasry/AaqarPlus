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
    CompoundsTableToolbar,
    CompoundsTableRow,
} from "../../../sections/@dashboard/compounds/list";
import { useDeleteCompoundsMutation, useGetCompoundsQuery } from "../../../state/compounds";
import { useSnackbar } from "notistack";

// ----------------------------------------------------------------------

const STATUS_OPTIONS = [];

const ROLE_OPTIONS = ["all", "activ", "unActiv"];

const TABLE_HEAD = [
    { id: "nameAr", label: "NameAr ", align: "left" },
    { id: "addressAr", label: "AddressAr", align: "left" },
    { id: "whatsapp", label: "whatsapp", align: "left" },
    { id: "phone_number", label: "phone", align: "left" },
    { id: "start_price", label: "start price", align: "left" },
    { id: "end_price", label: "end price", align: "left" },
    // { id: "payment_plansAr", label: "payment plans Ar", align: "left" },
    { id: "trending", label: "trending", align: "left" },
    { id: "", label: "", align: "left" },
    // { id: "nameEn", label: "nameEn", align: "left" },
    // { id: "addressEn", label: "addressEn", align: "left" },
    // { id: "image_location", label: "location", align: "left" },
    // { id: "descriptionAr", label: "descriptionAr", align: "left" },
    // { id: "descriptionEn", label: "descriptionEn", align: "left" },
    // { id: "payment_plansEn", label: "payment_plansEn", align: "left" },
];
// ----------------------------------------------------------------------

export default function CompoundsListPage() {
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

                const { data, isCompoundsLoading, refetch } = useGetCompoundsQuery();

                const [tableData, setTableData] = useState([]);
                useEffect(() => {
                    if (data && !isCompoundsLoading) {
                        setTableData(data?.data?.data)
                    }
                }, [data, tableData, isCompoundsLoading])

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
                const [deleteCompounds] = useDeleteCompoundsMutation()

                const { enqueueSnackbar } = useSnackbar();
                const handleDeleteRow = async (id) => {
                    const response = await deleteCompounds(id);
                    if (response && response.error) {
                        console.error("An error occurred while deleting area:", response.error);
                        const errorMessage = response.error.data.message || 'An error occurred';
                        enqueueSnackbar(errorMessage, { variant: 'error' });
                        handleCloseConfirm(); // تنفيذ الدالة لإغلاق الـ "بوب آب"
                        setOpenConfirm(false);
                    } else {
                        console.log("Area deleted successfully");
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

                const handleEditRow = (id) => {
                    id = String(id);
                    navigate(PATH_DASHBOARD.compounds.edit(paramCase(id)));
                    refetch();
                };

                const handleResetFilter = () => {
                    setFilterName("");
                    setFilterRole("all");
                    setFilterStatus("all");
                };

                return (
                    <>
                        <Helmet>
                            <title> Compounds: List </title>
                        </Helmet>

                        <Container maxWidth={themeStretch ? false : "lg"}>
                            <CustomBreadcrumbs
                                heading="Compounds List"
                                links={[
                                    { name: "Dashboard", href: PATH_DASHBOARD.root },
                                    {
                                        name: "Compounds",
                                        href: PATH_DASHBOARD.compounds.list,
                                    },
                                    { name: "List" },
                                ]}
                                action={
                                    <Button
                                        component={RouterLink}
                                        to={PATH_DASHBOARD.compounds.new}
                                        variant="contained"
                                        startIcon={<Iconify icon="eva:plus-fill" />}
                                    >
                                        New Compound
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

                                <CompoundsTableToolbar
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
                                                        <CompoundsTableRow
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
                                                        tableData.length
                                                    )}
                                                />

                                                <TableNoData isNotFound={isNotFound} />
                                            </TableBody>
                                        </Table>
                                    </Scrollbar>
                                </TableContainer>

                                <TablePaginationCustom
                                    count={data?.data?.per_page}
                                    page={page}
                                    rowsPerPage={rowsPerPage}
                                    onPageChange={onChangePage}
                                    onRowsPerPageChange={onChangeRowsPerPage}
                                    //
                                    dense={dense}
                                    onChangeDense={onChangeDense}
                                />
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
