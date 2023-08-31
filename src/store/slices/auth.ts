import { createSlice } from '@reduxjs/toolkit';
import Router from 'next/router';

const initialUser = {
  _id: '',
  email: '',
  username: '',
  fname: '',
  lname: '',
  phoneNumber: '',
  initialScreening: '',
  profession: '',
  goal: '',
  permission: ''
};

const initialState = {
  isInitialized: true,
  isLoggedIn: false,
  accessToken: '',
  user: initialUser
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    rLogin(state, action) {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
      state.isLoggedIn = true;
      state.isInitialized = true;
      if (user.initialScreening) {
        Router.push('/dashboard');
      } else {
        Router.push('/initial-screening');
      }
    },
    Logout(state, action) {
      state.accessToken = '';
      state.user = initialUser;
      state.isLoggedIn = false;
      state.isInitialized = true;
      state = { ...state };
      Router.push('/');
    },
    UpdateAuthUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    }
  }
});

export default auth.reducer;

export const { rLogin, Logout, UpdateAuthUser } = auth.actions;
