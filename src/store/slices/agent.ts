// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from '../../utils/axios';
import { dispatch } from '../index';
import { AGENT_PAUSE, AUTOMATIC_MODE, AgentPlaybackControl } from 'types/agentTypes';
import { useSelector } from 'store';

// types
import { DefaultRootStateProps } from '../../types';
import AutonomousAgent from 'services/agent/autonomous-agent';

const initialState: DefaultRootStateProps['agent'] = {
  error: null,
  agent: null,
  isAgentStopped: true,
  isAgentPaused: false,
  agentMode: AUTOMATIC_MODE
};

const slice = createSlice({
  name: 'agent',
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },

    // UPDATE AGENT MODE
    updateAgentMode(state, action) {
      state.agentMode = action.payload;
    },

    // UPDATE IS AGENT PAUSED
    updateIsAgentPaused(state, action) {
      state.isAgentPaused = action.payload === AGENT_PAUSE;
    },

    // UPDATE IS AGENT STOPPED
    updateIsAgentStopped(state, action) {
      state.isAgentStopped = action.payload;
    },

    //SET AGENT
    setAgent(state, action) {
      state.agent = action.payload;
    }
  }
});

export default slice.reducer;

export function updateAgentMode(agentMode: any) {
  return async () => {
    dispatch(slice.actions.updateAgentMode(agentMode));
  };
}

export function updateIsAgentPaused(isAgentPaused: AgentPlaybackControl) {
  return () => {
    dispatch(slice.actions.updateIsAgentPaused(isAgentPaused === AGENT_PAUSE));
  };
}

export function updateIsAgentStopped() {
  return () => {
    dispatch(slice.actions.updateIsAgentStopped(!useSelector((state) => state.agent.agent)?.isRunning));
  };
}

export function setAgent(newAgent: AutonomousAgent | null) {
  return () => {
    dispatch(slice.actions.setAgent(newAgent));
  };
}
