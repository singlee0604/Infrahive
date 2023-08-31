import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Grid, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Toolbar, Typography, useMediaQuery, Dialog, DialogTitle, DialogContent, DialogActions, TextField, InputLabel, FormControl, ToggleButtonGroup, Input, ToggleButton } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
import { visuallyHidden } from '@mui/utils';
// file module imports
import { FileUploader } from "react-drag-drop-files";

import { useState } from 'react';
// ==============================|| Data DASHBOARD ||============================== //

const Data = () => {
    const theme = useTheme();


    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('primary_keywords');
    const [selected, setSelected] = useState([]);
    const [rows, setRows] = useState([]);

    const [open, setOpen] = useState(false);

    const headCells = [
        {
            id: 'name',
            numeric: false,
            disablePadding: true,
            label: 'Name',
        },
        {
            id: 'owner',
            numeric: true,
            disablePadding: false,
            label: 'Owner',
        },
        {
            id: 'data_source_type',
            numeric: true,
            disablePadding: false,
            label: 'Data Source Type',
        },
        {
            id: 'size',
            numeric: true,
            disablePadding: false,
            label: 'Size',
        },
        {
            id: 'created_at',
            numeric: true,
            disablePadding: false,
            label: 'Created At',
        },
        {
            id: 'last',
            numeric: true,
            disablePadding: false,
            label: 'Last',
        },
        {
            id: 'action',
            numeric: true,
            disablePadding: false,
            label: 'Action',
        },
    ];

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // ================ | Add Source Modal | =============
    const [dataSourceType, setDataSourceType] = useState<string | null>('text');

    const handledataSourceType = (
        event: React.MouseEvent<HTMLElement>,
        newdataSourceType: string | null,
    ) => {
        setDataSourceType(newdataSourceType);
    };
    /* file drag and drop*/
    const [file, setFile] = useState(null);
    const [fileTypes, setFileTypes] = useState(["pdf"]);
    const fileHandleChange = (file: any) => {
        setFile(file);
    };
    /* file drag and drop*/
    // 
    const EnhancedTableHead = (props: any) => {
        const { order, orderBy, onRequestSort } =
            props;
        const createSortHandler = (property: any) => (event: any) => {
            onRequestSort(event, property);
        };

        return (
            <TableHead>
                <TableRow>
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
                    <Button variant='contained' onClick={handleClickOpen}>Add Data Source</Button>
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
                                {rows.length === 0 &&

                                    <TableRow
                                        hover
                                        aria-checked={false}
                                        tabIndex={-1}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <TableCell align='center'></TableCell>
                                        <TableCell align='center'></TableCell>
                                        <TableCell align='center'></TableCell>
                                        <TableCell align="center">No Data</TableCell>
                                        <TableCell align="center"></TableCell>
                                        <TableCell align="center"></TableCell>
                                    </TableRow>
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
            <Grid container justifyContent="center">
                <Dialog fullWidth={true} open={open} onClose={handleClose}>
                    {open && (
                        <>
                            <DialogTitle>Add New Data Source</DialogTitle>
                            <DialogContent>
                                <Stack spacing={3} p={1}>
                                    <TextField autoFocus size="small" id="data_source_name" label="Data source name" type="text" fullWidth />
                                    <Typography variant='h4'>
                                        Data Source Type
                                    </Typography>
                                    <ToggleButtonGroup
                                        size='medium'
                                        value={dataSourceType}
                                        exclusive
                                        onChange={handledataSourceType}
                                        aria-label="source type"
                                    >
                                        <ToggleButton value="pdf" aria-label="pdf source">
                                            PDF
                                        </ToggleButton>
                                        <ToggleButton value="url" aria-label="url source">
                                            URL
                                        </ToggleButton>
                                        <ToggleButton value="text" aria-label="text source">
                                            Text
                                        </ToggleButton>
                                        <ToggleButton value="csv" aria-label="csv source">
                                            CSV
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                    {dataSourceType === 'text' &&
                                        <Stack spacing={1}>
                                            <FormControl variant="standard" >
                                                <InputLabel htmlFor="name">Name</InputLabel>
                                                <Input id="name" defaultValue="Untitled" />
                                            </FormControl>
                                            <TextField id='text' label='Content' multiline rows={5} />
                                        </Stack>
                                    }
                                    {dataSourceType === 'url' &&
                                        <Stack spacing={1}>
                                            <TextField id='text' label='Urls*' multiline rows={5} />
                                            <Typography variant='body2'>
                                                Urls to scrape,List of URL can be comma or newline separated.If site.xml is present,it will...
                                            </Typography>
                                        </Stack>
                                    }
                                    {dataSourceType === 'pdf' &&
                                        <Stack spacing={1} sx={{
                                            '& label': {
                                                height: "200px !important"
                                            },
                                            '& span': {
                                                fontSize: "1rem !important"
                                            },
                                            '& svg': {
                                                display: "none !important"
                                            },
                                            '& label div span:nth-child(2)': {
                                                display: "none !important"
                                            }
                                        }}>
                                            <Typography variant='body1'>
                                                File
                                            </Typography>
                                            <FileUploader
                                                multiple={true}
                                                handleChange={fileHandleChange}
                                                name="file"
                                                types={fileTypes}
                                                maxSize={250}
                                                label={`Drag 'n' drop some files here,or click to select files.Maxinum size of each file is 20MB`}
                                                id="file"
                                            />
                                            <Typography variant='body2'>
                                                File to be processed
                                            </Typography>
                                        </Stack>
                                    }
                                    {dataSourceType === 'csv' &&
                                        <Stack spacing={1} sx={{
                                            '& label': {
                                                height: "200px !important"
                                            },
                                            '& span': {
                                                fontSize: "1rem !important"
                                            },
                                            '& svg': {
                                                display: "none !important"
                                            },
                                            '& label div span:nth-child(2)': {
                                                display: "none !important"
                                            }
                                        }}>
                                            <Typography variant='body1'>
                                                File
                                            </Typography>
                                            <FileUploader
                                                multiple={true}
                                                handleChange={fileHandleChange}
                                                name="file"
                                                types={fileTypes}
                                                maxSize={250}
                                                label={`Drag 'n' drop some files here,or click to select files.Maxinum size of each file is 250MB`}
                                                id="file"
                                            />
                                            <Typography variant='body2'>
                                                File to be processed
                                            </Typography>
                                        </Stack>
                                    }
                                </Stack>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={handleClose} variant='contained'>Submit</Button>
                            </DialogActions>
                        </>
                    )}
                </Dialog>
            </Grid>
        </Grid>
    );
};
Data.Layout = 'authGuard';
export default Data;