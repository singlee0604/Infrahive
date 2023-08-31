import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconMultiplier1x } from '@tabler/icons';
import { IconX } from '@tabler/icons';
import { Avatar, Grid, Input, TextField } from '@mui/material';
import AppCard from './AppCard';
import Image from 'next/image';
import { IconChevronRight } from '@tabler/icons';
import { IconArrowRight } from '@tabler/icons';

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

const NewCardModal: React.FC<Props> = ({ open, ModalOpen, ModalClose }) => {
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
							Give your app name
						</Typography>
						<Box sx={{ padding: '5px 0px' }}>
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
								padding: '10px 0px',
								marginTop: '20px'
							}}
						>
							What kind of app do you want?
						</Typography>
						<Grid container spacing={1} sx={{ paddingTop: '10px' }}>
							<Grid item lg={6} md={6} sm={6} xs={12}>
								<Box sx={{ p: 2.25, height: '200px', background: '#EDDCEF', borderRadius: '10px' }}>
									<Grid container direction="column">
										<Grid item sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
											<Image src={EarningIcon} height={45} width={45} alt="Notification" />
											<Typography fontSize={15} fontWeight={500} color={'black'}>
												Chat App
											</Typography>
											<Typography fontSize={11} color={'#717579'} sx={{ textAlign: 'center', mt: 2 }}>
												I want to build a chat-based application. This app uses a question-and-answer format, allowing for multiple
												rounds...
											</Typography>
											<Button
												sx={{ color: '#202224', mt: 2, borderRadius: '10px', fontSize: '11px', display: 'flex', alignItems: 'center' }}
											>
												<span>Preview Demo</span> <IconChevronRight size={15} />
											</Button>
										</Grid>
									</Grid>
								</Box>
							</Grid>
							<Grid item lg={6} md={6} sm={6} xs={12}>
								<Box sx={{ p: 2.25, height: '200px', background: '#D8E3F7', borderRadius: '10px' }}>
									<Grid container direction="column">
										<Grid item sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
											<Image src={TextIcon} height={45} width={45} alt="Notification" />
											<Typography fontSize={15} fontWeight={500} color={'black'}>
												Text Generator
											</Typography>
											<Typography fontSize={11} color={'#717579'} sx={{ textAlign: 'center', mt: 2 }}>
												I want to create an application that generates high-quality text based on prompts, such as generating articles,...
											</Typography>
											<Button
												sx={{ color: '#202224', mt: 2, borderRadius: '10px', fontSize: '11px', display: 'flex', alignItems: 'center' }}
											>
												<span>Preview Demo</span> <IconChevronRight size={15} />
											</Button>
										</Grid>
									</Grid>
								</Box>
							</Grid>
						</Grid>
						<Button sx={{ mt: 1, padding: '10px 0px' }}>
							<Typography sx={{ mr: 0.5, fontSize: '13px' }}>I want to choose from a template</Typography>
							<IconArrowRight size="16" />
						</Button>
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

export default NewCardModal;
