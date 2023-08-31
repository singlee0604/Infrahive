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
// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

interface AppCardProps {
  title: string;
  open: boolean;
}

const AccordionComponent = ({ title, open }: AppCardProps) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<Element | (() => Element) | null | undefined>(null);

  const handleClick = (event: React.SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [expanded, setExpanded] = React.useState<string | false>(open ? 'panel1' : false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ background: '#fff !important', mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ padding: '0px 30px' }}
        >
          <Typography sx={{ width: '33%', flexShrink: 0, color: '#202224', fontWeight: '500' }}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '10px 30px' }}>
          <Typography sx={{ color: '#717579', fontSize: '12px', width: '70%' }}>
            For versatile conversational apps using a Q&A format, call the chat-messages API to initiate dialogue. Maintain ongoing
            conversations by passing the returned conversation_id. Response parameters and templates depend on LangGenius Prompt Eng.
            settings.{' '}
            <a href="#" style={{ color: '#4285F4' }}>
              Before you start, READ This !! What is a Bearer Token
            </a>
          </Typography>
          <br />
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item md={6} sx={{ paddingRight: '30px' }}>
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ color: '#202224', fontWeight: '500', mr: 2 }}>Create chat message</Typography>
                  <Chip
                    label="Post / chat-message"
                    sx={{ fontSize: '12px', background: '#669DF633', color: '#717579', borderRadius: '5px', height: '25px' }}
                  />
                </Box>
                <Typography fontSize={12} color="#717579" sx={{ mt: 1.5 }}>
                  Create a new conversation message or continue an existing dialogue.
                </Typography>
              </Box>
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ color: '#202224', fontWeight: '500', mr: 2 }}>Request Body</Typography>
                  <Chip
                    label="Input / object"
                    sx={{ fontSize: '12px', background: '#669DF633', color: '#717579', borderRadius: '5px', height: '25px' }}
                  />
                </Box>
                <Typography fontSize={12} color="#717579" sx={{ mt: 1.5 }}>
                  (Optional) Provide user input fields as key-value pairs, corresponding to variables in Prompt Eng. Key is the variable
                  name, Value is the parameter value. If the field type is Select, the submitted Value must be one of the preset choices.
                </Typography>
              </Box>
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {/* <Typography sx={{ color: '#202224', fontWeight: '500' }}>Request Body</Typography> */}
                  <Chip
                    label="query / string"
                    sx={{ fontSize: '12px', background: '#669DF633', color: '#717579', borderRadius: '5px', height: '25px' }}
                  />
                </Box>
                <Typography fontSize={12} color="#717579" sx={{ mt: 1.5 }}>
                  User input/question content
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
              <Box sx={{ background: '#4285F433', width: '100%', borderRadius: '10px' }}>
                <Typography sx={{ color: '#202224', fontWeight: '500', padding: '15px 20px', borderBottom: '1px solid #7175794D' }}>
                  Request
                </Typography>
                <pre style={{ padding: '20px', fontSize: '10px', lineHeight: '1.8' }}>
                  {`POST
/chat-messages curl 

--location --request POST 'https://api.dify.ai/v1/chat-messages'
--header 'Authorization: Bearer ENTER-YOUR-SECRET-KEY'
--header 'Content-Type: application/json'
--data-raw '{ 
    "inputs": {}, 
    "query": "eh", 
    "response_mode": "streaming", 
    "conversation_id": "1c7e55fb-1ba2-4e10-81b5-30addcea2276", 
    "user": "abc-123" 
}`}
                </pre>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item md={6} sx={{ paddingRight: '30px' }}>
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ color: '#202224', fontWeight: '500', mr: 2 }}>Create chat message</Typography>
                  <Chip
                    label="Post / chat-message"
                    sx={{ fontSize: '12px', background: '#669DF633', color: '#717579', borderRadius: '5px', height: '25px' }}
                  />
                </Box>
                <Typography fontSize={12} color="#717579" sx={{ mt: 1.5 }}>
                  Create a new conversation message or continue an existing dialogue.
                </Typography>
              </Box>
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ color: '#202224', fontWeight: '500', mr: 2 }}>Request Body</Typography>
                  <Chip
                    label="Input / object"
                    sx={{ fontSize: '12px', background: '#669DF633', color: '#717579', borderRadius: '5px', height: '25px' }}
                  />
                </Box>
                <Typography fontSize={12} color="#717579" sx={{ mt: 1.5 }}>
                  (Optional) Provide user input fields as key-value pairs, corresponding to variables in Prompt Eng. Key is the variable
                  name, Value is the parameter value. If the field type is Select, the submitted Value must be one of the preset choices.
                </Typography>
              </Box>
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {/* <Typography sx={{ color: '#202224', fontWeight: '500' }}>Request Body</Typography> */}
                  <Chip
                    label="query / string"
                    sx={{ fontSize: '12px', background: '#669DF633', color: '#717579', borderRadius: '5px', height: '25px' }}
                  />
                </Box>
                <Typography fontSize={12} color="#717579" sx={{ mt: 1.5 }}>
                  User input/question content
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
              <Box sx={{ background: '#4285F433', width: '100%', borderRadius: '10px' }}>
                <Typography sx={{ color: '#202224', fontWeight: '500', padding: '15px 20px', borderBottom: '1px solid #7175794D' }}>
                  Request
                </Typography>
                <pre style={{ padding: '20px', fontSize: '10px', lineHeight: '1.8' }}>
                  {`POST
/chat-messages curl 

--location --request POST 'https://api.dify.ai/v1/chat-messages'
--header 'Authorization: Bearer ENTER-YOUR-SECRET-KEY'
--header 'Content-Type: application/json'
--data-raw '{ 
    "inputs": {}, 
    "query": "eh", 
    "response_mode": "streaming", 
    "conversation_id": "1c7e55fb-1ba2-4e10-81b5-30addcea2276", 
    "user": "abc-123" 
}`}
                </pre>
              </Box>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AccordionComponent;
