import { createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import { dispatch } from '../index';

// types
import { DefaultRootStateProps } from '../../types';
import { ActiveTool } from 'hooks/useTools';

const initialState: DefaultRootStateProps['agentTool'] = {
  error: null,
  tools: []
};

const slice = createSlice({
  name: 'agentTools',
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },

    //SET TOOLS
    setTools(state, action) {
      state.tools = action.payload;
    }
  }
});

export default slice.reducer;

export function setTools(tools: ActiveTool[]) {
  return async () => {
    try {
      const response = await axios.post('/api/agent/message/deletetask', tools);
      dispatch(slice.actions.setTools(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
