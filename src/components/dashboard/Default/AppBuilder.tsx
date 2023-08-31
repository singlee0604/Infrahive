/* eslint-disable prettier/prettier */
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
	OutlinedInput,
	InputAdornment,
	IconButton
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
import GPTModal from './GPTModal';
import AdditionModal from './AdditionModal';
import DatasetsModal from './DatasetsModal';
import ActionAllModal from './ActionAllModal';
import ModifyModal from './ModifyModal';

const SpeechIcon = '/assets/images/icons/speech-to-text-svgrepo-com1.svg';
const TextIcon = '/assets/images/icons/insert-word-svgrepo-com1.svg';
const ChatIcon = '/assets/images/icons/chat-svgrepo-com1.svg';
const TickIcon = '/assets/images/icons/correct-success-tick-svgrepo-com1.svg';
// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

interface AppCardProps {
	isLoading: boolean;
}

const style = {
	borderRadius: '10px',
	boxShadow: 24,
	p: 4,
	fill: '#FFF',
	width: '500px',
	padding: '0px'
};

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

const AppBuilder = ({ isLoading }: AppCardProps) => {
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

	const [additionalopen, setAdditionalopen] = React.useState(false);
	const AddModalOpen = () => setAdditionalopen(true);
	const AddModalClose = () => setAdditionalopen(false);

	const [openDB, setOpenDB] = React.useState(false);
	const DBModalOpen = () => setOpenDB(true);
	const DBModalClose = () => setOpenDB(false);


	const [modify, setModify] = React.useState(false);
	const modifyOpen = () => setModify(true);
	const modifyClose = () => setModify(false);

	const [actionOpen, setActionOpen] = React.useState(false);
	const ActionModalOpen = () => setActionOpen(true);
	const ActionModalClose = () => setActionOpen(false);

	return (
		<>
			<Box>
				<Grid container spacing={2}>
					<Grid item xs={5} md={5}>
						<Box sx={{ background: 'white', borderRadius: '10px' }}>
							<Box sx={{ padding: '20px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
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
									AI Chatbot Settings
								</Typography>
								{/* <Stack direction="row" spacing={1} sx={{ mt: 4 }}>
                  <Button sx={{ padding: '0px', borderRadius: '20px' }}>
                    <Chip
                      icon={<IconStars size={18} color="#FEC200" />}
                      label="Preview"
                      sx={{ fontSize: '14px', background: '#FEC2001A', color: '#FEC200' }}
                    />
                  </Button>
                  <Button sx={{ padding: '0px', borderRadius: '20px' }} onClick={ModalOpen}>
                    <Chip
                      icon={<IconPlus size={18} color="white" />}
                      label="Add Feature"
                      sx={{ fontSize: '14px', background: '#FEC200', color: 'white' }}
                    />
                  </Button>
                </Stack> */}
								<Box
									sx={{
										position: 'relative',
										mt: 2,
										width: '100%'
									}}
								>
									<textarea
										style={{
											width: '100%',
											border: '1px solid gray',
											outline: 'none',
											borderRadius: '10px',
											padding: '10px',
											height: '280px',
											resize: 'none',
											color: 'gray',
											fontSize: '11px'
										}}
									>
										{`Tell the AI what kind of chatbot do you want to build! Specify the purpose of the chatbot, how it should behave, and more. You can create variables using “()” like (name). This setting won't be visible to users.\n
Act like a chatbot that:
  1. Says “Hi user (name)” at the beginning of the chat
  2. Answer only questions with www.hospital.com`}
									</textarea>
									<Button
										sx={{
											position: 'absolute',
											color: '#FEC200',
											bottom: '12px',
											right: '10px',
											padding: '0px',
											borderRadius: '100%',
											minWidth: '25px',
											height: '25px',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center'
										}}
									>
										<SendIcon sx={{ fontSize: '15px' }} />
									</Button>
								</Box>
							</Box>
						</Box>
						<br />

						<Box sx={{ background: 'white', borderRadius: '10px' }}>
							<Box sx={{ padding: '20px 30px', display: 'flex', alignItems: 'center' }}>
								<IconMessage2 width={25} height={25} color="#09BD3C" />
								<Typography
									sx={{
										color: '#202224',
										fontFamily: 'Poppins',
										fontSize: '16px',
										fontStyle: 'normal',
										fontWeight: '500',
										lineHeight: 'normal',
										ml: 1
									}}
								>
									Chatbot Features
								</Typography>
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
									<Typography color="#717579" fontSize={12}>
										You can add more features for the chatbot
									</Typography>
								</Typography>
								<Box
									sx={{
										padding: '10px 20px',
										display: 'flex',
										justifyContent: 'space-between',
										background: '#F6F6F9',
										borderRadius: '10px',
										alignItems: 'flex-start'
									}}
								>
									<Typography
										sx={{
											color: '#202224',
											fontFamily: 'Poppins',
											fontSize: '16px',
											fontStyle: 'normal',
											fontWeight: '500',
											lineHeight: 'normal',
											display: 'flex',
											width: '80%',
											alignItems: 'flex-start'
										}}
									>
										<Image alt="image" src={ChatIcon} width={30} height={30} style={{ marginTop: 4 }} />
										<Box sx={{ ml: 1 }}>
											Default Messages
											<Typography fontSize={11} color="#717579">
												Create specific sentences for the AI to follow. For example, first sentence that the AI will use as welcome message
											</Typography>
										</Box>
									</Typography>
									<FormControlLabel control={<IOSSwitch />} label="" sx={{ marginRight: '0px', mt: 1 }} />
								</Box>
								<Box
									sx={{
										padding: '10px 20px',
										display: 'flex',
										justifyContent: 'space-between',
										background: '#F6F6F9',
										borderRadius: '10px',
										alignItems: 'flex-start',
										mt: 2
									}}
								>
									<Typography
										sx={{
											color: '#202224',
											fontFamily: 'Poppins',
											fontSize: '16px',
											fontStyle: 'normal',
											fontWeight: '500',
											lineHeight: 'normal',
											display: 'flex',
											width: '80%',
											alignItems: 'flex-start'
										}}
									>
										<Image alt="image" src={TickIcon} width={30} height={30} style={{ marginTop: 4 }} />
										{/* <IconMessage2 width={60} height={35} color="#09BD3C" /> */}
										<Box sx={{ ml: 2 }}>
											Actions
											<Typography fontSize={11} color="#717579">
												Enable the AI to take actions on behalf of users. For example, creating an account on a website.
											</Typography>
										</Box>
									</Typography>
									<FormControlLabel control={<IOSSwitch defaultChecked />} label="" sx={{ marginRight: '0px', mt: 1 }} />
								</Box>
								<Box
									sx={{
										padding: '10px 20px',
										display: 'flex',
										justifyContent: 'space-between',
										background: '#F6F6F9',
										borderRadius: '10px',
										alignItems: 'flex-start',
										mt: 2
									}}
								>
									<Typography
										sx={{
											color: '#202224',
											fontFamily: 'Poppins',
											fontSize: '16px',
											fontStyle: 'normal',
											fontWeight: '500',
											lineHeight: 'normal',
											display: 'flex',
											width: '80%',
											alignItems: 'flex-start'
										}}
									>
										<Image alt="Image" src={SpeechIcon} width={30} height={30} style={{ marginTop: 4 }} />
										<Box sx={{ ml: 1 }}>
											Speech to Text
											<Typography fontSize={11} color="#717579">
												Enable user to use audio input instead of just using text
											</Typography>
										</Box>
									</Typography>
									<FormControlLabel control={<IOSSwitch />} label="" sx={{ marginRight: '0px', mt: 1 }} />
								</Box>
								<br />
								<br />
							</Box>
						</Box>

						<br />

						<Box sx={{ background: 'white', borderRadius: '10px' }}>
							<Box sx={{ padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
									<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<IconFile color="#9FC4FF"></IconFile>
										<Typography sx={{ ml: 0.5 }}>Additional Info</Typography>
									</Box>
								</Typography>
								<Button sx={{ padding: '0px', borderRadius: '20px' }} onClick={AddModalOpen}>
									<Chip
										icon={<IconPlus size={18} color="white" />}
										label="Add"
										sx={{ fontSize: '14px', background: '#10A37F', color: 'white', padding: '10px', height: '25px' }}
									/>
								</Button>
							</Box>
							<hr />
							<Box sx={{ padding: '0px 20px' }}>
								<Typography
									sx={{
										color: '#202224',
										fontFamily: 'Poppins',
										fontSize: '11px',
										fontStyle: 'normal',
										fontWeight: '500',
										lineHeight: 'normal',
										padding: '10px 0px'
									}}
								>
									You can import datasets as additional knowledge for the AI to use
								</Typography>
							</Box>
						</Box>
						<br />
						<Box sx={{ background: 'white', borderRadius: '10px' }}>
							<Box sx={{ padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
									<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<IconVariable color="#FEC200"></IconVariable>
										<Typography sx={{ ml: 0.5 }}>Variables</Typography>
									</Box>
								</Typography>
								{/* <Button sx={{ padding: '0px', borderRadius: '20px' }}>
                  <Chip
                    icon={<IconPlus size={18} color="white" />}
                    label="Add"
                    sx={{ fontSize: '14px', background: '#10A37F', color: 'white', padding: '10px', height: '25px' }}
                  />
                </Button> */}
							</Box>
							<hr />
							<Box sx={{ padding: '0px 20px' }}>
								<Typography
									sx={{
										color: '#202224',
										fontFamily: 'Poppins',
										fontSize: '11px',
										fontStyle: 'normal',
										fontWeight: '500',
										lineHeight: 'normal',
										padding: '10px 0px'
									}}
								>
									Variables allow users to introduce prompt words or opening remarks when filling out forms. You can try entering &qout;(input)&qout;
									in the prompt words.
								</Typography>
							</Box>
							<Box sx={{ padding: '0px' }}>
								<Table sx={{ backgroundColor: 'white', width: '100%' }}>
									<TableHead>
										<TableRow>
											<TableCell sx={{ backgroundColor: 'white', border: '0px', padding: '5px 20px', fontSize: '12px !important' }}>
												Variables
											</TableCell>
											<TableCell sx={{ backgroundColor: 'white', border: '0px', padding: '5px 20px', fontSize: '12px !important' }}>
												Data Source
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableCell
												sx={{
													backgroundColor: 'white',
													border: '0px',
													padding: '10px 20px',
													borderTop: '1px solid #D7D7D7',
													fontSize: '12px !important'
												}}
											>
												<TextField value="No Name" size="small" sx={{ width: '100px' }} />
											</TableCell>
											<TableCell
												sx={{
													backgroundColor: 'white',
													border: '0px',
													padding: '10px 20px',
													borderTop: '1px solid #D7D7D7',
													fontSize: '12px !important',
													display: 'flex'
												}}
											>
												<OutlinedInput
													endAdornment={
														<InputAdornment position="end" sx={{ mr: 1 }}>
															<IconButton
																sx={{
																	backgroundColor: '#FEC200 !important',
																	fontSize: '12px',
																	borderRadius: '20px',
																	height: '25px',
																	color: 'white'
																}}
																edge="end"
																onClick={modifyOpen}
															>
																Modify
															</IconButton>
														</InputAdornment>
													}
													value="Get from asking user about what they feeling"
													size="small"
												/>
												<IconButton sx={{ ml: 1 }} size="small" >
													<IconTrash width={20} height={20} />
												</IconButton>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell
												sx={{
													backgroundColor: 'white',
													border: '0px',
													padding: '10px 20px',
													borderTop: '1px solid #D7D7D7',
													fontSize: '12px !important'
												}}
											>
												<TextField value="No Name" size="small" sx={{ width: '100px' }} />
											</TableCell>
											<TableCell
												sx={{
													backgroundColor: 'white',
													border: '0px',
													padding: '10px 20px',
													borderTop: '1px solid #D7D7D7',
													fontSize: '12px !important',
													display: 'flex'
												}}
											>
												<OutlinedInput
													endAdornment={
														<InputAdornment position="end" sx={{ mr: 1 }}>
															<IconButton
																sx={{
																	backgroundColor: '#FEC200 !important',
																	fontSize: '12px',
																	borderRadius: '20px',
																	height: '25px',
																	color: 'white'
																}}
																edge="end"
																onClick={modifyOpen}
															>
																Modify
															</IconButton>
														</InputAdornment>
													}
													value="Get from asking user about what they feeling"
													size="small"
												/>
												<IconButton sx={{ ml: 1 }} size="small" >
													<IconTrash width={20} height={20} />
												</IconButton>
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</Box>
						</Box>
						<br />
						<Box sx={{ background: 'white', borderRadius: '10px' }}>
							<Box sx={{ padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
									<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<TaskAltIcon sx={{ color: '#9FC4FF' }}></TaskAltIcon>
										<Typography sx={{ ml: 0.5 }}>Actions</Typography>
									</Box>
								</Typography>
								<Button sx={{ padding: '0px', borderRadius: '20px' }} onClick={ActionModalOpen}>
									<Chip
										// icon={<IconPlus size={18} color="white" />}
										label="See All"
										sx={{ fontSize: '14px', background: '#202224', color: 'white', padding: '10px', height: '25px' }}
									/>
								</Button>
							</Box>
							<hr />
							<Box sx={{ padding: '0px 20px' }}>
								<Typography
									sx={{
										color: '#202224',
										fontFamily: 'Poppins',
										fontSize: '11px',
										fontStyle: 'normal',
										fontWeight: '500',
										lineHeight: 'normal',
										padding: '10px 0px'
									}}
								>
									Your website:
									<br />
									<Chip label="https://cloud.infrahive.ai/apps" sx={{ color: '#4285F4', borderRadius: '10px', fontSize: '12px', mt: 1 }} />
								</Typography>
								<Box
									sx={{
										padding: '10px',
										display: 'flex',
										justifyContent: 'space-between',
										border: '1px solid #71757980',
										borderRadius: '10px',
										alignItems: 'flex-start',
										mt: 2
									}}
								>
									<Typography
										sx={{
											color: '#202224',
											fontFamily: 'Poppins',
											fontSize: '16px',
											fontStyle: 'normal',
											fontWeight: '500',
											lineHeight: 'normal',
											display: 'flex',
											alignItems: 'flex-start'
										}}
									>
										<Box sx={{ ml: 1 }}>
											Artificial Intelligence
											<Typography fontSize={11} color="#717579">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											</Typography>
										</Box>
									</Typography>
									<FormControlLabel defaultChecked control={<IOSSwitch />} label="" sx={{ marginRight: '0px', mt: 1 }} />
								</Box>
								<Box
									sx={{
										padding: '10px',
										display: 'flex',
										justifyContent: 'space-between',
										border: '1px solid #71757980',
										borderRadius: '10px',
										alignItems: 'flex-start',
										mt: 2
									}}
								>
									<Typography
										sx={{
											color: '#202224',
											fontFamily: 'Poppins',
											fontSize: '16px',
											fontStyle: 'normal',
											fontWeight: '500',
											lineHeight: 'normal',
											display: 'flex',
											alignItems: 'flex-start'
										}}
									>
										<Box sx={{ ml: 1 }}>
											Book a Call
											<Typography fontSize={11} color="#717579">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											</Typography>
										</Box>
									</Typography>
									<FormControlLabel defaultChecked control={<IOSSwitch />} label="" sx={{ marginRight: '0px', mt: 1 }} />
								</Box>
								<br />
							</Box>
						</Box>
					</Grid>
					<Grid item xs={7} md={7}>
						<Box sx={{ background: '#D8E3F7', borderRadius: '10px', height: '100%' }}>
							<MessageBox />
						</Box>
					</Grid>
				</Grid>
			</Box>
			<AddFeatureModal key="featureModal" open={open} ModalClose={ModalClose} ModalOpen={ModalOpen} />
			<AdditionModal
				key="infoModal"
				open={additionalopen}
				ModalClose={AddModalClose}
				ModalOpen={AddModalOpen}
				openDB={openDB}
				DBModalClose={DBModalClose}
				DBModalOpen={DBModalOpen}
			/>
			<ModifyModal open={modify} ModalClose={modifyClose} ModalOpen={modifyOpen} />
			<DatasetsModal open={openDB} ModalClose={DBModalClose} ModalOpen={DBModalOpen} />
			<ActionAllModal open={actionOpen} ModalClose={ActionModalClose} ModalOpen={ActionModalOpen} />
		</>
	);
};

export default AppBuilder;
