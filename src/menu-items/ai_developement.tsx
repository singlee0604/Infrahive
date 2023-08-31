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
  IconPuzzle,
  IconDna,
  IconFile3d
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
  IconDna,
  IconPuzzle,
  IconFile3d
};

// ==============================|| UI FORMS MENU ITEMS ||============================== //

const ai_developement = {
  id: 'ai_developement',
  title: <FormattedMessage id="ai_developement" />,
  type: 'group',
  children: [
    {
      id: 'auto_gpt_app',
      title: <FormattedMessage id="auto_gpt_app" />,
      type: 'item',
      // icon: icons.IconRobot,
      // url: '/dashboard/under-construction'
      url: '/dashboard/autogpt_agents',
      icon: icons.IconRobot
    },
    {
      id: 'chatgpt_plugins',
      title: <FormattedMessage id="chatgpt_plugins" />,
      type: 'item',
      icon: icons.IconPuzzle,
      url: '/dashboard/under-construction'
    },
    {
      id: 'lang_chain_app',
      title: <FormattedMessage id="lang_chain_app" />,
      type: 'item',
      icon: icons.IconDna,
      url: '/dashboard/under-construction'
    },
    {
      id: 'train_fine_tune',
      title: <FormattedMessage id="train_fine_tune" />,
      type: 'item',
      icon: icons.IconFile3d,
      url: '/dashboard/under-construction'
    }
  ]
};

export default ai_developement;

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
