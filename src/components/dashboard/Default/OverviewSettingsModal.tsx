import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconMessage, IconMessage2, IconMultiplier1x } from '@tabler/icons';
import { IconX } from '@tabler/icons';
import { Avatar, Chip, FormControlLabel, Grid, Input, MenuItem, Select, Switch, SwitchProps, TextField } from '@mui/material';
import AppCard from './AppCard';
import Image from 'next/image';
import { IconChevronRight } from '@tabler/icons';
import { IconArrowRight } from '@tabler/icons';
import styled from '@emotion/styled';
import { IconLink } from '@tabler/icons';
import { IconRefresh } from '@tabler/icons';
import { IconPaperclip } from '@tabler/icons';

const EarningIcon = '/assets/images/icons/chat-svgrepo-com1.svg';
const SpeechIcon = '/assets/images/icons/speech-to-text-svgrepo-com1.svg';
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
        width: '540px',
        padding: '0px'
};

interface Props {
        open: boolean;
        ModalOpen: () => void;
        ModalClose: () => void;
}

const IOSSwitch = styled((props: SwitchProps) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(
        ({ theme }) => ({
                width: 40,
                height: 20,
                padding: 0,
                '& .MuiSwitch-switchBase': {
                        padding: 0,
                        margin: 3,
                        transitionDuration: '300ms',
                        '&.Mui-checked': {
                                transform: 'translateX(20px)',
                                color: '#fff',
                                '& + .MuiSwitch-track': {
                                        backgroundColor: '#FEC200',
                                        opacity: 1,
                                        border: 0
                                },
                                '&.Mui-disabled + .MuiSwitch-track': {
                                        opacity: 0.5
                                }
                        },
                        '&.Mui-focusVisible .MuiSwitch-thumb': {
                                color: '#33cf4d',
                                border: '6px solid #fff'
                        },
                        '&.Mui-disabled .MuiSwitch-thumb': {
                                color: 'lightgray'
                        },
                        '&.Mui-disabled + .MuiSwitch-track': {
                                opacity: 0.7
                        }
                },
                '& .MuiSwitch-thumb': {
                        boxSizing: 'border-box',
                        width: 14,
                        height: 14
                },
                '& .MuiSwitch-track': {
                        borderRadius: 26 / 2,
                        backgroundColor: '#E9E9EA',
                        opacity: 1
                }
        })
);

const OverviewSettingsModal: React.FC<Props> = ({ open, ModalOpen, ModalClose }) => {
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
                                        <Box sx={{ padding: '10px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
                                                        WebApp Settings
                                                </Typography>
                                                <Button onClick={ModalClose} sx={{ minWidth: '10px' }}>
                                                        <IconX color="#717579" size="16" />
                                                </Button>
                                        </Box>
                                        <hr />
                                        <Box sx={{ padding: '10px 15px' }}>
                                                <Typography
                                                        sx={{
                                                                color: '#202224',
                                                                fontFamily: 'Poppins',
                                                                fontSize: '14px',
                                                                fontStyle: 'normal',
                                                                fontWeight: '500',
                                                                lineHeight: 'normal',
                                                                padding: '3px 0px'
                                                        }}
                                                >
                                                        WebApp Name
                                                </Typography>
                                                <Box sx={{ padding: '3px 0px' }}>
                                                        <TextField id="outlined-basic" label="Your app name" variant="outlined" sx={{ width: '100%' }} />
                                                </Box>
                                                <Typography
                                                        sx={{
                                                                color: '#202224',
                                                                fontFamily: 'Poppins',
                                                                fontSize: '14px',
                                                                fontStyle: 'normal',
                                                                fontWeight: '500',
                                                                lineHeight: 'normal',
                                                                padding: '3px 0px'
                                                        }}
                                                >
                                                        WebApp Description
                                                </Typography>
                                                <Box sx={{ padding: '5px 0px' }}>
                                                        <TextField id="outlined-multiline-flexible" multiline rows={3} label="Enter your description" variant="outlined" sx={{ width: '100%' }} />
                                                </Box>
                                                <Typography
                                                        sx={{
                                                                color: '#717579',
                                                                fontFamily: 'Poppins',
                                                                fontSize: '10px',
                                                                fontStyle: 'normal',
                                                                fontWeight: '500',
                                                                lineHeight: 'normal',
                                                                padding: '2px 0px'
                                                        }}
                                                >
                                                        This text will be displayed on the client side, providing basic guidance on how to use the application
                                                </Typography>

                                                <Typography
                                                        sx={{
                                                                color: '#202224',
                                                                fontFamily: 'Poppins',
                                                                fontSize: '14px',
                                                                fontStyle: 'normal',
                                                                fontWeight: '500',
                                                                lineHeight: 'normal',
                                                                padding: '3px 0px'
                                                        }}
                                                >
                                                        Language
                                                </Typography>
                                                <Box sx={{ padding: '5px 0px' }}>
                                                        <Select value={"Select Language"} sx={{ background: '#F3F3F3', width: "100%" }}>
                                                                <MenuItem value={'0'} sx={{ display: 'flex' }}>
                                                                        <Typography >Select Language</Typography>
                                                                </MenuItem>
                                                                <MenuItem value={'1'}>Last month</MenuItem>
                                                                <MenuItem value={'2'}>Last Year</MenuItem>
                                                        </Select>
                                                </Box>
                                                <Typography
                                                        sx={{
                                                                color: '#202224',
                                                                fontFamily: 'Poppins',
                                                                fontSize: '14px',
                                                                fontStyle: 'normal',
                                                                fontWeight: '500',
                                                                lineHeight: 'normal',
                                                                padding: '3px 0px'
                                                        }}
                                                >
                                                        Copyright
                                                </Typography>
                                                <Box sx={{ padding: '5px 0px' }}>
                                                        <TextField id="outlined-basic" label="Enter the name of the author" variant="outlined" sx={{ width: '100%' }} />
                                                </Box>
                                                <Typography
                                                        sx={{
                                                                color: '#202224',
                                                                fontFamily: 'Poppins',
                                                                fontSize: '14px',
                                                                fontStyle: 'normal',
                                                                fontWeight: '500',
                                                                lineHeight: 'normal',
                                                                padding: '3px 0px'
                                                        }}
                                                >
                                                        Privacy Policy
                                                </Typography>
                                                <Box sx={{ padding: '5px 0px' }}>
                                                        <TextField id="outlined-basic" label="Enter the name of the author" variant="outlined" sx={{ width: '100%' }} />
                                                </Box>
                                                <Typography
                                                        sx={{
                                                                color: '#717579',
                                                                fontFamily: 'Poppins',
                                                                fontSize: '10px',
                                                                fontStyle: 'normal',
                                                                fontWeight: '500',
                                                                lineHeight: 'normal',
                                                                padding: '2px 0px'
                                                        }}
                                                >
                                                        Helps visitors understand the data the application collects, see infrahive <Typography
                                                                sx={{
                                                                        color: '#669DF6',
                                                                        hoverColor: ":hover #4285F4",
                                                                        fontFamily: 'Poppins',
                                                                        fontSize: '10px',
                                                                        fontStyle: 'normal',
                                                                        fontWeight: '500',
                                                                        lineHeight: 'normal',
                                                                        display: "inline",
                                                                        padding: '2px 0px'
                                                                }}
                                                        >
                                                                Privacy Policy.
                                                        </Typography>
                                                </Typography>
                                                <Typography id="transition-modal-description" sx={{ mt: 2, mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
                                                        <Button onClick={ModalClose} sx={{ borderRadius: '20px', color: '#717579', fontSize: '13px', padding: '5px 20px' }}>
                                                                Cancel
                                                        </Button>
                                                        <Button
                                                                sx={{
                                                                        borderRadius: '20px',
                                                                        background: '#FEC200 !important',
                                                                        color: 'white',
                                                                        fontSize: '13px',
                                                                        padding: '5px 20px',
                                                                        ml: 1
                                                                }}
                                                        >
                                                                Create
                                                        </Button>
                                                </Typography>
                                        </Box>
                                </Box>
                        </Fade>
                </Modal>
        );
};

export default OverviewSettingsModal;
