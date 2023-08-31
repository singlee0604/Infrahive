// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconClipboardList, IconChartInfographic, IconCursorText } from '@tabler/icons';
import PhotoSizeSelectActual from '@mui/icons-material/PhotoSizeSelectActual';
import KeyboardVoice from '@mui/icons-material/KeyboardVoice';
// constant
const icons = {
  IconClipboardList,
  IconChartInfographic,
  IconCursorText,
  PhotoSizeSelectActual,
  KeyboardVoice
};

// ==============================|| WIDGET MENU ITEMS ||============================== //

const GenerativeAI = {
  id: 'generative_ai',
  title: <FormattedMessage id="generative ai" />,
  type: 'group',
  children: [
    {
      id: 'image',
      title: <FormattedMessage id="image" />,
      type: 'item',
      url: '/dashboard/images',
      icon: icons.PhotoSizeSelectActual
    },
    {
      id: 'text',
      title: <FormattedMessage id="Text" />,
      type: 'item',
      url: '/dashboard/texts',
      icon: icons.IconCursorText
    },
    {
      id: 'voice',
      title: <FormattedMessage id="voice" />,
      type: 'item',
      url: '/dashboard/voice',
      icon: icons.KeyboardVoice
    }
  ]
};

export default GenerativeAI;
