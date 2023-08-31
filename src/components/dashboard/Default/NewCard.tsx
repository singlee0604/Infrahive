import React from 'react';
import Image from 'next/image';
// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Button, Grid, Menu, MenuItem, Typography } from '@mui/material';

// project imports
import MainCard from '../../ui-component/cards/MainCard';
import SkeletonNewCard from '../../ui-component/cards/Skeleton/NewCard';

// assets
const EarningIcon = '/assets/images/icons/app_user.png';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { IconTrash } from '@tabler/icons';
import GetAppTwoToneIcon from '@mui/icons-material/GetAppOutlined';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyOutlined';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfOutlined';
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveOutlined';
import { IconMessage2 } from '@tabler/icons';
import { IconPlus } from '@tabler/icons';
import NewCardModal from './NewCardModal';

const CardWrapper = styled(MainCard)(({ theme }) => ({
	//   backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.secondary.dark,
	//   color: '#fff',
	//   overflow: 'hidden',
	//   position: 'relative',
	//   '&:after': {
	//     content: '""',
	//     position: 'absolute',
	//     width: 210,
	//     height: 210,
	//     background:
	//       theme.palette.mode === 'dark'
	//         ? `linear-gradient(210.04deg, ${theme.palette.secondary.dark} -50.94%, rgba(144, 202, 249, 0) 95.49%)`
	//         : theme.palette.secondary[800],
	//     borderRadius: '50%',
	//     top: -85,
	//     right: -95,
	//     [theme.breakpoints.down('sm')]: {
	//       top: -105,
	//       right: -140
	//     }
	//   },
	//   '&:before': {
	//     content: '""',
	//     position: 'absolute',
	//     width: 210,
	//     height: 210,
	//     background:
	//       theme.palette.mode === 'dark'
	//         ? `linear-gradient(140.9deg, ${theme.palette.secondary.dark} -14.02%, rgba(144, 202, 249, 0) 85.50%)`
	//         : theme.palette.secondary[800],
	//     borderRadius: '50%',
	//     top: -125,
	//     right: -15,
	//     opacity: 0.5,
	//     [theme.breakpoints.down('sm')]: {
	//       top: -155,
	//       right: -70
	//     }
	//   }
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

interface NewCardProps {
	isLoading: boolean;
}

const NewCard = ({ isLoading }: NewCardProps) => {
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

	return (
		<>
			{isLoading ? (
				<SkeletonNewCard />
			) : (
				<CardWrapper border={false} content={false} sx={{ background: 'white' }}>
					<Box sx={{ p: 1.5, height: '200px' }}>
						<Grid
							container
							direction="column"
							sx={{
								height: '100%',
								borderRadius: '5px',
								border: '1px dashed rgba(113, 117, 121, 0.30)',
								display: 'flex',
								alignItems: 'center',
								textAlign: 'center'
							}}
						>
							<Grid item sx={{ width: '100%', display: 'flex', margin: 'auto', textAlign: 'center', justifyContent: 'center' }}>
								<Button
									sx={{
										fontWeight: 500,
										color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : '#717579',
										borderRadius: '10px',
										border: '1px dashed #809FB8',
										display: 'flex',
										alignItems: 'center',
										padding: '5px',
										height: '100%',
										background: '#F4F9FB',
										width: '60%'
									}}
									onClick={ModalOpen}
								>
									<Box sx={{ padding: '8px', border: '1px solid #D9E1E7', borderRadius: '10px' }}>
										<IconPlus size="12" color="#F7B64B" />
									</Box>
									<span style={{ marginLeft: '5px', color: '#202224' }}>Create New App</span>
								</Button>
								<NewCardModal open={open} ModalOpen={ModalOpen} ModalClose={ModalClose} />
							</Grid>
						</Grid>
					</Box>
				</CardWrapper>
			)}
		</>
	);
};

export default NewCard;
