// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  IconClipboardCheck,
  IconPictureInPicture,
  IconRobot,
  IconBuildingSkyscraper,
  IconForms,
  IconBorderAll,
  IconChartDots,
  IconStairsUp,
  IconDna
} from '@tabler/icons';

// constant
const icons = {
  IconClipboardCheck,
  IconPictureInPicture,
  IconForms,
  IconBorderAll,
  IconChartDots,
  IconStairsUp,
  IconRobot,
  IconBuildingSkyscraper,
  IconDna
};

// ==============================|| UI FORMS MENU ITEMS ||============================== //

const custom_ai_development = {
  id: 'custom_ai_development',
  title: <FormattedMessage id="custom_ai_development" />,
  type: 'group',
  children: [
    {
      id: 'enterprise_ai',
      title: <FormattedMessage id="enterprise_ai" />,
      type: 'item',
      url: '/dashboard/enterpriseai',
      icon: icons.IconBuildingSkyscraper
    },

    // {
    //   id: 'government_ai',
    //   title: <FormattedMessage id="government_ai" />,
    //   url: '/dashboard/governmentai',
    //   type: 'item',
    //   icon: icons.IconForms
    // }
  ]
};

export default custom_ai_development;

// {
//   id: 'charts',
//   title: <FormattedMessage id="charts" />,
//   type: 'collapse',
//   icon: icons.IconChartDots,
//   children: [
//     {
//       id: 'apexchart',
//       title: <FormattedMessage id="apexchart" />,
//       type: 'item',
//       url: '/forms/charts/apexchart',
//       breadcrumbs: false
//     },
//     {
//       id: 'organization-chart',
//       title: <FormattedMessage id="organization-chart" />,
//       type: 'item',
//       url: '/forms/charts/orgchart',
//       breadcrumbs: false
//     }
//   ]
// },
// {
//   id: 'forms-validation',
//   title: <FormattedMessage id="forms-validation" />,
//   type: 'item',
//   url: '/forms/forms-validation',
//   icon: icons.IconClipboardCheck
// },
// {
//   id: 'forms-wizard',
//   title: <FormattedMessage id="forms-wizard" />,
//   type: 'item',
//   url: '/forms/forms-wizard',
//   icon: icons.IconStairsUp
// }
