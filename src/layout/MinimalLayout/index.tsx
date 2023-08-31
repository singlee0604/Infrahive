import { FC, ReactNode } from 'react';
// project imports
// import Customization from '../Customization';

// ==============================|| MINIMAL LAYOUT ||============================== //
interface MinimalLayoutProps {
  children: ReactNode;
}

const MinimalLayout: FC<MinimalLayoutProps> = ({ children }) => <>{children}</>;

export default MinimalLayout;
