// material-ui
import { Box } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
// import { useState } from 'react';

// ==============================|| LOGO Part ||============================== //

const Logo = () => {
  // const theme = useTheme();
  const router = useRouter();
  // const logUrl = useState('');
  return (
    // Logo (Digest).png
    <Box
      component={'img'}
      onClick={() => router.push('/')}
      src="/assets/images/header/logo.png"
      sx={{
        width: '150px',
        cursor: 'pointer'
      }}
      alt={'InfraHive - Logo'}
    />
  );
};

export default Logo;
