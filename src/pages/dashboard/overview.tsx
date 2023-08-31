import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useSelector } from 'react-redux';

// material-ui
import { Grid } from '@mui/material';

// project imports
import EarningCard from '../../components/dashboard/Default/EarningCard';
import PopularCard from '../../components/dashboard/Default/PopularCard';
import TotalOrderLineChartCard from '../../components/dashboard/Default/TotalOrderLineChartCard';
import TotalIncomeDarkCard from '../../components/dashboard/Default/TotalIncomeDarkCard';
import TotalIncomeLightCard from '../../components/dashboard/Default/TotalIncomeLightCard';
import TotalGrowthBarChart from '../../components/dashboard/Default/TotalGrowthBarChart';
import { gridSpacing } from '../../store/constant';
// import OnBoarding from 'pages/onboarding';
import IsFormFilled from '../../components/dashboard/Default/IsFormFilled';
import AppCard from '../../components/dashboard/Default/AppCard';
import NewCard from '../../components/dashboard/Default/NewCard';
import TabComponent from '../../components/dashboard/Default/TabComponent';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Overview = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const interests = useSelector((state: any) => state.personalInterest.interests);

  const handleFormFilledClick = () => {
    router.push('/onboarding');
  };

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <TabComponent />
      </Grid>
    </Grid>
  );
};
Overview.Layout = 'dashboardLayout';
export default Overview;
