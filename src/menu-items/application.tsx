// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconUserCheck, IconBasket, IconMessages, IconLayoutKanban, IconMail, IconCalendar, IconNfc, IconSql } from '@tabler/icons';
import FormatColorTextRounded from '@mui/icons-material/FormatColorTextRounded';
import InsertEmoticon from '@mui/icons-material/InsertEmoticon';
import InsertDriveFileOutlined from '@mui/icons-material/InsertDriveFileOutlined';
import OndemandVideo from '@mui/icons-material/OndemandVideo';
import FontDownload from '@mui/icons-material/FontDownload';
import Language from '@mui/icons-material/Language';
import Source from '@mui/icons-material/Source';
import Article from '@mui/icons-material/Article';
import PostAdd from '@mui/icons-material/PostAdd';
import AltRoute from '@mui/icons-material/AltRoute';
import Summarize from '@mui/icons-material/Summarize';
import Pets from '@mui/icons-material/Pets';
import BarChart from '@mui/icons-material/BarChart';
import SupportAgent from '@mui/icons-material/SupportAgent';
import QuestionAnswer from '@mui/icons-material/QuestionAnswer';
import Mediation from '@mui/icons-material/Mediation';
import ManageSearch from '@mui/icons-material/ManageSearch';
import Colorize from '@mui/icons-material/Colorize';

import FormatColorText from '@mui/icons-material/FormatColorText';

// constant
const icons = {
  IconUserCheck,
  IconBasket,
  IconMessages,
  IconLayoutKanban,
  IconMail,
  IconCalendar,
  IconNfc,
  Source,
  SupportAgent,
  Article,
  QuestionAnswer,
  Mediation,
  BarChart,
  PostAdd,
  AltRoute,
  Summarize,
  Pets,
  ManageSearch,
  FormatColorText,
  InsertEmoticon,
  Colorize,
  InsertDriveFileOutlined,
  OndemandVideo,
  IconSql,
  FontDownload,
  Language
};

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const application = {
  id: 'application',
  title: <FormattedMessage id="application" />,
  type: 'group',
  children: [
    ,
    {
      id: 'customer_support',
      title: <FormattedMessage id="customer_support" />,
      type: 'item',
      icon: icons.SupportAgent,
      url: '/app/cust_support'
    },
    {
      id: 'data_analysis',
      title: <FormattedMessage id="data_analysis" />,
      type: 'item',
      icon: icons.BarChart,
      url: '/dashboard/under-construction'
    },
    {
      id: 'sentiment_analyze',
      title: <FormattedMessage id="sentiment_analyze" />,
      type: 'item',
      icon: icons.InsertEmoticon,
      url: '/dashboard/explore/sentiment-analyze'
    },
    {
      id: 'text_summarize',
      title: <FormattedMessage id="text_summarize" />,
      type: 'item',
      icon: icons.FormatColorText,
      url: '/dashboard/explore/text-summarize'
    },
    {
      id: 'entity_extract',
      title: <FormattedMessage id="entity_extract" />,
      type: 'item',
      icon: icons.Colorize,
      url: '/dashboard/explore/entity-extract'
    },
    {
      id: 'data_transformer',
      title: <FormattedMessage id="data_transformer" />,
      type: 'item',
      icon: icons.InsertDriveFileOutlined,
      url: '/dashboard/explore/data-transformer'
    },
    {
      id: 'video_summarize',
      title: <FormattedMessage id="video_summarize" />,
      type: 'item',
      icon: icons.OndemandVideo,
      url: '/dashboard/explore/video-summerize'
    },
    {
      id: 'sql_write',
      title: <FormattedMessage id="sql_write" />,
      type: 'item',
      icon: icons.IconSql,
      url: '/dashboard/explore/sql-write'
    },
    {
      id: 'text_classification',
      title: <FormattedMessage id="text_classification" />,
      type: 'item',
      icon: icons.FontDownload,
      url: '/dashboard/explore/text-classification'
    },
    {
      id: 'language_translate',
      title: <FormattedMessage id="language_translate" />,
      type: 'item',
      icon: icons.Language,
      url: '/dashboard/explore/language_translate'
    }
    // {
    //   id: 'document_analysis',
    //   title: <FormattedMessage id="document_analysis" />,
    //   type: 'item',
    //   icon: icons.Article,
    //   url: '/app/docu_analysis',
    // },
    // {
    //   id: 'data_annotation',
    //   title: <FormattedMessage id="data_annotation" />,
    //   type: 'item',
    //   icon: icons.PostAdd,
    //   url: '/dashboard/under-construction'
    // },
    // {
    //   id: 'data_extractor',
    //   title: <FormattedMessage id="data_extractor" />,
    //   type: 'item',
    //   icon: icons.AltRoute,
    //   url: '/dashboard/under-construction'
    // },
    // {
    //   id: 'data_summarize',
    //   title: <FormattedMessage id="data_summarize" />,
    //   type: 'item',
    //   icon: icons.Summarize,
    //   url: '/dashboard/under-construction'
    // },
    // {
    //   id: 'image_classification',
    //   title: <FormattedMessage id="image_classification" />,
    //   type: 'item',
    //   icon: icons.Pets,
    //   url: '/dashboard/under-construction'
    // },

    // {
    //   id: 'name_entity_recognition',
    //   title: <FormattedMessage id="name_entity_recognition" />,
    //   type: 'item',
    //   icon: icons.IconUserCheck,
    //   url: '/dashboard/under-construction'
    // },

    // {
    //   id: 'structure_data_converter',
    //   title: <FormattedMessage id="structure_data_converter" />,
    //   type: 'item',
    //   icon: icons.Mediation,
    //   url: '/dashboard/under-construction'
    // },
    // {
    //   id: 'text_classification',
    //   title: <FormattedMessage id="text_classification" />,
    //   type: 'item',
    //   icon: icons.ManageSearch,
    //   url: '/dashboard/under-construction'
    // }
  ]
};

export default application;

// children: [
//   {
//     id: 'posts',
//     title: <FormattedMessage id="social-profile" />,
//     type: 'item',
//     url: '/app/user/social-profile/posts'
//   },
//   {
//     id: 'account-profile',
//     title: <FormattedMessage id="account-profile" />,
//     type: 'collapse',
//     children: [
//       {
//         id: 'profile1',
//         title: (
//           <>
//             <FormattedMessage id="profile" /> 01
//           </>
//         ),
//         type: 'item',
//         url: '/app/user/account-profile/profile1'
//       },
//       {
//         id: 'profile2',
//         title: (
//           <>
//             <FormattedMessage id="profile" /> 02
//           </>
//         ),
//         type: 'item',
//         url: '/app/user/account-profile/profile2'
//       },
//       {
//         id: 'profile3',
//         title: (
//           <>
//             <FormattedMessage id="profile" /> 03
//           </>
//         ),
//         type: 'item',
//         url: '/app/user/account-profile/profile3'
//       }
//     ]
//   },
//   {
//     id: 'user-card',
//     title: <FormattedMessage id="cards" />,
//     type: 'collapse',
//     children: [
//       {
//         id: 'card1',
//         title: (
//           <>
//             <FormattedMessage id="style" /> 01
//           </>
//         ),
//         type: 'item',
//         url: '/app/user/card/card1'
//       },
//       {
//         id: 'card2',
//         title: (
//           <>
//             <FormattedMessage id="style" /> 02
//           </>
//         ),
//         type: 'item',
//         url: '/app/user/card/card2'
//       },
//       {
//         id: 'card3',
//         title: (
//           <>
//             <FormattedMessage id="style" /> 03
//           </>
//         ),
//         type: 'item',
//         url: '/app/user/card/card3'
//       }
//     ]
//   },
//   {
//     id: 'user-list',
//     title: <FormattedMessage id="list" />,
//     type: 'collapse',
//     children: [
//       {
//         id: 'list1',
//         title: (
//           <>
//             <FormattedMessage id="style" /> 01
//           </>
//         ),
//         type: 'item',
//         url: '/app/user/list/list1'
//       },
//       {
//         id: 'list2',
//         title: (
//           <>
//             <FormattedMessage id="style" /> 02
//           </>
//         ),
//         type: 'item',
//         url: '/app/user/list/list2'
//       }
//     ]
//   }
// ]

// children: [
//   {
//     id: 'customer-list',
//     title: <FormattedMessage id="customer-list" />,
//     type: 'item',
//     url: '/app/customer/customer-list',
//     breadcrumbs: false
//   },
//   {
//     id: 'order-list',
//     title: <FormattedMessage id="order-list" />,
//     type: 'item',
//     url: '/app/customer/order-list',
//     breadcrumbs: false
//   },
//   {
//     id: 'order-details',
//     title: <FormattedMessage id="order-details" />,
//     type: 'item',
//     url: '/app/customer/order-details'
//   },
//   {
//     id: 'product',
//     title: <FormattedMessage id="product" />,
//     type: 'item',
//     url: '/app/customer/product',
//     breadcrumbs: false
//   },
//   {
//     id: 'product-review',
//     title: <FormattedMessage id="product-review" />,
//     type: 'item',
//     url: '/app/customer/product-review',
//     breadcrumbs: false
//   }
// ]

// {
//   id: 'chat',
//   title: <FormattedMessage id="chat" />,
//   type: 'item',
//   icon: icons.IconMessages,
//   url: '/app/chat'
// },
// {
//   id: 'kanban',
//   title: 'Kanban',
//   type: 'item',
//   icon: icons.IconLayoutKanban,
//   url: '/app/kanban/board'
// },
// {
//   id: 'mail',
//   title: <FormattedMessage id="mail" />,
//   type: 'item',
//   icon: icons.IconMail,
//   url: '/app/mail'
// },
// {
//   id: 'calendar',
//   title: <FormattedMessage id="calendar" />,
//   type: 'item',
//   url: '/app/calendar',
//   icon: icons.IconCalendar,
//   breadcrumbs: false
// },
// {
//   id: 'contact',
//   title: <FormattedMessage id="contact" />,
//   type: 'collapse',
//   icon: icons.IconNfc,
//   children: [
//     {
//       id: 'c-card',
//       title: <FormattedMessage id="cards" />,
//       type: 'item',
//       url: '/app/contact/c-card',
//       breadcrumbs: false
//     },
//     {
//       id: 'c-list',
//       title: <FormattedMessage id="list" />,
//       type: 'item',
//       url: '/app/contact/c-list',
//       breadcrumbs: false
//     }
//   ]
// },
// {
//   id: 'e-commerce',
//   title: <FormattedMessage id="e-commerce" />,
//   type: 'collapse',
//   icon: icons.IconBasket,
//   children: [
//     {
//       id: 'products',
//       title: <FormattedMessage id="products" />,
//       type: 'item',
//       url: '/app/e-commerce/products'
//     },
//     {
//       id: 'product-details',
//       title: <FormattedMessage id="product-details" />,
//       type: 'item',
//       url: '/app/e-commerce/product-details/1',
//       breadcrumbs: false
//     },
//     {
//       id: 'product-list',
//       title: <FormattedMessage id="product-list" />,
//       type: 'item',
//       url: '/app/e-commerce/product-list',
//       breadcrumbs: false
//     },
//     {
//       id: 'checkout',
//       title: <FormattedMessage id="checkout" />,
//       type: 'item',
//       url: '/app/e-commerce/checkout'
//     }
//   ]
// }
