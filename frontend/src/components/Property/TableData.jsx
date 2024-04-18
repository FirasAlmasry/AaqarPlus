import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#E6E3DE',
        color: '#062371',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



const TableData = ({ tableData }) => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Reference No.</StyledTableCell>
                            <StyledTableCell align="center">Bedrooms</StyledTableCell>
                            <StyledTableCell align="center">Bathrooms</StyledTableCell>
                            <StyledTableCell align="center">DeliveryIn</StyledTableCell>
                            <StyledTableCell align="center">Compound</StyledTableCell>
                            <StyledTableCell align="center">SaleType</StyledTableCell>
                            <StyledTableCell align="center">Finishing</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            <StyledTableRow key={tableData.ref_number}>
                                <StyledTableCell align="center" component="th" scope="tableData">
                                    {tableData.ref_number}
                                </StyledTableCell>
                                <StyledTableCell align="center">{tableData.bedrooms}</StyledTableCell>
                                <StyledTableCell align="center">{tableData.bathrooms}</StyledTableCell>
                            <StyledTableCell align="center">{tableData.delivery_in}</StyledTableCell>
                            <StyledTableCell align="center">{tableData.compound_name}</StyledTableCell>
                            <StyledTableCell align="center">{tableData.sale_type}</StyledTableCell>
                                <StyledTableCell align="center">{tableData.finishing_name}</StyledTableCell>
                            </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TableData