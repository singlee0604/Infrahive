import { ForwardRefExoticComponent, RefAttributes, forwardRef, useEffect } from 'react';
import { useRouter } from 'next/router';

import Link from 'Link';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';

// project imports
import useConfig from 'hooks/useConfig';
import { useDispatch, useSelector } from 'store';
import { activeItem, openDrawer } from 'store/slices/menu';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// types
import { LinkTarget, NavItemType } from 'types';
import { Box } from '@mui/system';

interface NavItemProps {
	item: NavItemType;
	level: number;
}

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level }: NavItemProps) => {
	const theme = useTheme();
	const { pathname } = useRouter();
	const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

	const { borderRadius } = useConfig();
	const dispatch = useDispatch();
	const { selectedItem } = useSelector((state) => state.menu);

	const Icon = item?.icon!;
	const itemIcon = item?.icon ? (
		<Icon stroke={1.5} size="20px" />
	) : (
		<FiberManualRecordIcon
			sx={{
				width: selectedItem.findIndex((id) => id === item?.id) > -1 ? 8 : 6,
				height: selectedItem.findIndex((id) => id === item?.id) > -1 ? 8 : 6
			}}
			fontSize={level > 0 ? 'inherit' : 'medium'}
		/>
	);

	let itemTarget: LinkTarget = '_self';
	if (item.target) {
		itemTarget = '_blank';
	}

	let listItemProps: {
		component: ForwardRefExoticComponent<RefAttributes<HTMLAnchorElement>> | string;
		href?: string;
		target?: LinkTarget;
	} = { component: forwardRef((props, ref) => <Link ref={ref} {...props} href={`${item.url!}`} target={itemTarget} />) };
	if (item?.external) {
		listItemProps = { component: 'a', href: item.url, target: itemTarget };
	}

	const itemHandler = (id: string) => {
		dispatch(activeItem([id]));
		if (matchesSM) dispatch(openDrawer(false));
	};

	// active menu item on page load
	useEffect(() => {
		const currentIndex = document.location.pathname
			.toString()
			.split('/')
			.findIndex((id) => id === item.id);
		if (currentIndex > -1) {
			dispatch(activeItem([item.id!]));
		}
		// eslint-disable-next-line
	}, [pathname]);

	return (
		<div style={{ position: 'relative' }}>
			<Box
				sx={{
					width: '9px',
					height: '100%',
					backgroundColor: '#FEC200',
					borderRadius: '0px 57px 57px 0px',
					position: 'absolute',
					left: '0px',
					zIndex: '1',
					display: selectedItem?.findIndex((id) => id === item.id) > -1 ? 'block' : 'none',
					color: selectedItem?.findIndex((id) => id === item.id) > -1 ? '#FEC200 !important' : '#717579'
				}}
			></Box>
			<ListItemButton
				{...listItemProps}
				disabled={item.disabled}
				sx={{
					borderBottomRightRadius: '40px',
					borderTopRightRadius: '10px', //`${borderRadius}px`,
					mb: 0.5,
					alignItems: 'flex-start',
					backgroundColor: selectedItem?.findIndex((id) => id === item.id) > -1 ? '#F8F8F8 !important' : 'inherit',
					color: selectedItem?.findIndex((id) => id === item.id) > -1 ? '#FEC200 !important' : '#717579 !important',
					py: level > 1 ? 1 : 1.25,
					pl: `${level * 24}px`,
					'&:hover': {
						background: '#F8F8F8 !important'
					}
				}}
				selected={selectedItem?.findIndex((id) => id === item.id) > -1}
				onClick={() => itemHandler(item.id!)}
			>
				<ListItemIcon
					sx={{
						my: 'auto',
						minWidth: !item?.icon ? 18 : 36,
						color: selectedItem?.findIndex((id) => id === item.id) > -1 ? '#FEC200 !important' : '#717579 !important'
					}}
				>
					{itemIcon}
				</ListItemIcon>
				<ListItemText
					primary={
						<Typography
							variant={selectedItem?.findIndex((id) => id === item.id) > -1 ? 'h5' : 'body1'}
							color={selectedItem?.findIndex((id) => id === item.id) > -1 ? '#FEC200' : '#717579'}
							fontWeight={500}
						>
							{item.title}
						</Typography>
					}
					secondary={
						item.caption && (
							<Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>
								{item.caption}
							</Typography>
						)
					}
				/>
				{item.chip && (
					<Chip
						color={item.chip.color}
						variant={item.chip.variant}
						size={item.chip.size}
						label={item.chip.label}
						avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
					/>
				)}
			</ListItemButton>
		</div>
	);
};

export default NavItem;
