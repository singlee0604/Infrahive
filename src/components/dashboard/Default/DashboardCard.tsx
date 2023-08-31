import React, { Component } from 'react';
import Image from 'next/image';
// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Button, Grid, Menu, MenuItem, Typography } from '@mui/material';

// project imports
import MainCard from '../../ui-component/cards/MainCard';
import SkeletonAppCard from '../../ui-component/cards/Skeleton/AppCard';

// assets
const EarningIcon = '/assets/images/icons/app_user.png';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { IconTrash } from '@tabler/icons';
import GetAppTwoToneIcon from '@mui/icons-material/GetAppOutlined';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyOutlined';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfOutlined';
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveOutlined';
import { IconMessage2 } from '@tabler/icons';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.secondary.dark,
  //   color: '#fff',
  //   overflow: 'hidden',
  //   position: 'relative',
  //   '&:after': {
  //     content: '""',
  //     position: 'absolute',
  //     width: 210,
  //     height: 210,
  //     background:
  //       theme.palette.mode === 'dark'
  //         ? `linear-gradient(210.04deg, ${theme.palette.secondary.dark} -50.94%, rgba(144, 202, 249, 0) 95.49%)`
  //         : theme.palette.secondary[800],
  //     borderRadius: '50%',
  //     top: -85,
  //     right: -95,
  //     [theme.breakpoints.down('sm')]: {
  //       top: -105,
  //       right: -140
  //     }
  //   },
  //   '&:before': {
  //     content: '""',
  //     position: 'absolute',
  //     width: 210,
  //     height: 210,
  //     background:
  //       theme.palette.mode === 'dark'
  //         ? `linear-gradient(140.9deg, ${theme.palette.secondary.dark} -14.02%, rgba(144, 202, 249, 0) 85.50%)`
  //         : theme.palette.secondary[800],
  //     borderRadius: '50%',
  //     top: -125,
  //     right: -15,
  //     opacity: 0.5,
  //     [theme.breakpoints.down('sm')]: {
  //       top: -155,
  //       right: -70
  //     }
  //   }
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

interface DashboardCardProps {
  isLoading: boolean;
  title: string;
  numbers: string;
  color1: string;
  color2: string;
  increase: string;
  icon: React.ReactNode;
}

const DashboardCard = ({ isLoading, title, numbers, color1, color2, increase, icon }: DashboardCardProps) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<Element | (() => Element) | null | undefined>(null);

  const handleClick = (event: React.SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonAppCard />
      ) : (
        <CardWrapper border={false} content={false} sx={{ background: 'white' }}>
          <Box sx={{ p: 2 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                    <h1 style={{ marginLeft: '10px', fontSize: '20px', marginTop: '5px' }}>{title}</h1>
                  </Grid>
                  <Grid item>
                    <Button
                      sx={{
                        borderRadius: '10px',
                        backgroundColor: color1 + ' !important',
                        color: color2, //theme.palette.secondary[200],
                        zIndex: 1,
                        minWidth: '50px !important',
                        height: '50px'
                      }}
                      onClick={handleClick}
                    >
                      {icon}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ padding: '0px 10px' }}>
                <Grid container alignItems="center">
                  <Grid item>
                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mb: 0.75, color: '#202224' }}>{numbers}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid>
                <Typography
                  sx={{
                    fontWeight: 500,
                    color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : '#717579',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '5px 10px'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="27" viewBox="0 0 84 27" fill="none">
                    <path
                      d="M82 2L69.577 12.1182C66.0293 15.0077 56.5468 15.2312 52.2768 12.5259L50.0973 11.1451C45.6501 8.32753 35.6782 8.71373 32.4889 11.8271L21.6409 22.4166C18.6364 25.3495 9.46332 25.9095 4.65709 23.4534L2 22.0955"
                      stroke={color2}
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </svg>
                  <span style={{ marginLeft: '20px', fontSize: '12px', display: 'flex' }}>
                    <Typography sx={{ color: '#09BD3C' }}>+{increase}%</Typography>
                    <span style={{ marginLeft: '5px' }}>Up from today</span>
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

export default DashboardCard;
