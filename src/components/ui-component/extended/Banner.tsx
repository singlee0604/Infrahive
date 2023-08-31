import React from // , { ReactElement }
'react';

// material-ui
import {
  // useTheme,
  styled
} from '@mui/material/styles';
import {
  Box,
  Link,
  Typography
  // , useScrollTrigger
} from '@mui/material';

// elevation scroll
// interface ElevationScrollProps {
//   children: ReactElement;
//   window?: Window | Node;
// }
// function ElevationScroll({ children, window }: ElevationScrollProps) {
//   const theme = useTheme();
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: window!
//   });
//   const darkBorder = theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.grey[200];

//   return React.cloneElement(children, {
//     elevation: trigger ? 2 : 0,
//     style: {
//       backgroundColor: theme.palette.background.default,
//       borderBottom: trigger ? 'none' : '1px solid',
//       borderColor: trigger ? '' : darkBorder,
//       color: theme.palette.text.dark
//     }
//   });
// }

const BoxBanner = styled(Link)(({ theme }) => ({
  overflowX: 'hidden',
  overflowY: 'clip',
  padding: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  lineHeight: 1.6,
  backgroundColor: '#262626',
  height: '40px',
  [theme.breakpoints.down('md')]: {
    '& img': {
      display: 'none'
    },
    '& h3': {
      fontSize: '1rem',
      textAlign: 'center'
    }
  }
}));

// ==============================|| MINIMAL LAYOUT APP BAR ||============================== //

const Banner = ({ ...others }) => {
  // const [drawerToggle, setDrawerToggle] = React.useState<boolean>(false);
  // /** Method called on multiple components with different event types */
  // const drawerToggler = (open: boolean) => (event: any) => {
  //   if (event.type! === 'keydown' && (event.key! === 'Tab' || event.key! === 'Shift')) {
  //     return;
  //   }
  //   setDrawerToggle(open);
  // };

  return (
    <BoxBanner href="https://github.com/novuhq/novu" target="_blank">
      <Box component={'img'} src="/assets/images/banner/back1.svg" />
      <Typography variant="h3">
        Novu is&nbsp;
        <span
          style={{
            background: 'linear-gradient(180deg,#ffe14d 38%,rgba(255,225,77,.7))',
            WebkitTextFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            fontWeight: '800'
          }}
        >
          Open-source
        </span>
        ,help us by starring our GitHub repo 🚀
      </Typography>
      <Box component={'img'} src="/assets/images/banner/back2.svg" />
    </BoxBanner>
  );
};

export default Banner;
