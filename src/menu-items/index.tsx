import dashboard from './dashboard';
import generative from './generative';
import application from './application';
import ai_development from './ai_developement';
import custom_ai_development from './custom_ai_development';
import elements from './elements';
import pages from './pages';
import utilities from './utilities';
import support from './support';
import other from './other';
import { NavItemType } from 'types';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [dashboard, other]
  // items: [dashboard, generative, application, ai_development, elements, pages, utilities, support, other]
};

export default menuItems;
