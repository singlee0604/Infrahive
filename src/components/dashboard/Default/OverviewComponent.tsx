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
	IconButton
} from '@mui/material';

// project imports

// assets
const EarningIcon = '/assets/images/icons/app_user.png';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {
	IconArrowRight,
	IconChevronRight,
	IconCreditCard,
	IconEye,
	IconFileDescription,
	IconMail,
	IconMessage,
	IconSettings,
	IconShare,
	IconShoppingBag,
	IconTrash,
	IconUser
} from '@tabler/icons';
import GetAppTwoToneIcon from '@mui/icons-material/GetAppOutlined';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyOutlined';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfOutlined';
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveOutlined';
import { IconMessage2 } from '@tabler/icons';
import AppCard from './AppCard';
import DashboardCard from './DashboardCard';
import PaddingChart from './PaddingChart';
import Link from 'Link';
import OverviewShareModal from './OverviewShareModal';
import OverviewEmbedModal from './OverviewEmbedModal';
import OverviewSettingsModal from './OverviewSettingsModal';
import ApexLineChart from 'components/forms/chart/Apexchart/ApexLineChart';
import ApexBarChart from 'components/forms/chart/Apexchart/ApexBarChart';
import TokenBar from './TokenUsage';
import ReactSpeedometer from "react-d3-speedometer"
import StasifactionBarChart from './StasifactionBarChart';
import SessionInteraction from './SessionInteraction';
// import { Bar, BarChart, Legend, Line, LineChart, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

interface AppCardProps {
	isLoading: boolean;
}

const OverviewComponent = ({ isLoading }: AppCardProps) => {
	const theme = useTheme();

	const [anchorEl, setAnchorEl] = React.useState<Element | (() => Element) | null | undefined>(null);

	const handleClick = (event: React.SyntheticEvent) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const barGraphData = [
		{ category: "detractors", value: "2" },
		{ category: "detractors", value: "3" },
		{ category: "detractors", value: "1" },
		{ category: "detractors", value: "4" },
		{ category: "detractors", value: "3" },
		{ category: "detractors", value: "2" },
		{ category: "detractors", value: "2" },
		{ category: "passives", value: "5" },
		{ category: "passives", value: "6" },
		{ category: "promote", value: "8" },
		{ category: "promote", value: "9" }
	]

	const [invite, setInvite] = React.useState(false);
	const inviteOpen = () => setInvite(true);
	const inviteClose = () => setInvite(false);

	const [embed, setEmbed] = React.useState(false);
	const embedOpen = () => setEmbed(true);
	const embedClose = () => setEmbed(false);

	const [setting, setSetting] = React.useState(false);
	const settingOpen = () => setSetting(true);
	const settingClose = () => setSetting(false);

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
						backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#FEC200',
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
					color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600]
				},
				'&.Mui-disabled + .MuiSwitch-track': {
					opacity: theme.palette.mode === 'light' ? 0.7 : 0.3
				}
			},
			'& .MuiSwitch-thumb': {
				boxSizing: 'border-box',
				width: 14,
				height: 14
			},
			'& .MuiSwitch-track': {
				borderRadius: 26 / 2,
				backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
				opacity: 1,
				transition: theme.transitions.create(['background-color'], {
					duration: 500
				})
			}
		})
	);

	const data = [
		{ name: 'Label 1', value: 10 },
		{ name: 'Label 2', value: 25 },
		{ name: 'Label 3', value: 15 }
	];

	return (
		<>
			<Box>
				<Grid container spacing={2}>
					<Grid item xs={6} md={6}>
						<Box sx={{ background: '#EDDCEF', borderRadius: '10px' }}>
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
									<Box>
										My Services
										<Chip
											label="In services"
											style={{ background: '#7ED19F20', color: '#17BD87', fontSize: '11px', height: '18px', marginLeft: '5px' }}
										/>
										<br />
									</Box>
									<Typography fontSize={11} color="#717579">
										Ready to use AI WebApp
									</Typography>
								</Typography>
								<FormControlLabel control={<IOSSwitch defaultChecked />} label="" sx={{ marginRight: '0px' }} />
							</Box>
							<hr />
							<Box sx={{ padding: '0px 20px' }}>
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
									Public URL
									<br />
									<Typography sx={{ color: '#717579' }} fontSize={13}>
										https://infrahive.app/chat/mG2koxh16GQE43h2
									</Typography>
								</Typography>
								<br />
								<br />
								<Stack direction="row" spacing={1}>
									<Link href={`/chat/${'id'}`}>
										<Chip icon={<IconEye size={18} />} label="Preview" sx={{ fontSize: '14px', background: 'white', color: '#202224' }} />
									</Link>
									<Button onClick={inviteOpen} sx={{ padding: '0px', borderRadius: '20px' }}>
										<Chip icon={<IconShare size={18} />} label="Share" sx={{ fontSize: '14px', background: 'white', color: '#202224' }} />
									</Button>
									<Button onClick={embedOpen} sx={{ padding: '0px', borderRadius: '20px' }}>
										<Chip
											icon={<IconCreditCard size={18} />}
											label="Embedded"
											sx={{ fontSize: '14px', background: 'white', color: '#202224' }}
										/>
									</Button>
									<Button onClick={settingOpen} sx={{ padding: '0px', borderRadius: '20px' }}>
										<Chip
											icon={<IconSettings size={18} />}
											label="Settings"
											sx={{ fontSize: '14px', background: 'white', color: '#202224' }}
										/>
									</Button>
								</Stack>
								<br />
							</Box>
							<hr />
							<Box sx={{ padding: '5px 20px' }}>
								<Button sx={{ padding: '10px' }}>
									<Typography sx={{ mr: 0.5, fontSize: '11px', color: '#202224' }}>Want to customize your WebApp?</Typography>
									<IconArrowRight size="16" />
								</Button>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={6} md={6}>
						<Box sx={{ background: '#D8E3F7', borderRadius: '10px' }}>
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
									<Box>
										Backend Service API
										<Chip
											label="In services"
											style={{ background: '#7ED19F20', color: '#17BD87', fontSize: '11px', height: '18px', marginLeft: '5px' }}
										/>
										<br />
									</Box>
									<Typography fontSize={11} color="#717579">
										Easily integrated into your application
									</Typography>
								</Typography>
								<FormControlLabel control={<IOSSwitch defaultChecked />} label="" sx={{ marginRight: '0px' }} />
							</Box>
							<hr />
							<Box sx={{ padding: '0px 20px' }}>
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
									Public URL
									<br />
									<Typography sx={{ color: '#717579' }} fontSize={13}>
										https://api.infrahive.ai/v1
									</Typography>
								</Typography>
								<br />
								<br />
								<Stack direction="row" spacing={1}>
									<Chip
										icon={<IconFileDescription size={18} />}
										label="API Reference"
										sx={{ fontSize: '14px', background: 'white', color: '#202224' }}
									/>
								</Stack>
								<br />
							</Box>
							<hr />
							<Box sx={{ padding: '5px 20px' }}>
								<Button sx={{ padding: '10px' }}>
									<Typography sx={{ mr: 0.5, fontSize: '11px', color: '#202224' }}>Want to customize your WebApp?</Typography>
									<IconArrowRight size="16" />
								</Button>
							</Box>
						</Box>
					</Grid>
				</Grid>
				<br />
				<Grid container spacing={2}>
					<Grid item xs={4} md={4}>
						<DashboardCard
							isLoading={isLoading}
							title="Active Users"
							numbers="1,367"
							color1="#EC545333"
							color2="#EC5453"
							increase="5"
							icon={<IconUser />}
						/>
					</Grid>
					<Grid item xs={4} md={4}>
						<DashboardCard
							isLoading={isLoading}
							title="Total Messages"
							numbers="100,367"
							color1="#D8E3F766"
							color2="#9FC4FF"
							increase="5"
							icon={<IconMail />}
						/>
					</Grid>
					<Grid item xs={4} md={4}>
						<DashboardCard
							isLoading={isLoading}
							title="Total Orders"
							numbers="60,367"
							color1="#FEC20033"
							color2="#FFD650"
							increase="5"
							icon={<IconShoppingBag />}
						/>
					</Grid>
				</Grid>
				<br />
				<Grid container spacing={2}>
					<Grid item xs={6} md={6}>
						<Box sx={{ borderRadius: '10px', background: 'white', padding: '20px', height: '600px' }}>
							<Typography>User Satisfaction Rate</Typography>
							<div>
								{/* <PaddingChart /> */}
							</div>
							<div className="relative h-full">
								<div className="absolute top-0 left-0 flex flex-col gap-1">
									<div className="flex gap-2">
										<div className="h-5 w-5 rounded-full bg-[#EF9995]"></div>
										<p>Detractors</p>
									</div>
									<div className="flex gap-2 ">
										<div className="h-5 w-5 rounded-full bg-[#F6CA81]"></div>
										<p>Passives</p>
									</div>
									<div className="flex gap-2">
										<div className="h-5 w-5 rounded-full bg-[#7ED19F]"></div>
										<p>Promote</p>
									</div>
								</div>
								<div className="w-full flex  justify-between items-center overflow-auto  h-[250px]">
									<StasifactionBarChart />
								</div>
							</div>
						</Box>
					</Grid>
					<Grid item xs={6} md={6}>
						<Box sx={{ background: 'white', borderRadius: '10px', mb: 2, height: '250px' }}>
							<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
								<Typography
									sx={{
										color: '#202224',
										fontFamily: 'Poppins',
										fontSize: '16px',
										fontStyle: 'normal',
										fontWeight: '500',
										lineHeight: 'normal',
										margin: "20px 10px"
									}}
								>
									<Box>Average Section Interaction</Box>
									<div className=" w-[500px] h-[200px]  bg-yellow-40">
										<SessionInteraction />
									</div>
								</Typography>
							</Box>
						</Box>
						<Grid container spacing={2}>
							<Grid item xs={6} md={6}>
								<Box sx={{ background: 'white', borderRadius: '10px', mb: 2, height: '334px' }}>
									<Box
										sx={{
											padding: '10px 20px',
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'center',
											alignItems: 'center'
										}}
									>
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
											Token Output Speed
										</Typography>
										<div>
											<div className="flex items-center justify-center   h-[200px] w-[250px]">
												{/* <ReactSpeedometer
													fluidWidth={true}
													forceRender={true}
													maxSegmentLabels={1}
													segmentColors={['#F9C8C7', '#F7DCB5']}
													needleColor={'#FEC200'}
													currentValueText={'Current Value: ${value}'}
													minValue={0}
													maxValue={100}
													value={45}
													customSegmentStops={[0, 60, 100]}
													textColor={"#AAA"}
												/> */}
											</div>
											<p className="text-[#717579] text-center">
												On Progress <span className="text-[#7ED19F]">50%</span>{' '}
											</p>
											<div className="my-3 text-center">
												<p className="text-sm text-[#717579]">Token Speed</p>
												<p className="text-xl text-[#202224]">0 Token/s</p>
											</div>
										</div>
									</Box>
								</Box>
							</Grid>
							<Grid item xs={6} md={6}>
								<Box sx={{ background: 'white', borderRadius: '10px', mb: 2, height: '334px' }}>
									<Box
										sx={{
											padding: '10px 20px',
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'center',
											alignItems: 'center'
										}}
									>
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
											Token Usage
										</Typography>
										<div>
											<div className='w-full flex items-center justify-center' >
												<div className="flex items-center justify-center  w-[70%]">
													<TokenBar score={80} />
												</div>
											</div>
											<p className="text-center my-3">You nearly reached your monthlytarget. Keep going! (5 days to go)</p>
											<div className="my-3 text-center">
												<p className="text-sm text-[#717579]">Consumed Token</p>
												<p className="text-xl text-[#202224]">$ 3500.55</p>
											</div>
										</div>
									</Box>
								</Box>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box >
			<OverviewShareModal open={invite} ModalClose={inviteClose} ModalOpen={inviteOpen} />
			<OverviewEmbedModal open={embed} ModalClose={embedClose} ModalOpen={embedOpen} />
			<OverviewSettingsModal open={setting} ModalClose={settingClose} ModalOpen={settingOpen} />
		</>
	);
};

export default OverviewComponent;
