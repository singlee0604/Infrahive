import { useEffect, useRef, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  ClickAwayListener,
  Divider,
  Grid,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  Paper,
  Popper,
  Stack,
  Switch,
  Typography
} from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Transitions from 'ui-component/extended/Transitions';
import UpgradePlanCard from './UpgradePlanCard';
import useAuth from 'hooks/useAuth';

// assets
import { IconLogout, IconSearch, IconSettings, IconUser, IconCaretDown } from '@tabler/icons';
import useConfig from 'hooks/useConfig';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { IconArrowSharpTurnRight } from '@tabler/icons';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const User1 = '/assets/images/users/user-round.svg';

// ==============================|| PROFILE MENU ||============================== //

const ProfileSection = () => {
  const theme = useTheme();
  const { borderRadius } = useConfig();
  // const navigate = useNavigate();
  const { data: session } = useSession();

  const [sdm, setSdm] = useState(true);
  const [value, setValue] = useState('');
  const [notification, setNotification] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { logout, user } = useAuth();
  const [open, setOpen] = useState(false);
  /**
   * anchorRef is used on different components and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef<any>(null);
  const handleLogout = async () => {
    try {
      await signOut();
    } catch (err) {
      console.error(err);
    }
  };

  const handleClose = (event: React.MouseEvent<HTMLDivElement> | MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement>, index: number, route: string = '') => {
    setSelectedIndex(index);
    handleClose(event);

    // if (route && route !== '') {
    //     navigate(route);
    // }
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  console.log('sessiom', session);
  return (
    <>
      <Chip
        sx={{
          height: '48px',
          alignItems: 'center',
          // borderRadius: '27px',
          transition: 'all .2s ease-in-out',
          border: '0px',
          ml: 3,
          // borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light,
          // backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light,
          '&[aria-controls="menu-list-grow"], &:hover': {
            // borderColor: theme.palette.primary.main,
            background: '#FEC20080', //`${theme.palette.primary.main}!important`,
            //color: theme.palette.primary.light,
            '& svg': {
              stroke: theme.palette.primary.light
            }
          },
          '& .MuiChip-label': {
            lineHeight: 0
          }
        }}
        icon={
          <Avatar
            src={User1}
            sx={{
              ...theme.typography.mediumAvatar,
              border: '2px solid #FEC200',
              margin: '8px 0 8px 8px !important',
              cursor: 'pointer'
            }}
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            color="inherit"
          />
        }
        label={
          <div style={{ lineHeight: '1', color: 'gray', display: 'flex', alignItems: 'center' }}>
            InfraHive
            <IconCaretDown color="gray" />
          </div>
        }
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 14]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClose}>
            <Transitions in={open} {...TransitionProps}>
              <Paper>
                {open && (
                  <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]} sx={{ width: '280px' }}>
                    <Box sx={{ p: 0, pb: 0 }}>
                      <Stack sx={{ dispaly: 'flex', flexDirection: 'row', alignItems: 'center', p: 1 }}>
                        <Avatar
                          src={User1}
                          sx={{
                            ...theme.typography.mediumAvatar,
                            border: '2px solid #FEC200',
                            margin: '8px 0 8px 8px !important',
                            cursor: 'pointer'
                          }}
                          color="inherit"
                        />
                        <Box sx={{ ml: 2 }}>
                          <Stack direction="row" spacing={0.5} alignItems="center">
                            <Typography variant="h5">InfraHive</Typography>
                          </Stack>
                          <Typography variant="subtitle2" sx={{ mt: -0.5 }}>myworkspace@mail.com</Typography>
                        </Box>
                      </Stack>
                      <hr />
                      <Box sx={{ p: 1 }}>
                        <Typography sx={{ pl: 1 }}>My workspace</Typography>
                        <Stack sx={{ dispaly: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                          <Avatar
                            src={"User1"}
                            sx={{
                              ...theme.typography.mediumAvatar,
                              border: '2px solid #FEC200',
                              margin: '8px 0 8px 8px !important',
                              cursor: 'pointer'
                            }}
                            color="inherit"
                          />
                          <Box sx={{ ml: 2, display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                            <Stack direction="row" spacing={0.5} alignItems="center">
                              <Typography variant="h5" sx={{ fontWeight: 400 }}>InfraHive Workspace</Typography>
                            </Stack>
                            <ArrowForwardIosIcon sx={{ fontSize: '18px' }} />
                          </Box>
                        </Stack>
                      </Box>
                      <Divider />
                    </Box>
                    <Box sx={{ p: 2, pt: 0, pb: 0 }}>
                      <List
                        component="nav"
                        sx={{
                          width: '100%',
                          maxWidth: 350,
                          minWidth: 300,
                          backgroundColor: theme.palette.background.paper,
                          borderRadius: '10px',
                          [theme.breakpoints.down('md')]: {
                            minWidth: '100%'
                          }
                        }}
                      >
                        <Link href={'/dashboard/account-settings'}>
                          <ListItemButton
                            sx={{ borderRadius: `${borderRadius}px`, padding: '5px', background: 'white !important' }}
                            selected={selectedIndex === 0}
                            onClick={(event: React.MouseEvent<HTMLDivElement>) =>
                              handleListItemClick(event, 0, '/user/account-profile/profile1')
                            }
                          >
                            <ListItemText primary={<Typography variant="body2">Setting</Typography>} sx={{ m: 0 }} />
                          </ListItemButton>
                        </Link>

                        <ListItemButton
                          sx={{ borderRadius: `${borderRadius}px`, padding: '5px', background: 'white !important' }}
                          selected={selectedIndex === 1}
                          onClick={(event: React.MouseEvent<HTMLDivElement>) =>
                            handleListItemClick(event, 1, '/user/social-profile/posts')
                          }
                        >
                          <ListItemText sx={{ m: 0 }}
                            primary={
                              <Typography variant="body2">Help Document</Typography>
                            }
                          />
                        </ListItemButton>
                        <ListItemButton sx={{ borderRadius: `${borderRadius}px`, padding: '5px', background: 'white !important' }} selected={selectedIndex === 4} onClick={handleLogout}>
                          <ListItemText sx={{ m: 0 }} primary={<Typography variant="body2">About</Typography>} />
                        </ListItemButton>
                      </List>
                    </Box>
                    <Divider />
                    <Box sx={{ p: 2, pt: 1, pb: 1 }}>
                      <ListItemButton sx={{ borderRadius: `${borderRadius}px`, padding: '5px', background: 'white !important' }} selected={selectedIndex === 4} onClick={handleLogout}>
                        <ListItemText sx={{ m: 0 }} primary={<Typography variant="body2">Logout</Typography>} />
                      </ListItemButton>
                    </Box>
                  </MainCard>
                )}
              </Paper>
            </Transitions>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  );
};

export default ProfileSection;
