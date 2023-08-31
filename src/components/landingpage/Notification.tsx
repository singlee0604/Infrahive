// material-ui
import { Container, Grid, Typography, Box, Button, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
// project imports
import { gridSpacing } from 'store/constant';
const CardBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '70%',
  textAlign: 'center',
  justifyContent: 'center',
  gap: '30px',
  borderRadius: '20px',
  padding: '20px'
}));
const Notification = () => (
  <Container>
    <Grid container spacing={gridSpacing} gap={'20px'} sx={{ position: 'relative' }}>
      <Grid item textAlign={'center'} xs={12} lg={12} md={12} zIndex={2}>
        <Typography variant="h1" component="div" sx={{ color: 'rgb(215, 220, 236)' }}>
          Unleash the Power of AI with InfraHive
        </Typography>
      </Grid>
      <Grid container zIndex={2} justifyContent={'center'}>
        <Grid item md={6} xs={12} display={'flex'} flexDirection={'column'} alignItems={'center'} p={3}>
          <CardBox
            sx={{
              background: 'linear-gradient(90.13deg,rgb(254, 249, 195) .11%,rgb(253, 224, 71) 25.06%,rgb(234, 179, 8) )'
            }}
          >
            {/* <Stack direction={'column'} gap={'10px'}>
              <Typography variant="h2" component="div" color={'black'}>
                Cloud
              </Typography>
              <Typography variant="h4" component="div" color={'black'}>
                Use our free managed service
              </Typography>
            </Stack> */}
            <Button
              variant="contained"
              color="inherit"
              href="https://w0zxkfg7yyu.typeform.com/to/uUt0n1S4"
              target={'_blank'}
              sx={{
                width: '60%',
                margin: 'auto',
                color: 'white',
                background: '#00000094',
                '&:hover': {
                  background: '#141414c4'
                }
              }}
              size="medium"
            >
              Contact Now
            </Button>
          </CardBox>
        </Grid>
      </Grid>
      <img
        src="/assets/images/header/background.svg"
        loading="lazy"
        alt="InfraHive - Background"
        aria-hidden="true"
        style={{ color: '#1414149e', position: 'absolute', width: '100%', top: '0px', height: '100%' }}
      ></img>
    </Grid>
    <Divider sx={{ mt: 15 }} />
  </Container>
);

export default Notification;
