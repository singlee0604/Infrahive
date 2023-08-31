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

const ModifyModal: React.FC<Props> = ({ open, ModalOpen, ModalClose }) => {
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
                                                        Modify Variable<span style={{ color: 'red' }}> *</span>
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
                                                                Choose how the AI can get the variables data
                                                        </Typography>
                                                </Typography>
                                        </Box>
                                        <div>
                                                <div className="flex items-center justify-center">
                                                        <button className="w-[90%] bg-black py-2 rounded-md m-2 mx-auto text-white text-center">Ask Users</button>
                                                </div>
                                                <div className='flex items-center justify-center'>
                                                        <button className="w-[90%]  py-2 rounded-md m-2 mx-auto  text-center p-2 ">
                                                                <div className="border-dashed border-2 flex flex-row items-center justify-center gap-3 full">
                                                                        <div>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className='w-9'>
                                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20V10.6667C0 7.72115 1.0414 5.20699 3.12419 3.12419C5.20699 1.0414 7.72115 0 10.6667 0H29.3333C32.2789 0 34.793 1.0414 36.8758 3.12419C38.9586 5.20699 40 7.72115 40 10.6667V29.3333C40 32.2789 38.9586 34.793 36.8758 36.8758C34.793 38.9586 32.2789 40 29.3333 40H10.6667C7.72115 40 5.20699 38.9586 3.12419 36.8758C1.0414 34.793 0 32.2789 0 29.3333V20Z" fill="white" />
                                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6667 1.33334C5.51204 1.33334 1.33333 5.51202 1.33333 10.6667V29.3333C1.33333 34.488 5.51204 38.6667 10.6667 38.6667H29.3333C34.4879 38.6667 38.6667 34.488 38.6667 29.3333V10.6667C38.6667 5.51201 34.4879 1.33334 29.3333 1.33334H10.6667ZM10.6667 0H29.3333C35.2244 0 40 4.77562 40 10.6667V29.3333C40 35.2244 35.2244 40 29.3333 40H10.6667C4.77563 40 0 35.2244 0 29.3333V10.6667C0 4.77562 4.77563 0 10.6667 0Z" fill="#D9E1E7" />
                                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 24V20.6667H16.6667C16.4285 20.6667 16.2084 20.5396 16.0894 20.3334C15.9702 20.1271 15.9702 19.873 16.0894 19.6667C16.2084 19.4604 16.4285 19.3334 16.6667 19.3334H20V16C20 15.7619 20.127 15.5418 20.3333 15.4227C20.5396 15.3036 20.7937 15.3036 21 15.4227C21.2063 15.5418 21.3333 15.7619 21.3333 16V19.3334H24.6667C24.9049 19.3334 25.1249 19.4604 25.244 19.6667C25.3631 19.873 25.3631 20.1271 25.244 20.3334C25.1249 20.5396 24.9049 20.6667 24.6667 20.6667H21.3333V24C21.3333 24.2382 21.2063 24.4583 21 24.5774C20.7937 24.6965 20.5396 24.6965 20.3333 24.5774C20.127 24.4583 20 24.2382 20 24Z" fill="#F7B64B" />
                                                                                </svg>
                                                                        </div>
                                                                        <p>Get variables from uploaded file</p>
                                                                </div>
                                                        </button>
                                                </div>
                                                <div className="flex items-center justify-center">
                                                        <button className="w-[90%] bg-black py-2 rounded-md m-2 mx-auto text-white text-center">Get variables from dataset</button>
                                                </div>
                                        </div>
                                        <Box sx={{ padding: '10px 30px', display: 'flex', justifyContent: 'end', width: "full" }}>
                                                <Button
                                                        sx={{
                                                                width: '100%',
                                                                background: '#FEC200 !important',
                                                                color: 'white',
                                                                mt: 10,
                                                                mb: 2,
                                                                height: '40px',
                                                                borderRadius: '50px'
                                                        }}
                                                >
                                                        Save
                                                </Button>
                                        </Box>
                                </Box>
                        </Fade>
                </Modal>
        );
};

export default ModifyModal;
