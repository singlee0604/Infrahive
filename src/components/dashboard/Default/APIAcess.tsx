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
  AccordionDetails
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
import APISecretKeyModal from './APISecretKeyModal';
// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

interface AppCardProps {
  isLoading: boolean;
}

const APIAccess = ({ isLoading }: AppCardProps) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<Element | (() => Element) | null | undefined>(null);

  const handleClick = (event: React.SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = React.useState(false);
  const ModalOpen = () => setOpen(true);
  const ModalClose = () => setOpen(false);

  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [apiopen, setApiOpen] = React.useState(false);
  const apiModalOpen = () => setApiOpen(true);
  const apiModalClose = () => setApiOpen(false);

  return (
    <>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Chip
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography>https://api.infrahive.ai/v1</Typography>
                <IconFileDescription style={{ marginLeft: '5px' }} size={20} />
              </Box>
            }
            icon={<Chip label="API Server" size="small" sx={{ background: 'white', borderRadius: '5px' }} />}
            sx={{ background: '#669DF633', borderRadius: '5px' }}
          />
          <Chip
            label="Status in Service"
            sx={{ background: '#7ED19F33', color: '#09BD3C', ml: 1, fontWeight: '500', borderRadius: '5px' }}
          />
        </Box>
        <Button sx={{ color: 'white', background: '#FEC200 !important', width: '150px', borderRadius: '5px' }} onClick={apiModalOpen}>
          API Key
        </Button>
      </Box>
      <Box>
        <AccordionComponent title="Chat App API" open={true} />
        <AccordionComponent title="Message terminal user feedback, like" open={false} />
        <AccordionComponent title="Get the chat history message" open={false} />
      </Box>
      <AddFeatureModal open={open} ModalClose={ModalClose} ModalOpen={ModalOpen} />
      <APISecretKeyModal open={apiopen} ModalClose={apiModalClose} ModalOpen={apiModalOpen} />
    </>
  );
};

export default APIAccess;
