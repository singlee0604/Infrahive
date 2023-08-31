import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconMessage, IconMessage2, IconMultiplier1x, IconPlus } from '@tabler/icons';
import { IconX } from '@tabler/icons';
import { Avatar, FormControlLabel, Grid, Input, Switch, SwitchProps, TextField } from '@mui/material';
import Image from 'next/image';
import styled from '@emotion/styled';
import DatasetsTable from './DatasetsTable';
import APITable from './APITable';

const EarningIcon = '/assets/images/icons/chat-svgrepo-com1.svg';
const SpeechIcon = '/assets/images/icons/speech-to-text-svgrepo-com1.svg';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  fill: '#FFF',
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.04))',
  width: '600px',
  padding: '0px'
};

interface Props {
  open: boolean;
  ModalOpen: () => void;
  ModalClose: () => void;
}

const APISecretKeyModal: React.FC<Props> = ({ open, ModalOpen, ModalClose }) => {
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <Modal
      open={open}
      onClose={ModalClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500
        }
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Box sx={{ padding: '20px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography
              sx={{
                color: '#202224',
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal'
              }}
            >
              API Secret key
            </Typography>
            <Button onClick={ModalClose} sx={{ minWidth: '10px' }}>
              <IconX color="#717579" size="16" />
            </Button>
          </Box>
          <hr />
          <Box sx={{ padding: '10px 30px' }}>
            <Typography
              sx={{
                color: '#202224',
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
                padding: '10px 0px',
                width: '80%'
              }}
            >
              <Typography color="#717579" fontSize={14} lineHeight={1.8}>
                {`To prevent API abuse, protect your API Key. Avoid using it as plain text in front-end code. :)`}
              </Typography>
            </Typography>
          </Box>
          <Box>
            <APITable />
          </Box>
          <Box sx={{ padding: '10px 30px', display: 'flex', justifyContent: 'start' }}>
            <Button
              sx={{
                width: '220px',
                background: '#717579 !important',
                color: 'white',
                mt: 10,
                mb: 2,
                height: '40px',
                borderRadius: '50px',
                fontWeight: '500'
              }}
            >
              <IconPlus />
              Create New Secret Key
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default APISecretKeyModal;
