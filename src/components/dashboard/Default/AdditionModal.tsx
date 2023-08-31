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
import DatasetsModal from './DatasetsModal';

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
  width: '500px',
  padding: '0px'
};

interface Props {
  open: boolean;
  ModalOpen: () => void;
  ModalClose: () => void;
  openDB: boolean;
  DBModalOpen: () => void;
  DBModalClose: () => void;
}

const AdditionModal: React.FC<Props> = ({ open, ModalOpen, ModalClose, openDB, DBModalClose, DBModalOpen }) => {
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  }, []);

  const Close_Open = () => {
    ModalClose();
    DBModalOpen();
  };

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
              Additional Info<span style={{ color: 'red' }}> *</span>
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
              <Typography color="#717579" fontSize={12}>
                You can import datasets as additional knowledge for the AI to uses.
              </Typography>
            </Typography>
            <Button
              sx={{ width: '100%', background: '#202224 !important', color: 'white', mt: 2, mb: 2, height: '40px' }}
              onClick={Close_Open}
            >
              Choose from available datasets
            </Button>
            <Button
              sx={{
                width: '100%',
                background: 'white !important',
                color: '#202224',
                mt: 2,
                mb: 2,
                height: '40px',
                border: '1px dashed #202224'
              }}
            >
              <Box
                sx={{
                  width: '30px',
                  height: '30px',
                  border: '1px solid #D9E1E7',
                  borderRadius: '10px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <IconPlus color="#F7B64B" size={16} />
              </Box>
              <Typography sx={{ ml: 1 }}> Upload file / Drag file</Typography>
            </Button>
            <Box
              sx={{
                color: '#202224',
                mt: 1,
                mb: 2
              }}
            >
              <Typography>Link</Typography>
              <TextField
                sx={{
                  width: '100%',
                  border: '1px solid #D9E1E7',
                  borderRadius: '10px',
                  mt: 1
                }}
                placeholder="insert your link"
                size="small"
              />
            </Box>
            <Button
              sx={{ width: '100%', background: '#FEC200 !important', color: 'white', mt: 10, mb: 2, height: '40px', borderRadius: '50px' }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AdditionModal;
