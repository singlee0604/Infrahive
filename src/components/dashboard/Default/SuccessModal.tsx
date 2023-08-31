import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconCheck, IconInfoCircle, IconMultiplier1x } from '@tabler/icons';
import { IconX } from '@tabler/icons';
import { Avatar, Chip, Grid, Input, TextField } from '@mui/material';
import AppCard from './AppCard';
import Image from 'next/image';
import { IconChevronRight } from '@tabler/icons';
import { IconArrowRight } from '@tabler/icons';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
const EarningIcon = '/assets/images/icons/chat-svgrepo-com1.svg';
const TextIcon = '/assets/images/icons/insert-word-svgrepo-com1.svg';

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
  width: '350px',
  padding: '0px'
};

interface Props {
  open: boolean;
  ModalOpen: () => void;
  ModalClose: () => void;
}

const SuccessModal: React.FC<Props> = ({ open, ModalOpen, ModalClose }) => {
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
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
          <Box sx={{ padding: '0px 30px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Button onClick={ModalClose} sx={{ minWidth: '10px', mt: 2 }}>
              <IconX color="#717579" size="16" />
            </Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Box sx={{ borderRadius: '100%', border: '15px solid #7ED19F20' }}>
              <IconCheck
                style={{ background: '#7ED19F', color: 'white', borderRadius: '100%', padding: '5px', width: '40px', height: '40px' }}
              />
            </Box>
            <Typography sx={{ mt: 2, fontSize: '18px', color: '#202224', fontWeight: '500' }}>Success</Typography>
            <Typography sx={{ mt: 2, fontSize: '14px', color: '#717579', textAlign: 'center' }}>
              You’ve successfully publish the prompt.
            </Typography>
          </Box>
          <Box sx={{ padding: '10px 30px' }}>
            <Typography id="transition-modal-description" sx={{ mt: 2, mb: 2, display: 'flex', justifyContent: 'center' }}>
              <Button
                sx={{
                  borderRadius: '20px',
                  background: '#FEC200 !important',
                  color: 'white',
                  fontSize: '13px',
                  padding: '5px 20px',
                  ml: 1,
                  width: '100%'
                }}
                onClick={ModalClose}
              >
                Ok
              </Button>
            </Typography>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default SuccessModal;
