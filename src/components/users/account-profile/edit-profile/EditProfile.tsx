import { MenuItem, Select, TextField, TextFieldProps, styled } from '@mui/material';
import { Box, BoxProps, Container, ContainerProps, Typography, TypographyProps } from '@mui/material';
import { InitailScreening } from 'actions/auth';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, dispatch } from 'store';
import { UpdateAuthUser } from 'store/slices/auth';
import Button from 'ui-component/extended/Button';
import { goals } from 'utils/constants/goals';
import { professions } from 'utils/constants/professions';
import * as Yup from 'yup';

const StyledContainer = styled(Container)<ContainerProps>({});

const Wrapper = styled(Box)<BoxProps>({
  margin: '6rem 0'
});

const HeadingText = styled(Typography)<TypographyProps>({
  marginBottom: '0.5rem'
});

const LabelText = styled('label')((props) => ({
  fontSize: '20px',
  color: props.theme.palette.common.black,
  marginBottom: '0.5rem'
}));

const EditProfile = () => {
  const router = useRouter();
  const userData = useSelector((state: RootState) => state.auth.user);
  const YupValidate = Yup.object({
    fname: Yup.string().required('Required'),
    lname: Yup.string().required('Required'),
    phoneNumber: Yup.string(),
    profession: Yup.string().required('Required'),
    otherProfession: Yup.string(),
    goal: Yup.string().required('Required'),
    otherGoal: Yup.string()
  });

  const formik: any = useFormik({
    initialValues: { ...userData, otherProfession: '', otherGoal: '' },
    validationSchema: YupValidate,
    onSubmit: async (values) => {
      const payload: any = { ...values, initialScreening: true };
      if (payload.profession === 'Others') {
        payload.profession = payload.otherProfession;
      }
      if (payload.goal === 'Others') {
        payload.goal = payload.otherGoal;
      }
      delete payload.otherProfession;
      delete payload.otherGoal;
      const {
        data: { user }
      }: any = await InitailScreening(payload);
      dispatch(UpdateAuthUser(user));
      if (router.pathname.includes('initial-screening')) router.push('/dashboard');
    }
  });
  return (
    <StyledContainer maxWidth="md">
      <Wrapper>
        <form onSubmit={formik.handleSubmit}>
          <HeadingText variant="h2">Hi! Let’s set up your account</HeadingText>
          <HeadingText variant="h3" sx={{ color: 'gray', marginBottom: '3rem' }}>
            Tell us little bit more about yourself
          </HeadingText>
          <LabelText>What should we call you ?</LabelText>
          <Box display={'flex'} gap={'1rem'} marginTop={'0.5rem'} marginBottom={'2rem'}>
            <TextField
              value={formik.values.fname}
              onChange={formik.handleChange}
              name="fname"
              sx={{ width: '100%' }}
              placeholder="First Name *"
              helperText={formik.errors?.fname}
              error={Boolean(formik.errors?.fname)}
            />
            <TextField
              value={formik.values.lname}
              onChange={formik.handleChange}
              name="lname"
              sx={{ width: '100%' }}
              placeholder="Last Name *"
              helperText={formik.errors?.lname}
              error={Boolean(formik.errors?.lname)}
            />
          </Box>
          <LabelText>Phone Number</LabelText>
          <TextField
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            type="number"
            sx={{ width: '100%', marginTop: '0.5rem', marginBottom: '2rem' }}
            placeholder="Phone Number"
            helperText={formik.errors?.phoneNumber}
            error={Boolean(formik.errors?.phoneNumber)}
          />

          <LabelText id="profession-lable">What you call yourself ?</LabelText>
          <Select
            labelId="profession-lable"
            id="profession-select"
            // value={''}
            // label="Age"˝
            name={'profession'}
            value={formik.values.profession}
            onChange={formik.handleChange}
            placeholder="Profession"
            sx={{ display: 'block', width: '100%', marginTop: '0.5rem', marginBottom: '2rem', '& .MuiSelect-select ': { width: 'auto' } }}
          >
            {professions.map((item: string) => (
              <MenuItem value={item} key={item}>{item}</MenuItem>
            ))}
          </Select>
          {formik.values.profession === 'Others' && (
            <>
              <LabelText>Write your Custom Profession</LabelText>
              <TextField
                onChange={formik.handleChange}
                value={formik.values.otherProfession}
                name="otherProfession"
                type="text"
                sx={{ width: '100%', marginTop: '0.5rem', marginBottom: '2rem' }}
                placeholder=""
                helperText={formik.errors?.otherProfession}
                error={Boolean(formik.errors?.otherProfession)}
              />
            </>
          )}

          <LabelText id="goal-lable">What are the goals you’re looking to achieve ?</LabelText>
          <Select
            labelId="goal-lable"
            id="goal-select"
            // value={10}
            // label="Age"
            name="goal"
            value={formik.values.goal}
            onChange={formik.handleChange}
            placeholder="Goal"
            sx={{ display: 'block', width: '100%', marginTop: '0.5rem', marginBottom: '2rem', '& .MuiSelect-select ': { width: 'auto' } }}
          >
            {goals.map((item: string) => (
              <MenuItem value={item} key={item}>{item}</MenuItem>
            ))}
          </Select>
          {formik.values.goal === 'Others' && (
            <>
              <LabelText>Write your Custom Goal</LabelText>
              <TextField
                onChange={formik.handleChange}
                value={formik.values.otherGoal}
                name="otherGoal"
                type="text"
                sx={{ width: '100%', marginTop: '0.5rem', marginBottom: '2rem' }}
                placeholder=""
                helperText={formik.errors?.otherGoal}
                error={Boolean(formik.errors?.otherGoal)}
              />
            </>
          )}

          <Button type="submit">Continue</Button>
        </form>
      </Wrapper>
    </StyledContainer>
  );
};

export default EditProfile;
