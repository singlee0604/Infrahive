import Image from 'next/image';
import React from 'react';
import Link from 'Link';
import { useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

// material-ui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert';

// alert
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

import {
  Button,
  Box,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
  Typography
} from '@mui/material';

// third-party
import NumberFormat from 'react-number-format';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// assets
const mailImg = '/assets/images/landing/img-contact-mail.svg';

// select options
const currencies = [
  {
    value: '<$1000',
    label: 'Below $1000'
  },
  {
    value: '$1000-$5000',
    label: '$1000 - $5000'
  },
  {
    value: '>$5000',
    label: 'Above $5000'
  }
];

const sizes = [
  {
    value: 'Generative-AI',
    label: 'Generative AI'
  },
  // {
  //   value: 'Government-AI',
  //   label: 'Government AI'
  // },
  {
    value: 'Enterprise-AI',
    label: 'Enterprise AI'
  },
  {
    value: 'Education-AI',
    label: 'Education AI'
  },
  {
    value: 'others',
    label: 'Others'
  }
];

interface MessageSentProps {
  message: string;
  type: AlertColor;
  open: boolean;
  loading: boolean;
}

// ===========================|| CONTACT CARD - FORMS ||=========================== //

const ContactCard = () => {
  const theme = useTheme();

  const [messageSent, setMessageSent] = useState<MessageSentProps>({
    message: '',
    type: 'success',
    open: false,
    loading: false
  });

  const handleClick = () => {
    setMessageSent({ ...messageSent, open: true });
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setMessageSent({ ...messageSent, open: false });
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    company_name: '',
    budget: '',
    project: 'Generative AI'
  });
  const submitHandler = async (e: any) => {
    e.preventDefault();
    setMessageSent({ ...messageSent, loading: true });
    //send mail
    // console.log("form input :  ", form)
    try {
      const msg = `Name : ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany Name: ${formData.company_name}\nBudget: ${formData.budget}\nProject: ${formData.project}\nMessage: ${formData.message}`;
      // console.log(msg);
      const resp = await axios.post('https://api.aivinya.com/admin/api/customemail', {
        email: 'omeshankar@gmail.com',
        body: msg
      });
      console.log(resp);
      // set alert
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        company_name: '',
        budget: '',
        project: 'Generative AI'
      });
      setMessageSent({ ...messageSent, message: 'Message sent', open: true, loading: false, type: 'success' });
      setTimeout(() => {
        setMessageSent({ ...messageSent, message: '', loading: false, open: false, type: 'success' });
      }, 5000);
    } catch (err) {
      console.log('Error : ', err);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        company_name: '',
        budget: '',
        project: 'Generative AI'
      });
      setMessageSent({
        ...messageSent,
        message: 'Oops. Please try again later',
        loading: false,
        open: false,
        type: 'error'
      });

      setTimeout(() => {
        setMessageSent({ ...messageSent, message: '', loading: false, type: 'success' });
      }, 5000);
    }
  };
  const InputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    // console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Grid container mt={3} justifyContent="center" spacing={gridSpacing}>
        <Grid item xs={10}>
          <Card sx={{ mb: 6.25 }} elevation={4}>
            <CardContent sx={{ p: 4 }}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Name</InputLabel>
                    <OutlinedInput required={true} type="text" name="name" label="Name" value={formData.name} onChange={InputHandler} />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Company Name</InputLabel>
                    <OutlinedInput
                      type="text"
                      required={true}
                      name="company_name"
                      value={formData.company_name}
                      label="Company Name"
                      onChange={InputHandler}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Email Address</InputLabel>
                    <OutlinedInput
                      required={true}
                      type="text"
                      name="email"
                      value={formData.email}
                      label="Email Address"
                      onChange={InputHandler}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <NumberFormat
                      name="phone"
                      mask="_"
                      placeholder="+91-12345667890"
                      fullWidth
                      value={formData.phone}
                      customInput={TextField}
                      label="Phone Number"
                      onChange={InputHandler}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth sx={{ textAlign: 'left' }}>
                    <TextField
                      id="outlined-select-Size"
                      name="project"
                      select
                      required={true}
                      fullWidth
                      label="AI Development"
                      value={formData.project}
                      onChange={InputHandler}
                    >
                      {sizes.map((option, index) => (
                        <MenuItem key={index} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth sx={{ textAlign: 'left' }}>
                    <TextField
                      id="outlined-select-budget"
                      select
                      name="budget"
                      required={true}
                      fullWidth
                      label="Project Budget"
                      value={formData.budget}
                      onChange={InputHandler}
                    >
                      {currencies.map((option, index) => (
                        <MenuItem key={index} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextField
                      id="outlined-multiline-static1"
                      placeholder="Please describe your project in detail (data, volume, timeline, budget, etc)"
                      multiline
                      fullWidth
                      required={true}
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={InputHandler}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={gridSpacing}>
                    <Grid item>
                      <AnimateButton>
                        <Button
                          onClick={submitHandler}
                          disabled={formData.message === '' ? true : false}
                          variant="contained"
                          color="secondary"
                        >
                          {messageSent.loading ? <CircularProgress color="inherit" /> : 'Submit'}
                          <Snackbar
                            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                            open={messageSent.open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                          >
                            <Alert onClose={handleClose} severity={messageSent.type} sx={{ width: '100%' }}>
                              {messageSent.message}
                            </Alert>
                          </Snackbar>
                        </Button>
                      </AnimateButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactCard;
