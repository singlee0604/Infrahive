import React from 'react'
import AppBar from 'ui-component/extended/AppBar'
import { Box } from '@mui/material';
import Intro from 'components/business/Intro';
import Features from 'components/business/Features';
import GetDemo from 'components/business/GetDemo';
import Create from 'components/business/Create';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import PricingComp from 'components/business/PricingComp';
import Notification from 'components/landingpage/Notification';
import FooterPage from 'components/landingpage/Footer';

library.add(fas)
const index = () => {
  return (
    <div>
      <AppBar/>
      <Box component={'img'} src='/assets/images/header/background.svg'
        sx={{
          position: "absolute",
          top: "40px",
          maxWidth: "100%",
          zIndex: -1,
          width: "100%"
        }}
      />
      <Intro />
      <Features />
      <GetDemo />
      <Create />
      <PricingComp />
      <div className='mt-48'>
      <Notification />
      <FooterPage />
      </div>
    </div>
  )
}

export default index