import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Checkbox, Chip, Grid, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Toolbar, Tooltip, Typography, useMediaQuery } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
import { visuallyHidden } from '@mui/utils';
// icon imports
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

import { useState } from 'react';
// ==============================|| Default DASHBOARD ||============================== //

const Default = () => {
    const theme = useTheme();


    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('primary_keywords');
    const [selected, setSelected] = useState([]);
    const [rows, setRows] = useState([]);


    const headCells = [
        {
            id: 'app_name',
            numeric: false,
            disablePadding: true,
            label: 'App Name',
        },
        {
            id: 'app_type',
            numeric: true,
            disablePadding: false,
            label: 'App Type',
        },
        {
            id: 'app_status',
            numeric: true,
            disablePadding: false,
            label: 'Published',
        },
        {
            id: 'processing',
            numeric: true,
            disablePadding: false,
            label: 'Processing',
        },
        {
            id: 'Delete',
            numeric: true,
            disablePadding: false,
            label: 'Word count',
        },
    ];


    const EnhancedTableHead = (props: any) => {
        const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
            props;
        const createSortHandler = (property: any) => (event: any) => {
            onRequestSort(event, property);
        };

        return (
            <TableHead>
                <TableRow>
                    <TableCell padding="checkbox">
                        <Checkbox
                            color="primary"
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={rowCount > 0 && numSelected === rowCount}
                            onChange={onSelectAllClick}
                            inputProps={{
                                'aria-label': 'select all desserts',
                            }}
                        />
                    </TableCell>
                    {headCells.map((headCell) => (
                        <TableCell
                            key={headCell.id}
                            align={"center"}
                            // align={headCell.numeric ? 'right' : 'left'}
                            padding={headCell.disablePadding ? 'none' : 'normal'}
                            sortDirection={orderBy === headCell.id ? order : false}
                        >
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                            >
                                {headCell.label}
                                {orderBy === headCell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
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
    const EnhancedTableToolbar = (props: any) => {
        const { numSelected } = props;

        return (
            <Toolbar
                sx={{
                    pl: { sm: 2 },
                    pr: { xs: 1, sm: 1 },
                    justifyContent: "flex-start"
                }}
            >
                <Stack direction={"row"} sx={{ width: numSelected > 0 ? "40%" : "30%" }} justifyContent={"flex-start"} gap={"5px"}>
                    Your Apps
                </Stack>
            </Toolbar>
        );
    }
    EnhancedTableToolbar.propTypes = {
        numSelected: PropTypes.number.isRequired,
    };
    EnhancedTableHead.propTypes = {
        numSelected: PropTypes.number.isRequired,
        onRequestSort: PropTypes.func.isRequired,
        onSelectAllClick: PropTypes.func.isRequired,
        order: PropTypes.oneOf(['asc', 'desc']).isRequired,
        orderBy: PropTypes.string.isRequired,
        rowCount: PropTypes.number.isRequired,
    };
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} lg={12} md={12}>
                <Paper sx={{ width: '100%' }}>
                    <EnhancedTableToolbar numSelected={selected.length} />
                    <TableContainer>
                        <Table
                            // sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                        >
                            <EnhancedTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={() => { }}
                                onRequestSort={() => { }}
                                rowCount={rows.length}

                            />
                            <TableBody>
                                <TableRow
                                    hover
                                    aria-checked={false}
                                    tabIndex={-1}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            color="primary"
                                            checked={false}
                                            inputProps={{
                                                'aria-labelledby': "labelId",
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell
                                        align='center'
                                    >
                                        hello
                                    </TableCell>
                                    <TableCell
                                        align='center'
                                    >
                                        Cash Bot
                                    </TableCell>
                                    <TableCell
                                        align="center"><CheckIcon /></TableCell>
                                    <TableCell
                                        align="center"><Chip label={"hello world"} variant="outlined" /></TableCell>
                                    <TableCell
                                        align="center">
                                        <IconButton>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
        </Grid>
    );
};
Default.Layout = 'authGuard';
export default Default;