import { FC, useEffect, ReactNode } from 'react';
import AppBar from 'ui-component/extended/AppBar';
import Footer from 'components/landingpage/Footer';
import { Container } from '@mui/material';
import useConfig from 'hooks/useConfig';
// project imports
// import Customization from '../Customization';

// ==============================|| MINIMAL LAYOUT ||============================== //

interface InfraLayoutProps {
  children: ReactNode;
}

const InfraLayout: FC<InfraLayoutProps> = ({ children }) => {
  const { onChangeMenuType } = useConfig();

  useEffect(() => {
    onChangeMenuType('light');
  }, []);

  return (
    <>
      <AppBar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default InfraLayout;
