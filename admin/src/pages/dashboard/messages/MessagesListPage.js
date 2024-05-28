import { Helmet } from "react-helmet-async";
// import { paramCase } from "change-case";
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
    Typography,
    Pagination,
    Select,
    MenuItem,
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
    // TablePaginationCustom,
} from "../../../components/table";
// sections
import {
    MessagesTableToolbar,
    MessagesTableRow,
} from "../../../sections/@dashboard/messages/list";
import { useDeleteMessagesMutation, useGetMessagesQuery } from "../../../state/message";
import { Box } from "@mui/system";
import { parse, isToday, isYesterday, startOfWeek, isThisMonth, isSameMonth, subMonths, startOfMonth, endOfMonth } from 'date-fns';

// ----------------------------------------------------------------------

const STATUS_OPTIONS = ["today", "yesterday", "last week", "this month","last month",];

const ROLE_OPTIONS = ["all", "activ", "unActiv"];

const TABLE_HEAD = [
    { id: "name", label: "Name", align: "left" },
    { id: "preferred_location", label: "Unit Type", align: "left" },
    { id: "location", label: "Location", align: "left" },
    { id: "phone_number", label: "Phone Number", align: "left" },
    { id: "description", label: "Description", align: "left" },
    { id: "Date", label: "Date", align: "left" },
    { id: "", label: "", align: "left" },
];

// ----------------------------------------------------------------------

export default function MessagesListPage() {
    const {
        dense,
        page,
        order,
        orderBy,
        // rowsPerPage,
        setPage,
        //
        selected,
        setSelected,
        onSelectRow,
        onSelectAllRows,
        //
        onSort,
        // onChangeDense,
        // onChangePage,
        // onChangeRowsPerPage,
    } = useTable();

    const { themeStretch } = useSettingsContext();

    // const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const onRowsPerPageChange = (event) => {
        setRowsPerPage(event.target.value);
        setCurrentPage(1); // عندما يتم تغيير عدد العناصر في كل صفحة، يجب عليك إعادة تعيين الصفحة الحالية إلى الصفحة الأولى
    };
    const { data, isServiseLoading, refetch } = useGetMessagesQuery({currentPage, limit: rowsPerPage});

    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isServiseLoading) {
            setTableData(data?.data?.data)
        }
    }, [data, tableData, isServiseLoading])

    const [openConfirm, setOpenConfirm] = useState(false);

    const [filterName, setFilterName] = useState("");

    const [filterRole, setFilterRole] = useState("all");

    const [filterStatus, setFilterStatus] = useState("today");

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
        filterName !== "" || filterRole !== "all" || filterStatus !== "today";

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

    const [deleteFounder] = useDeleteMessagesMutation()
    
    const handleDeleteRow = async (id) => {
        await deleteFounder(id);
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

    const handleResetFilter = () => {
        setFilterName("");
        setFilterRole("all");
        setFilterStatus("today");
    }; 
    const handleExport = () => {
        const dataToExport = applyFilter({
            inputData: tableData,
            comparator: getComparator(order, orderBy),
            filterName,
            filterRole,
            filterStatus,
        });
    const today = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).replace(/\//g, '-');
    const filename = `messages_${filterStatus}_${today}.csv`;

    exportToCsv(dataToExport, filename);
    //     exportToCsv(dataToExport, 'messages.csv');
    };

    return (
        <>
            <Helmet>
                <title> Messages: List </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Messages List"
                    links={[
                        { name: "Dashboard", href: PATH_DASHBOARD.root },
                        {
                            name: "Messages",
                            href: PATH_DASHBOARD.messages.list,
                        },
                        { name: "List" },
                    ]}/>

                <Card>
                    <Box sx={{
                        px: 2,
                        py:1,
                        bgcolor: "background.neutral",
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <Tabs
                            value={filterStatus}
                            onChange={handleFilterStatus}
                            
                        >
                            {STATUS_OPTIONS.map((tab) => (
                                <Tab key={tab} label={tab} value={tab} />
                            ))}
                        </Tabs>
                        <Button onClick={handleExport} variant="contained" color="primary">
                            Export to CSV
                        </Button>
                    </Box>
                    <Divider />

                    <MessagesTableToolbar
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
                                            <MessagesTableRow
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
                                                }/>
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
                        <Typography fontSize={'small'} >{rowsPerPage} item in each page</Typography>
                        <Select value={rowsPerPage} onChange={onRowsPerPageChange} style={{ width: '75px', height: '35px' }}>
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
                    </Box>
                    {/* <TablePaginationCustom
                        count={data?.data?.per_page}
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

// function applyFilter({
//     inputData,
//     comparator,
//     filterName,
//     filterStatus,
//     filterRole,
// }) {
//     const stabilizedThis = inputData.map((el, index) => [el, index]);

//     stabilizedThis.sort((a, b) => {
//         const order = comparator(a[0], b[0]);
//         if (order !== 0) return order;
//         return a[1] - b[1];
//     });

//     inputData = stabilizedThis.map((el) => el[0]);

//     if (filterName) {
//         inputData = inputData.filter(
//             (user) =>
//                 user.name.ar
//                     .toLowerCase()
//                     .indexOf(filterName.toLowerCase()) !== -1
//         );
//     }

//     if (filterStatus !== "today") {
//         inputData = inputData.filter((user) => user.active === filterStatus);
//     }

//     if (filterRole !== "all") {
//         inputData = inputData.filter((user) => user.role === filterRole);
//     }

//     return inputData;
// }
function applyFilter({ inputData, comparator, filterName, filterStatus, filterRole }) {
    const stabilizedThis = inputData.map((el, index) => [el, index]);

    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });

    inputData = stabilizedThis.map((el) => el[0]);

    if (filterName) {
        inputData = inputData.filter(
            (user) => user.name.ar.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
        );
    }

    if (filterStatus) {
        inputData = inputData.filter((user) => {
            const createdAt = parse(user.created_at, 'yyyy-MM-dd hh:mm a', new Date());
            switch (filterStatus) {
                case "today":
                    return isToday(createdAt);
                case "yesterday":
                    return isYesterday(createdAt);
                case "last week":
                    const startOfLastWeek = startOfWeek(new Date(), { weekStartsOn: 0 });
                    return createdAt >= startOfLastWeek && createdAt < new Date();
                case "this month":
                    return isThisMonth(createdAt);
                case "last month":
                    const startOfCurrentMonth = startOfMonth(new Date());
                    const startOfPrevMonth = startOfMonth(subMonths(new Date(), 1));
                    const endOfPrevMonth = endOfMonth(subMonths(new Date(), 1));
                    return createdAt >= startOfPrevMonth && createdAt <= endOfPrevMonth;
                default:
                    return true;
            }
        });
    }

    if (filterRole !== "all") {
        inputData = inputData.filter((user) => user.role === filterRole);
    }

    return inputData;
}

// function getComparator(order, orderBy) {
//     return order === 'desc'
//         ? (a, b) => descendingComparator(a, b, orderBy)
//         : (a, b) => -descendingComparator(a, b, orderBy);
// }

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}
function exportToCsv(data, filename) {
    const csvData = [];
    const headers = Object.keys(data[0]);
    csvData.push(headers.join(','));

    data.forEach(row => {
        const values = headers.map(header => JSON.stringify(row[header], replacer));
        csvData.push(values.join(','));
    });

    const csvContent = csvData.join('\n');
    const csvBlob = new Blob(["\uFEFF", csvContent], { type: 'text/csv;charset=utf-8;' });

    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(csvBlob, filename);
    } else {
        const downloadLink = document.createElement('a');
        const url = URL.createObjectURL(csvBlob);

        downloadLink.href = url;
        downloadLink.setAttribute('download', filename);
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
}


function replacer(key, value) {
    if (value === null) {
        return '';
    }
    return value;
}