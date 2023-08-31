import React from 'react';
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

interface AppCardProps {
  isLoading: boolean;
}

const AppCard = ({ isLoading }: AppCardProps) => {
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
          <Box sx={{ p: 2.25, height: '200px' }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      variant="rounded"
                      sx={{
                        // ...theme.typography.commonAvatar,
                        // ...theme.typography.largeAvatar,
                        // backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.secondary[800],
                        mt: 1,
                        ml: 1,
                        borderRadius: '10px'
                      }}
                    >
                      <Image src={EarningIcon} height={100} width={100} alt="Notification" />
                    </Avatar>
                    <h1 style={{ marginLeft: '10px', fontSize: '20px', marginTop: '5px' }}>My App</h1>
                  </Grid>
                  <Grid item>
                    <Button
                      sx={{
                        // ...theme.typography.commonAvatar,
                        // ...theme.typography.mediumAvatar,
                        mt: 1,
                        borderRadius: '10px',
                        backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'white',
                        border: '1px solid #EF9995',
                        color: '#EF9995', //theme.palette.secondary[200],
                        zIndex: 1,
                        minWidth: '30px !important',
                        height: '30px'
                      }}
                      //   aria-controls="menu-earning-card"
                      //   aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <IconTrash fontSize="inherit" size="14" />
                    </Button>
                    {/* <Menu
                      id="menu-earning-card"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      variant="selectedMenu"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                      }}
                    >
                      <MenuItem onClick={handleClose}>
                        <GetAppTwoToneIcon sx={{ mr: 1.75 }} /> Import Card
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <FileCopyTwoToneIcon sx={{ mr: 1.75 }} /> Copy Data
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <PictureAsPdfTwoToneIcon sx={{ mr: 1.75 }} /> Export
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <ArchiveTwoToneIcon sx={{ mr: 1.75 }} /> Archive File
                      </MenuItem>
                    </Menu> */}
                  </Grid>
                </Grid>
              </Grid>
              {/* <Grid item>
                <Grid container alignItems="center">
                  <Grid item>
                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>$500.00</Typography>
                  </Grid>
                  <Grid item>
                    <Avatar
                      sx={{
                        cursor: 'pointer',
                        ...theme.typography.smallAvatar,
                        backgroundColor: theme.palette.secondary[200],
                        color: theme.palette.secondary.dark
                      }}
                    >
                      <ArrowUpwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                    </Avatar>
                  </Grid>
                </Grid>
              </Grid> */}
              <Grid item sx={{ mb: 1.25, mt: 10 }}>
                <Typography
                  sx={{
                    fontWeight: 500,
                    color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : '#717579',
                    borderRadius: '20px',
                    border: '1px solid #717579',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '5px 10px',
                    width: '120px'
                  }}
                >
                  <IconMessage2 size="18" />
                  <span style={{ marginLeft: '5px', fontSize: '12px' }}>Chat App</span>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

export default AppCard;
