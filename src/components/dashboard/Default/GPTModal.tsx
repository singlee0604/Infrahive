import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconMultiplier1x } from '@tabler/icons';
import { IconX } from '@tabler/icons';
import {
	Avatar,
	Chip,
	FormControl,
	Grid,
	Input,
	MenuItem,
	Select,
	SelectChangeEvent,
	TextField,
	ToggleButton,
	ToggleButtonGroup
} from '@mui/material';
import AppCard from './AppCard';
import Image from 'next/image';
import { IconChevronRight } from '@tabler/icons';
import { IconArrowRight } from '@tabler/icons';
import InputSlider from './InputSlider';
const GPTicon = '/assets/images/icons/GPTicon.png';

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
	width: '640px',
	padding: '0px'
};

interface Props {
	open: boolean;
	ModalOpen: () => void;
	ModalClose: () => void;
}

const GPTModal: React.FC<Props> = ({ open, ModalOpen, ModalClose }) => {
	const [isLoading, setLoading] = React.useState(true);

	React.useEffect(() => {
		setLoading(false);
	}, []);

	const [model, setModel] = React.useState('0');
	const handleChange1 = (event: SelectChangeEvent) => {
		setModel(event.target.value as string);
	};

	const [alignment, setAlignment] = React.useState('0');

	const handleChange2 = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
		setAlignment(newAlignment);
	};

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
							Let’s start with your new app
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
								padding: '10px 0px'
							}}
						>
							Model
						</Typography>
						<Box sx={{ padding: '5px 0px' }}>
							<FormControl sx={{
								width: '100%', '& .MuiOutlinedInput-input': {
									display: 'flex'
								}
							}} size="small">
								<Select value={model} onChange={handleChange1} sx={{ background: '#F3F3F3' }}>
									<MenuItem value={'0'} sx={{ display: 'flex' }}>
										<Image src={GPTicon} width={20} height={20} alt="GPTicon" />
										<Typography sx={{ ml: 1 }}>GPT-3.5-Turbo</Typography>
									</MenuItem>
									<MenuItem value={'1'}>Last month</MenuItem>
									<MenuItem value={'2'}>Last Year</MenuItem>
								</Select>
							</FormControl>
						</Box>
						<Typography
							sx={{
								color: '#202224',
								fontFamily: 'Poppins',
								fontSize: '14px',
								fontStyle: 'normal',
								fontWeight: '500',
								lineHeight: 'normal',
								padding: '10px 0px',
								marginTop: '20px'
							}}
						>
							Set tone of responses
						</Typography>
						<Box sx={{ width: '100%' }}>
							<ToggleButtonGroup
								color="primary"
								value={alignment}
								exclusive
								onChange={handleChange2}
								aria-label="Platform"
								fullWidth
								size="small"
								sx={{
									'& .Mui-selected': {
										color: '#fec200 !important',
										backgroundColor: '#717579 !important',
									}
								}}
							>
								<ToggleButton value="0" sx={{
									borderTopLeftRadius: '10px',
									borderBottomLeftRadius: '10px'
								}}>Creative</ToggleButton>
								<ToggleButton value="1">Balanced</ToggleButton>
								<ToggleButton value="2">Precise</ToggleButton>
								<ToggleButton value="3" sx={{
									borderTopRightRadius: '10px',
									borderBottomRightRadius: '10px'
								}}>Custom</ToggleButton>
							</ToggleButtonGroup>
						</Box>

						<Box sx={{ mt: 2 }}>
							<InputSlider title="Temperature" />
							<InputSlider title="Top P" />
							<InputSlider title="Presence penalty" />
							<InputSlider title="Frequency penalty" />
							<InputSlider title="Max token" />
						</Box>

						<Typography id="transition-modal-description" sx={{ mt: 2, mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
							<Button
								sx={{
									borderRadius: '20px',
									background: '#FEC200 !important',
									color: 'white',
									fontSize: '16px',
									padding: '5px 20px',
									mt: 1
								}}
							>
								Save
							</Button>
						</Typography>
					</Box>
				</Box>
			</Fade>
		</Modal >
	);
};

export default GPTModal;
