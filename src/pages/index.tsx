// material-ui
import { styled } from '@mui/material/styles';

// project imports
import Header from 'components/landingpage/Header';
import EasyToUse from 'components/landingpage/EasyToUse';
import DiverseSupport from 'components/landingpage/DiverseSupport';
import ApiServices from 'components/landingpage/ApiServices';
import PromptEngineering from 'components/landingpage/PromptEngineering';
import EndlessPossibilities from 'components/landingpage/EndlessPossibilities';
import NextExperience from 'components/landingpage/NextExperience';
import LanguageCodeType from 'components/landingpage/LanguageCodeType';
import Notification from 'components/landingpage/Notification';
import Footer from 'components/landingpage/Footer';
// import Customization from 'layout/Customization';
import AppBar from 'ui-component/extended/AppBar';
// import Banner from 'ui-component/extended/Banner';
import { Box } from '@mui/material';
import useConfig from 'hooks/useConfig';
import { useEffect } from 'react';
import ProductPhilosophy from 'components/landingpage/ProductPhilosophy';
import EmbededDirectly from 'components/landingpage/EmbededDirectly';
import PowerOfDataSet from 'components/landingpage/PowerOfDataSet';
import Blogs from 'components/landingpage/Blogs';
import OptimizeStreamline from 'components/landingpage/OptimizeStreamline';
// import NewHeader from 'components/landingpage/NewHeader';
const HeaderWrapper = styled('div')(({ theme }) => ({
  overflowX: 'hidden',
  overflowY: 'clip',
  backgroundColor: '#0E0C15'
}));

const SecondWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingTop: 30,
  backgroundColor: '#0E0C15',
  [theme.breakpoints.down('md')]: {
    paddingTop: 60
  }
}));
const ThirdWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingTop: 60,
  backgroundColor: '#0E0C15',
  [theme.breakpoints.down('md')]: {
    paddingTop: 30
  }
}));

const FourthWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingTop: 60,
  backgroundColor: '#0E0C15',
  [theme.breakpoints.down('lg')]: {
    paddingTop: 30
  }
}));
const FullyWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  // paddingTop: 100,
  backgroundColor: '#0E0C15',
  [theme.breakpoints.down('md')]: {
    paddingTop: 30
  }
}));
const LastWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  // paddingTop: 100,
  backgroundColor: '#0E0C15',
  [theme.breakpoints.down('md')]: {
    paddingTop: 30
  }
}));
const SecondLastWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  // paddingTop: 100,
  backgroundColor: '#0E0C15',
  [theme.breakpoints.down('md')]: {
    paddingTop: 30
  }
}));
// =============================|| LANDING MAIN ||============================= //

const Landing: React.FC = () => {
  const { onChangeMenuType } = useConfig();
  useEffect(() => {
    onChangeMenuType('light');
  }, []);
  return (
    <>
      <HeaderWrapper id="home">
        {/* <Banner /> */}
        <AppBar background={'transparent'} />
        {/* <Box
          component={'img'}
          src="/assets/images/header/background.svg"
          sx={{
            position: 'absolute',
            top: '40px',
            maxWidth: '100%',
            zIndex: 1,
            width: '100%'
          }}
          alt="InfraHive - Background"
        /> */}
        <Header />
        {/* <NewHeader /> */}
      </HeaderWrapper>
      <FullyWrapper>
        <ProductPhilosophy />
      </FullyWrapper>
      <FullyWrapper>
        <EndlessPossibilities />
      </FullyWrapper>
      <SecondWrapper>
        <EasyToUse />
      </SecondWrapper>

      <ThirdWrapper>
        <DiverseSupport />
      </ThirdWrapper>
      <ThirdWrapper>
        <ApiServices />
      </ThirdWrapper>
      <FourthWrapper>
        <EmbededDirectly />
      </FourthWrapper>
      <FullyWrapper>
        <PromptEngineering />
      </FullyWrapper>
      <FullyWrapper>
        <NextExperience />
      </FullyWrapper>
      <FullyWrapper>
        <LanguageCodeType />
      </FullyWrapper>
      <LastWrapper>
        <PowerOfDataSet />
      </LastWrapper>

      {/*  */}
      <SecondLastWrapper>
        <Blogs />
      </SecondLastWrapper>
      <LastWrapper>
        <OptimizeStreamline />
      </LastWrapper>
      {/*  */}

      <ThirdWrapper>
        {/* <Notification /> */}
        <Footer />
      </ThirdWrapper>
      {/* <Customization /> */}
    </>
  );
};

export default Landing;
