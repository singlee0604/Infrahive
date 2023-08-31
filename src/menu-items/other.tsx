// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconSettings, IconHelp, IconSitemap } from '@tabler/icons';
import { IconFileDescription } from '@tabler/icons';
import { IconMessage } from '@tabler/icons';
// constant
const icons = {
	IconSettings,
	IconHelp,
	IconSitemap, IconFileDescription, IconMessage
};
// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //
const other = {
	id: 'sample-docs-roadmap',
	type: 'group',
	children: [
		{
			id: 'account-settings',
			title: <FormattedMessage id="Settings" />,
			type: 'item',
			url: '/dashboard/account-settings',
			icon: icons.IconSettings,
			breadcrumbs: false
		},
		{
			id: 'documentation',
			title: <FormattedMessage id="documentation" />,
			type: 'item',
			url: '#',
			icon: icons.IconFileDescription,
		},
		{
			id: 'roadmap',
			title: <FormattedMessage id="Chat & Support" />,
			type: 'item',
			url: '#',
			icon: icons.IconMessage,
		}
	]
};

export default other;
