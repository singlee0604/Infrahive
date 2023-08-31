// material-ui
import { Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';

// ==============================|| customer Tooltip Button ||============================== //

const TooltipButton = ({ text, image }: { text: String; image: String }) => {
  const theme = useTheme();
  // const router = useRouter();

  return (
    <Stack direction={'row'} alignItems={'center'} gap={'10px'}>
      <Box
        sx={{
          width: '40px',
          height: '40px',
          cursor: 'pointer',
          borderRadius: '50%',
          display: 'flex',
          backgroundColor: 'transparent',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box component={'img'} src={`/assets/images/${image}.png`} width={'100%'} height={'auto'} />
      </Box>
      <Typography sx={{ color: 'rgb(255, 255, 255)' }} variant="h4">
        {text}
      </Typography>
    </Stack>
  );
};

export default TooltipButton;
