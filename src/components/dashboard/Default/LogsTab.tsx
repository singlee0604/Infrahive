import React from 'react';
import Image from 'next/image';
// material-ui
import { styled, useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box,
  Button,
  Chip,
  FormControlLabel,
  Grid,
  Menu,
  MenuItem,
  Switch,
  SwitchProps,
  TextField,
  Typography,
  Stack,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  Popover
} from '@mui/material';

// project imports

// assets
const EarningIcon = '/assets/images/icons/app_user.png';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import SendIcon from '@mui/icons-material/Send';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import {
  IconArrowRight,
  IconChevronRight,
  IconCreditCard,
  IconEye,
  IconFile,
  IconFileDescription,
  IconMail,
  IconMessage,
  IconPlus,
  IconSend,
  IconSettings,
  IconShare,
  IconShoppingBag,
  IconStars,
  IconTrash,
  IconUser,
  IconVariable
} from '@tabler/icons';
import GetAppTwoToneIcon from '@mui/icons-material/GetAppOutlined';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyOutlined';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfOutlined';
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveOutlined';
import { IconMessage2 } from '@tabler/icons';
import AppCard from './AppCard';
import DashboardCard from './DashboardCard';
import PaddingChart from './PaddingChart';
import MessageBox from './MessageBox';
import AddFeatureModal from './AddFeatureModal';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionComponent from './AccordionComponent';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import ExportPopover from './ExportPopover';
// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

interface AppCardProps {
  isLoading: boolean;
}

const LogsTab = ({ isLoading }: AppCardProps) => {
  const theme = useTheme();

  const [age, setAge] = React.useState('10');

  const handleChange1 = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const [all, setAll] = React.useState('10');

  const handleChange2 = (event: SelectChangeEvent) => {
    setAll(event.target.value as string);
  };

  const columns: GridColDef[] = [
    // { field: 'id', headerName: 'ID', width: 120 },
    { field: 'time', headerName: 'Time', width: 250 },
    { field: 'enduser', headerName: 'End User', flex: 1 },
    { field: 'summary', headerName: 'Summary', flex: 1 },
    { field: 'messagecount', headerName: 'Message Count', flex: 1 },
    { field: 'userrate', headerName: 'User Rate', flex: 1 },
    { field: 'oprate', headerName: 'Op. Rate', flex: 1 }
  ];

  const rows = [
    { id: 1, time: '08/06/2023 08:24 PM', enduser: 'N/A', userrate: 'N/A', oprate: 'N/A', messagecount: '1,029', summary: 'Hi' },
    { id: 2, time: '08/06/2023 08:24 PM', enduser: 'N/A', userrate: 'N/A', oprate: 'N/A', messagecount: '1,029', summary: 'Hi' },
    { id: 3, time: '08/06/2023 08:24 PM', enduser: 'N/A', userrate: 'N/A', oprate: 'N/A', messagecount: '1,029', summary: 'Hi' },
    { id: 4, time: '08/06/2023 08:24 PM', enduser: 'N/A', userrate: 'N/A', oprate: 'N/A', messagecount: '1,029', summary: 'Hi' },
    { id: 5, time: '08/06/2023 08:24 PM', enduser: 'N/A', userrate: 'N/A', oprate: 'N/A', messagecount: '1,029', summary: 'Hi' },
    { id: 6, time: '08/06/2023 08:24 PM', enduser: 'N/A', userrate: 'N/A', oprate: 'N/A', messagecount: '1,029', summary: 'Hi' }
  ];

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ padding: '0px 20px' }}>
          <Typography color="#202224" fontWeight={500} fontSize={16}>
            Logs & Annotations
          </Typography>
          <Typography color="#717579" fontSize={12} sx={{ mt: 0.8 }}>
            The logs record the running status of the application, including user inputs and AI replies.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ mr: 2 }}>
            <ExportPopover />
          </Box>
          <FormControl sx={{ width: '150px', mr: 2 }} size="small">
            <Select value={age} onChange={handleChange1}>
              <MenuItem value={'10'}>Last 7 days</MenuItem>
              <MenuItem value={'20'}>Last month</MenuItem>
              <MenuItem value={'30'}>Last Year</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: '150px', mr: 3 }} size="small">
            <Select value={all} onChange={handleChange2}>
              <MenuItem value={'10'}>All</MenuItem>
              <MenuItem value={'20'}>Twenty</MenuItem>
              <MenuItem value={'30'}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box sx={{ padding: '0px', mt: 6 }}>
        <Box sx={{ height: 400, width: '100%', background: 'white', borderRadius: '10px' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 }
              }
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{
              '& .MuiDataGrid-row': { borderTop: "1px solid #d7d7d7" }
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default LogsTab;
