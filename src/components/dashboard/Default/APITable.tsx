import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, IconButton } from '@mui/material';
import { IconFileDescription, IconTrash } from '@tabler/icons';

function createData(secretkey: string, created: string, lastdate: string) {
  return { secretkey, created, lastdate };
}

const rows = [
  createData('My Name', 'August 14, 2023', 'Never'),
  createData('My Name', 'August 14, 2023', 'Never'),
  createData('My Name', 'August 14, 2023', 'Never')
];

export default function APITable() {
  return (
    <TableContainer>
      <Table sx={{ backgroundColor: 'white !important' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ paddingLeft: '30px' }}>Secret Key</TableCell>
            <TableCell>Created</TableCell>
            <TableCell>Last Date</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.secretkey} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" sx={{ paddingLeft: '30px' }}>
                {row.secretkey}
              </TableCell>
              <TableCell>{row.created}</TableCell>
              <TableCell>{row.lastdate}</TableCell>
              <TableCell>
                <IconButton>
                  <IconFileDescription size={25} color="#09BD3C" />
                </IconButton>
                <IconButton>
                  <IconTrash size={25} color="#F36059" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
