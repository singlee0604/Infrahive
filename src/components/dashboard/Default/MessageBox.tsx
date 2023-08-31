import React from 'react';
import { MainContainer } from '@minchat/react-chat-ui';
import { Box } from '@mui/system';
import {
  Avatar,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography
} from '@mui/material';
import { IconSend } from '@tabler/icons';
import Visibility from '@mui/icons-material/Visibility';
import SendIcon from '@mui/icons-material/Send';
const MessageBox = () => {
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ background: 'white', width: '100%', padding: '20px', color: '#202224', borderRadius: '10px 10px 0px 0px' }}>
        <Typography>Debugging and Previewing</Typography>
      </Box>
      <hr />
      <Box sx={{ background: 'white', width: '100%', padding: '20px', color: '#202224', flex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
          <Box sx={{ width: '60%', display: 'flex', justifyContent: 'flex-end', flexDirection: 'column' }}>
            <Typography sx={{ backgroundColor: '#FEC20033', color: '#717579', padding: '16px', borderRadius: '10px' }}>
              nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
            </Typography>
            <Typography fontSize={12} color="#717579" sx={{ mt: 1 }}>
              Sunday, August 06, 2023 at 4.30 AM
            </Typography>
          </Box>
          <Avatar sx={{ margin: '10px' }} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 2 }}>
          <Avatar sx={{ margin: '10px' }}> AK </Avatar>
          <Box sx={{ width: '60%', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
            <Typography sx={{ backgroundColor: '#F6F6F9', color: '#717579', padding: '16px', borderRadius: '10px' }}>
              nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
            </Typography>
            <Typography fontSize={12} color="#717579" sx={{ mt: 1 }}>
              Sunday, August 06, 2023 at 4.30 AM
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', mt: 2 }}>
          <Box sx={{ width: '60%', display: 'flex', justifyContent: 'flex-end', flexDirection: 'column' }}>
            <Typography sx={{ backgroundColor: '#FEC20033', color: '#717579', padding: '16px', borderRadius: '10px' }}>
              nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
            </Typography>
            <Typography fontSize={12} color="#717579" sx={{ mt: 1 }}>
              Sunday, August 06, 2023 at 4.30 AM
            </Typography>
          </Box>
          <Avatar sx={{ margin: '10px' }} />
        </Box>
      </Box>
      <Box sx={{ padding: '20px', background: 'white', borderRadius: '0px 0px 10px 10px' }}>
        <FormControl sx={{ m: 1, width: '100%' }} variant="filled">
          <OutlinedInput
            id="filled-adornment-password"
            endAdornment={
              <InputAdornment position="end" sx={{ mr: 1 }}>
                <IconButton sx={{ backgroundColor: '#FEC200 !important' }} edge="end">
                  <SendIcon style={{ fontSize: '16px', color: 'white' }} />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Typography sx={{ padding: '10px', fontSize: '12px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis orci massa. Suspendisse rhoncus
        </Typography>
      </Box>
    </Box>
  );
};

export default MessageBox;
