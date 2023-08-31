import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function createData(name: string, status: string, rule: string, length: string, text: string) {
  return { name, status, rule, length, text };
}

const rows = [
  createData('My Dataset1', 'Completed', 'Automatic', '1,000', 'Automatic'),
  createData('My Dataset2', 'Completed', 'Automatic', '1,000', 'Automatic'),
  createData('My Dataset3', 'Completed', 'Automatic', '1,000', 'Automatic')
];

export default function DatasetsTable() {
  return (
    <TableContainer>
      <Table sx={{ backgroundColor: 'white !important' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Rule</TableCell>
            <TableCell>Length</TableCell>
            <TableCell>Text</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.rule}</TableCell>
              <TableCell>{row.length}</TableCell>
              <TableCell>{row.text}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
