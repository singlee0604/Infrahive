// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
	IconLayoutDashboard,
	IconBrandAirtable,
	IconDeviceAnalytics,
	IconDatabase,
	IconZoomQuestion,
	IconTopologyStar
} from '@tabler/icons';
import Storage from '@mui/icons-material/Storage';
import Explore from '@mui/icons-material/Explore';
import { OverrideIcon } from 'types';
import { Box } from '@mui/system';

// constant
const icons = {
	IconLayoutDashboard,
	IconDeviceAnalytics,
	IconDatabase,
	IconZoomQuestion,
	Explore,
	Storage,
	IconBrandAirtable,
	IconTopologyStar
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

interface DashboardMenuProps {
	id: string;
	title: React.ReactNode | string;
	type: string;
	children: {
		id: string;
		title: React.ReactNode | string;
		type: string;
		url: string;
		icon: OverrideIcon;
		breadcrumbs: boolean;
	}[];
}

const dashboard: DashboardMenuProps = {
	id: 'dashboard',
	title: <Box sx={{ ml: 3, color: 'gray' }}>Main Menu</Box>, //<FormattedMessage id="dashboard" />,
	type: 'group',
	children: [
		{
			id: 'dashboard',
			title: <FormattedMessage id="InfraBuilder" />,
			type: 'item',
			url: '/dashboard',
			icon: icons.IconLayoutDashboard,
			breadcrumbs: false
		},
		{
			id: 'explore',
			title: <FormattedMessage id="Explore" />,
			type: 'item',
			url: '/dashboard/explore',
			icon: icons.Explore,
			breadcrumbs: false
		},
		{
			id: 'datasets',
			title: <FormattedMessage id="Datasets" />,
			type: 'item',
			url: '/dashboard/datasets',
			icon: icons.IconBrandAirtable,
			breadcrumbs: false
		},
		{
			id: 'apikeys',
			title: <FormattedMessage id="API Keys" />,
			type: 'item',
			url: '/dashboard/api-keys',
			icon: icons.IconTopologyStar,
			breadcrumbs: false
		}
		// {
		//   id: 'analytics',
		//   title: <FormattedMessage id="Data" />,
		//   type: 'item',
		//   url: '/dashboard/data',
		//   icon: icons.Storage,
		//   breadcrumbs: false
		// }
	]
};

export default dashboard;
