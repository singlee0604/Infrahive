import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import OverviewComponent from './OverviewComponent';
import AppBuilder from './AppBuilder';
import APIAccess from './APIAcess';
import LogsTab from './LogsTab';
import { Button, Chip } from '@mui/material';
import Image from 'next/image';
import { Stack } from '@mui/system';
import GPTModal from './GPTModal';
import ResetModal from './ResetModal';
import SuccessModal from './SuccessModal';
const GPTicon = '/assets/images/icons/GPTicon.png';

export default function TabComponent() {
  const [value, setValue] = React.useState('2');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const OpenModal = () => setOpen(true);
  const CloseModal = () => setOpen(false);

  const [resetopen, setResetOpen] = React.useState(false);
  const ResetOpenModal = () => setResetOpen(true);
  const ResetCloseModal = () => setResetOpen(false);

  const [successopen, setSuccessOpen] = React.useState(false);
  const SuccessOpenModal = () => setSuccessOpen(true);
  const SuccessCloseModal = () => setSuccessOpen(false);

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="App Builder" value="2" />
            <Tab label="Overview" value="1" />
            <Tab label="API Access" value="3" />
            <Tab label="Logs & Ann." value="4" />
          </TabList>
          <Box>
            <Button sx={{ padding: '0px', borderRadius: '20px' }} onClick={OpenModal}>
              <Chip
                icon={<Image src={GPTicon} width={20} height={20} alt="GPTicon" />}
                label="GPT-3.5-Turbo"
                sx={{ fontSize: '14px', background: '#10A37F', color: 'white' }}
              />
            </Button>
            <Button sx={{ ml: 4, padding: '0px', borderRadius: '20px' }} onClick={ResetOpenModal}>
              <Chip label="Reset" sx={{ fontSize: '14px', background: '#7175791A', color: '#717579', padding: '10px' }} />
            </Button>
            <Button sx={{ ml: 1, padding: '0px', borderRadius: '20px' }}>
              <Chip label="Publish" sx={{ fontSize: '14px', background: '#FEC200', color: 'white', padding: '10px' }} />
            </Button>
          </Box>
        </Box>
        <TabPanel value="1" sx={{ padding: '20px 0px' }}>
          <OverviewComponent isLoading={false} />
        </TabPanel>
        <TabPanel value="2" sx={{ padding: '20px 0px' }}>
          <AppBuilder isLoading={false} />
        </TabPanel>
        <TabPanel value="3" sx={{ padding: '20px 0px' }}>
          <APIAccess isLoading={false} />
        </TabPanel>
        <TabPanel value="4" sx={{ padding: '20px 0px' }}>
          <LogsTab isLoading={false} />
        </TabPanel>
      </TabContext>
      <GPTModal open={open} ModalOpen={OpenModal} ModalClose={CloseModal} />
      <SuccessModal open={successopen} ModalClose={SuccessCloseModal} ModalOpen={SuccessOpenModal} />
      <ResetModal
        open={resetopen}
        ModalClose={ResetCloseModal}
        ModalOpen={ResetOpenModal}
        successopen={successopen}
        successModalClose={SuccessCloseModal}
        successModalOpen={SuccessOpenModal}
      />
    </Box>
  );
}
