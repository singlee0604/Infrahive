// third-party
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../index';
import { SavePersonalInterestProps } from 'types/savePersonalInterestProps ';

// project imports
import { DefaultRootStateProps } from 'types';
// import { SavePersonalInterestProps } from 'types/savePersonalInterestProps ';

// ----------------------------------------------------------------------

interface PersonalInterestState {
  interests: string[];
  loading: boolean;
  error: string | null;
}

const initialState: PersonalInterestState = {
  interests: [],
  loading: false,
  error: null
};

const personalInterestSlice = createSlice({
  name: 'personalInterest',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setData(state, action: PayloadAction<string[]>) {
      state.interests = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    }
  }
});
export const { setLoading, setData, setError } = personalInterestSlice.actions;

export const savePersonalInterest = (data: string[]) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(setData(data));

    dispatch(setLoading(false));
  } catch (error: any) {
    dispatch(setError(error));
    dispatch(setLoading(false));
  }
};

export const selectPersonalInterest = (state: RootState) => state.personalInterest.interests;
export const selectLoading = (state: RootState) => state.personalInterest.loading;
export const selectError = (state: RootState) => state.personalInterest.error;

export default personalInterestSlice.reducer;
