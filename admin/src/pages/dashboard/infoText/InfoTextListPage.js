import { Helmet } from "react-helmet-async";
import { snakeCase } from "change-case";
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
    InfoTextTableToolbar,
    InfoTextTableRow,
} from "../../../sections/@dashboard/infoText/list";
import { useGetInfoTextIdQuery } from "../../../state/info";

// ----------------------------------------------------------------------

const STATUS_OPTIONS = [];

const ROLE_OPTIONS = ["all", "activ", "unActiv"];

const TABLE_HEAD = [
    { id: "title", label: "Page Name", align: "left" },
    { id: "value ar", label: "Ar Page Content", align: "left" },
    { id: "value en", label: "En Page Content", align: "left" },
    // { id: "description", label: "Description", align: "left" },
    // { id: "cloudinary_id", label: "cloudinary", align: "left" },
    // { id: "type", label: "type", align: "left" },
    { id: "" },
];

// ----------------------------------------------------------------------

export default function InfoTextListPage() {
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

    const { data: dataDesign, isServiseLoading } = useGetInfoTextIdQuery('design');
    const [tableDesign, settableDesign] = useState([]);
    useEffect(() => { 
        if (dataDesign && !isServiseLoading) {
            settableDesign(dataDesign?.data)
        }
    }, [dataDesign, tableDesign, isServiseLoading])

    const { data: dataContact, isContactLoading } = useGetInfoTextIdQuery('description_contact');
    const [tableContact, settableContact] = useState([]);
    useEffect(() => { 
        if (dataContact && !isContactLoading) {
            settableContact(dataContact?.data)
        }
    }, [dataContact, tableContact, isContactLoading])

    const { data: dataAbout_us, isAbout_usLoading } = useGetInfoTextIdQuery('about_us');
    const [tableAbout_us, settableAbout_us] = useState([]);
    useEffect(() => { 
        if (dataAbout_us && !isAbout_usLoading) {
            settableAbout_us(dataAbout_us?.data)
        }
    }, [dataAbout_us, tableAbout_us, isAbout_usLoading])

    const { data: dataAddress, isAddressLoading } = useGetInfoTextIdQuery('address');
    const [tableAddress, settableAddress] = useState([]);
    useEffect(() => { 
        if (dataAddress && !isAddressLoading) {
            settableAddress(dataAddress?.data)
        }
    }, [dataAddress, tableAddress, isAddressLoading])
    
    const { data: dataDescription_buyer, isDescription_buyerLoading } = useGetInfoTextIdQuery('description_buyer');
    const [tableDescription_buyer, settableDescription_buyer] = useState([]);
    useEffect(() => { 
        if (dataDescription_buyer && !isDescription_buyerLoading) {
            settableDescription_buyer(dataDescription_buyer?.data)
        }
    }, [dataDescription_buyer, tableDescription_buyer, isDescription_buyerLoading])
    
    const { data: dataDescription_seller, isDescription_sellerLoading } = useGetInfoTextIdQuery('description_seller');
    const [tableDescription_seller, settableDescription_seller] = useState([]);
    useEffect(() => { 
        if (dataDescription_seller && !isDescription_sellerLoading) {
            settableDescription_seller(dataDescription_seller?.data)
        }
    }, [dataDescription_seller, tableDescription_seller, isDescription_sellerLoading])
    
    const { data: dataTerms_and_conditions, isTerms_and_conditionsLoading } = useGetInfoTextIdQuery('terms_and_conditions');
    const [tableTerms_and_conditions, settableTerms_and_conditions] = useState([]);
    useEffect(() => { 
        if (dataTerms_and_conditions && !isTerms_and_conditionsLoading) {
            settableTerms_and_conditions(dataTerms_and_conditions?.data)
        }
    }, [dataTerms_and_conditions, tableTerms_and_conditions, isTerms_and_conditionsLoading])
    
    const { data: dataAcceptable_use, isAcceptable_useLoading } = useGetInfoTextIdQuery('acceptable_use');
    const [tableAcceptable_use, settableAcceptable_use] = useState([]);
    useEffect(() => { 
        if (dataAcceptable_use && !isAcceptable_useLoading) {
            settableAcceptable_use(dataAcceptable_use?.data)
        }
    }, [dataAcceptable_use, tableAcceptable_use, isAcceptable_useLoading])
    
    const { data: dataAutomated_queries, isAutomated_queriesLoading } = useGetInfoTextIdQuery('automated_queries');
    const [tableAutomated_queries, settableAutomated_queries] = useState([]);
    useEffect(() => { 
        if (dataAutomated_queries && !isAutomated_queriesLoading) {
            settableAutomated_queries(dataAutomated_queries?.data)
        }
    }, [dataAutomated_queries, tableAutomated_queries, isAutomated_queriesLoading])

    const { data: dataOur_products, isOur_productsLoading } = useGetInfoTextIdQuery('our_products');
    const [tableOur_products, settableOur_products] = useState([]);
    useEffect(() => { 
        if (dataOur_products && !isOur_productsLoading) {
            settableOur_products(dataOur_products?.data)
        }
    }, [dataOur_products, tableOur_products, isOur_productsLoading])
    
    const { data: dataDescription_launching, isDescription_launchingLoading } = useGetInfoTextIdQuery('description_launching');
    const [tableDescription_launching, settableDescription_launching] = useState([]);
    useEffect(() => { 
        if (dataDescription_launching && !isDescription_launchingLoading) {
            settableDescription_launching(dataDescription_launching?.data)
        }
    }, [dataDescription_launching, tableDescription_launching, isDescription_launchingLoading])

    const [openConfirm, setOpenConfirm] = useState(false);

    const [filterName, setFilterName] = useState("");

    const [filterRole, setFilterRole] = useState("all");

    const [filterStatus, setFilterStatus] = useState("all");

    const dataFiltered = applyFilter({
        inputData: tableDesign,
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
        (dataFiltered?.length && filterName) ||
        (dataFiltered?.length && filterRole) ||
        (dataFiltered?.length && filterStatus);

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

    const handleDeleteRows = (selectedRows) => {
        const deleteRows = tableDesign?.filter(
            (row) => !selectedRows.includes(row?.id)
        );
        setSelected([]);
        settableDesign(deleteRows);

        if (page > 0) {
            if (selectedRows?.length === dataInPage?.length) {
                setPage(page - 1);
            } else if (selectedRows?.length === dataFiltered?.length) {
                setPage(0);
            } else if (selectedRows?.length > dataInPage?.length) {
                const newPage =
                    Math.ceil(
                        (tableDesign?.length - selectedRows?.length) / rowsPerPage
                    ) - 1;
                setPage(newPage);
            }
        }
    };

    const handleEditRow = (id) => {
        const paramName = snakeCase(id);
        navigate(PATH_DASHBOARD.infoText.edit(paramName));
    };

    const handleResetFilter = () => {
        setFilterName("");
        setFilterRole("all");
        setFilterStatus("all");
    };

    return (
        <>
            <Helmet>
                <title> InfoText: List </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Pages Content List"
                    links={[
                        { name: "Dashboard", href: PATH_DASHBOARD.root },
                        {
                            name: "Pages Content",
                            href: PATH_DASHBOARD.infoText.list,
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

                    <InfoTextTableToolbar
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
                            rowCount={tableDesign?.length}
                            onSelectAllRows={(checked) =>
                                onSelectAllRows(
                                    checked,
                                    tableDesign?.map((row) => row?.id)
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
                                    rowCount={tableDesign?.length}
                                    numSelected={selected?.length}
                                    onSort={onSort}
                                    onSelectAllRows={(checked) =>
                                        onSelectAllRows(
                                            checked,
                                            tableDesign.map((row) => row.id)
                                        )
                                    }
                                />

                                <TableBody>
                                            <InfoTextTableRow
                                                key={tableDesign?.id}
                                                row={tableDesign}
                                                selected={selected.includes(
                                                    tableDesign?.id
                                                )}
                                                onSelectRow={() =>
                                                    onSelectRow(tableDesign?.id)
                                                }
                                                onEditRow={() =>
                                                    handleEditRow(tableDesign?.info)
                                                }
                                            />
                                            <InfoTextTableRow
                                                key={tableContact?.id}
                                                row={tableContact}
                                                selected={selected.includes(
                                                    tableContact?.id
                                                )}
                                                onSelectRow={() =>
                                                    onSelectRow(tableContact?.id)
                                                }
                                                onEditRow={() =>
                                                    handleEditRow(tableContact?.info)
                                                }
                                            />
                                            <InfoTextTableRow
                                                key={tableAbout_us?.id}
                                                row={tableAbout_us}
                                                selected={selected.includes(
                                                    tableAbout_us?.id
                                                )}
                                                onSelectRow={() =>
                                                    onSelectRow(tableAbout_us?.id)
                                                }
                                                onEditRow={() =>
                                                    handleEditRow(tableAbout_us?.info)
                                                }
                                            />
                                            <InfoTextTableRow
                                                key={tableAddress?.id}
                                                row={tableAddress}
                                                selected={selected.includes(
                                                    tableAddress?.id
                                                )}
                                                onSelectRow={() =>
                                                    onSelectRow(tableAddress?.id)
                                                }
                                                onEditRow={() =>
                                                    handleEditRow(tableAddress?.info)
                                                }
                                            />
                                            <InfoTextTableRow
                                                key={tableDescription_buyer?.id}
                                                row={tableDescription_buyer}
                                                selected={selected.includes(
                                                    tableDescription_buyer?.id
                                                )}
                                                onSelectRow={() =>
                                                    onSelectRow(tableDescription_buyer?.id)
                                                }
                                                onEditRow={() =>
                                                    handleEditRow(tableDescription_buyer?.info)
                                                }
                                            />
                                            <InfoTextTableRow
                                                key={tableDescription_seller?.id}
                                                row={tableDescription_seller}
                                                selected={selected.includes(
                                                    tableDescription_seller?.id
                                                )}
                                                onSelectRow={() =>
                                                    onSelectRow(tableDescription_seller?.id)
                                                }
                                                onEditRow={() =>
                                                    handleEditRow(tableDescription_seller?.info)
                                                }
                                            />
                                            <InfoTextTableRow
                                                key={tableTerms_and_conditions?.id}
                                                row={tableTerms_and_conditions}
                                                selected={selected.includes(
                                                    tableTerms_and_conditions?.id
                                                )}
                                                onSelectRow={() =>
                                                    onSelectRow(tableTerms_and_conditions?.id)
                                                }
                                                onEditRow={() =>
                                                    handleEditRow(tableTerms_and_conditions?.info)
                                                }
                                            />
                                            <InfoTextTableRow
                                                key={tableAcceptable_use?.id}
                                                row={tableAcceptable_use}
                                                selected={selected.includes(
                                                    tableAcceptable_use?.id
                                                )}
                                                onSelectRow={() =>
                                                    onSelectRow(tableAcceptable_use?.id)
                                                }
                                                onEditRow={() =>
                                                    handleEditRow(tableAcceptable_use?.info)
                                                }
                                            />
                                            <InfoTextTableRow
                                                key={tableAutomated_queries?.id}
                                                row={tableAutomated_queries}
                                                selected={selected.includes(
                                                    tableAutomated_queries?.id
                                                )}
                                                onSelectRow={() =>
                                                    onSelectRow(tableAutomated_queries?.id)
                                                }
                                                onEditRow={() =>
                                                    handleEditRow(tableAutomated_queries?.info)
                                                }
                                            />

                                            <InfoTextTableRow
                                                key={tableOur_products?.id}
                                                row={tableOur_products}
                                                selected={selected.includes(
                                                    tableOur_products?.id
                                                )}
                                                onSelectRow={() =>
                                                    onSelectRow(tableOur_products?.id)
                                                }
                                                onEditRow={() =>
                                                    handleEditRow(tableOur_products?.info)
                                                }
                                            />
                                            <InfoTextTableRow
                                                key={tableDescription_launching?.id}
                                                row={tableDescription_launching}
                                                selected={selected.includes(
                                                    tableDescription_launching?.id
                                                )}
                                                onSelectRow={() =>
                                                    onSelectRow(tableDescription_launching?.id)
                                                }
                                                onEditRow={() =>
                                                    handleEditRow(tableDescription_launching?.info)
                                                }
                                            />

                                    <TableEmptyRows
                                        height={denseHeight}
                                        emptyRows={emptyRows(
                                            page,
                                            rowsPerPage,
                                            tableDesign?.length
                                        )}
                                    />

                                    <TableNoData isNotFound={isNotFound} />
                                </TableBody>
                            </Table>
                        </Scrollbar>
                    </TableContainer>

                    <TablePaginationCustom
                        count={11}
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

            {/* <ConfirmDialog
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
            /> */}
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
    const stabilizedThis = inputData?.design?.map((el, index) => {
        return [el, index]
    })

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
