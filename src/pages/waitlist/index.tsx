import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, OutlinedInput, Select, Stack, Typography, useMediaQuery } from '@mui/material';

// project imports

import { Formik } from 'formik';
import * as Yup from 'yup';
import useScriptRef from 'hooks/useScriptRef';


// actions imports
import { JoinWaitList } from 'actions/auth';
import { useRouter } from 'next/router';
// =============================|| PRICING - PRICE 2 ||============================= //
const initialValues = {
    first_name: '',
    last_name: '',
    work_email: '',
    department: "",
    typeface: '',
}
const WaitList = () => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    const router = useRouter();
    const apiJoinWaitList = async (values: Object) => {
        await JoinWaitList(values);
        return true
    }

    return (
        <Grid container direction="column" justifyContent="flex-end">
            <Grid item xs={12}>
                <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                    <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                        <Grid container spacing={2} alignItems="center" justifyContent="center">
                            <Grid item xs={12}>
                                <Grid container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="flex-start">
                                    <Grid item>
                                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                                            <Typography textAlign={matchDownSM ? 'center' : 'inherit'} gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                                                Join our waitlist
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={Yup.object().shape({
                                        first_name: Yup.string().max(255).required('Please complete this required field.'),
                                        last_name: Yup.string().max(255).required('Please complete this required field.'),
                                        work_email: Yup.string().email('Must be a valid email').max(255).required('Please complete this required field.'),
                                        department: Yup.string().max(255).required('Please select an option from the dropdown menu.'),
                                    })}
                                    onSubmit={async (values, { setErrors, setStatus, setSubmitting, setValues }) => {
                                        try {
                                            const flag = await apiJoinWaitList(values);
                                            if (flag) {
                                                router.push('login');
                                            }
                                        } catch (err: any) {
                                            console.error(err);
                                            if (scriptedRef.current) {
                                                setStatus({ success: false });
                                            }
                                        }
                                    }}
                                >
                                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                                        <form noValidate onSubmit={handleSubmit}>
                                            <Grid container spacing={1}>
                                                <Grid item xs={6}>
                                                    <FormControl fullWidth error={Boolean(touched.first_name && errors.first_name)} sx={{ ...theme.typography.customInput }}>
                                                        <InputLabel htmlFor="outlined-adornment-email-login">First Name*</InputLabel>
                                                        <OutlinedInput
                                                            id="outlined-adornment-email-login"
                                                            type="text"
                                                            value={values.first_name}
                                                            name="first_name"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            label="First Name*"
                                                            inputProps={{}}
                                                        />
                                                        {touched.first_name && errors.first_name && (
                                                            <FormHelperText error id="standard-weight-helper-text-first_name">
                                                                {errors.first_name}
                                                            </FormHelperText>
                                                        )}
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <FormControl fullWidth error={Boolean(touched.last_name && errors.last_name)} sx={{ ...theme.typography.customInput }}>
                                                        <InputLabel htmlFor="outlined-adornment-email-login">Last Name*</InputLabel>
                                                        <OutlinedInput
                                                            id="outlined-adornment-email-login"
                                                            type="text"
                                                            value={values.last_name}
                                                            name="last_name"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            label="Last Name*"
                                                            inputProps={{}}
                                                        />
                                                        {touched.last_name && errors.last_name && (
                                                            <FormHelperText error id="standard-weight-helper-text-last_name">
                                                                {errors.last_name}
                                                            </FormHelperText>
                                                        )}
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <FormControl fullWidth error={Boolean(touched.work_email && errors.work_email)} sx={{ ...theme.typography.customInput }}>
                                                        <InputLabel htmlFor="outlined-adornment-email-login">Work Email*</InputLabel>
                                                        <OutlinedInput
                                                            id="outlined-adornment-email-login"
                                                            type="text"
                                                            value={values.work_email}
                                                            name="work_email"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            label="First Name*"
                                                            inputProps={{}}
                                                        />
                                                        {touched.work_email && errors.work_email && (
                                                            <FormHelperText error id="standard-weight-helper-text-work_email">
                                                                {errors.work_email}
                                                            </FormHelperText>
                                                        )}
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <InputLabel id="demo-simple-select-autowidth-label">Department*</InputLabel>
                                                    <FormControl fullWidth error={Boolean(touched.department && errors.department)} sx={{ ...theme.typography.customInput }}>
                                                        <Select
                                                            labelId="demo-simple-select-autowidth-label"
                                                            id="demo-simple-select-autowidth"
                                                            value={values.department}
                                                            onChange={handleChange}
                                                            name="department"
                                                            onBlur={handleBlur}
                                                        >
                                                            <MenuItem value={""} disabled>Please Select</MenuItem>
                                                            <MenuItem value={"founder"}>Founder/C-Suite</MenuItem>
                                                            <MenuItem value={"marketing_content"}>Marketing Content</MenuItem>
                                                            <MenuItem value={"marketing_demand"}>Marketing Demand Gen</MenuItem>
                                                            <MenuItem value={"marketing_creative"}>Marketing Creative</MenuItem>
                                                            <MenuItem value={"sales"}>Sales</MenuItem>
                                                            <MenuItem value={"hr"}>HR</MenuItem>
                                                            <MenuItem value={"other"}>Other</MenuItem>
                                                        </Select>
                                                        {touched.department && errors.department && (
                                                            <FormHelperText error id="standard-weight-helper-text-department">
                                                                {errors.department}
                                                            </FormHelperText>
                                                        )}
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <InputLabel htmlFor="outlined-adornment-email-login">How are you looking to use Typeface?</InputLabel>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput
                                                            type="text"
                                                            value={values.typeface}
                                                            name="typeface"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            multiline
                                                            rows={5}
                                                        />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Button type='submit' variant='contained'>Join Waitlist</Button>
                                                </Grid>
                                            </Grid>
                                        </form>
                                    )}
                                </Formik>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
WaitList.Layout = 'infraLayout';
export default WaitList;
