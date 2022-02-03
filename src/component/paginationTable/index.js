import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import ColoredLabelStatus from '../common/labelColorStatus'
function createData(email,grade,recency,frequency, monetary,avgOrderVal, discount,lenght) {
    return {
        email,
        grade,
        recency,
        frequency,
        monetary,
        avgOrderVal,
        discount,
        lenght
    };
}

let rows = [
    createData('danejoe12@gmail.com', 5, 3, 2, 1, 3, 2, 1),
    createData('joeburrito@outlook.com', 2, 5, 4, 1, 2, 5, 4),
    createData('jennyshrivastava@gmail.co', 3, 2, 1, 4, 2, 1, 4),
    createData('Frozen@hotmail', 5, 4, 3, 2, 5, 4, 3),
    createData('frozenyogurt@hotmail.com', 4, 1, 5, 3, 4, 1, 3),
    createData('hsgyej@outlook.com', 2, 1, 3, 5, 4, 1, 5),
];
const headCells = [
    {
        id: 'userEmail',
        numeric: false,
        disablePadding: false,
        label: 'User Email',
    },
    {
        id: 'grade',
        numeric: true,
        disablePadding: false,
        label: 'Grade',
    },
    {
        id: 'recency',
        numeric: true,
        disablePadding: false,
        label: 'Recency',
    },
    {
        id: 'frequency',
        numeric: true,
        disablePadding: false,
        label: 'Frequency',
    },
    {
        id: 'monetary',
        numeric: true,
        disablePadding: false,
        label: 'Monetary',
    },
    {
        id: 'AvgOrderValue',
        numeric: true,
        disablePadding: false,
        label: 'Average Order Value',
    }, {
        id: 'discount',
        numeric: true,
        disablePadding: false,
        label: 'Discount',
    }, {
        id: 'length',
        numeric: true,
        disablePadding: false,
        label: 'Length',
    },
];

function EnhancedTableHead(props) {
    const { order, orderBy, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={'center'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                            sx={{
                                color: '#757575',
                                fontSize: 12,
                                fontWeight: 700
                            }}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}

                                >
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};
export default function EnhancedTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                    >
                        <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    return (
                                        <TableRow
                                            hover
                                            tabIndex={-1}
                                            key={row.name}
                                        >
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                align='center'
                                            >
                                                {row.email}
                                            </TableCell>
                                            <TableCell align="center">{row.grade}</TableCell>
                                            <TableCell align="center">
                                                <ColoredLabelStatus value={row.recency} />
                                            </TableCell>
                                            <TableCell align="center">

                                                <ColoredLabelStatus value={row.frequency} />
                                            </TableCell>
                                            <TableCell align="center">
                                                <ColoredLabelStatus value={row.monetary} />
                                            </TableCell>
                                            <TableCell align="center">
                                                <ColoredLabelStatus value={row.avgOrderVal} />
                                            </TableCell>
                                            <TableCell align="center">
                                                <ColoredLabelStatus value={row.discount} />
                                            </TableCell>
                                            <TableCell align="center">
                                                <ColoredLabelStatus value={row.lenght} />
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}
