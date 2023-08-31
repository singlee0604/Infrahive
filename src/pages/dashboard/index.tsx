import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useSelector } from 'react-redux';

// material-ui

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
import { Grid } from '@mui/material';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
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
        {/* {interests.length === 0 && (
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <IsFormFilled onClick={handleFormFilledClick} />
          </Grid>
        )} */}
        <Grid container spacing={gridSpacing} sx={{ paddingTop: '10px' }}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <AppCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <AppCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <NewCard isLoading={isLoading} />
          </Grid>
          {/* <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid> */}
        </Grid>
      </Grid>
      {/* <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid> */}
    </Grid>
  );
};
Dashboard.Layout = 'dashboardLayout';
export default Dashboard;
