// third-party
import { createSlice } from '@reduxjs/toolkit';

// project import
import axios from '../../utils/axios';
import { dispatch } from '../index';
import { Message, Task } from 'types/agentTypes';
import { useSelector } from 'store';
import { isTask, TASK_STATUS_EXECUTING, TASK_STATUS_COMPLETED, TASK_STATUS_FINAL } from 'types/agentTypes';

// types
import { DefaultRootStateProps } from '../../types';

const isExistingTask = (message: Message): boolean =>
  isTask(message) &&
  (message.status === TASK_STATUS_EXECUTING || message.status === TASK_STATUS_COMPLETED || message.status === TASK_STATUS_FINAL);

const initialState: DefaultRootStateProps['agentMessage'] = {
  error: null,
  messages: [],
  tasks: []
};

const slice = createSlice({
  name: 'agent',
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },

    // ADD MESSAGE
    addMessage(state, action) {
      state.messages = action.payload;
    },

    // UPDATE TASK
    updateTaskStatus(state, action) {
      state.tasks = action.payload;
    },

    // DELETE TASK
    deleteTask(state, action) {
      state.tasks = action.payload;
    }
  }
});

export default slice.reducer;

export function addMessage(newMessage: Message) {
  return () => {
    const state = useSelector((state) => state.agentmessage);
    const newTask = { ...newMessage };
    newMessage = { ...newMessage };
    const tasks = isTask(newTask) && !isExistingTask(newTask) ? [...state.tasks, newTask] : [...state.tasks];

    dispatch(slice.actions.addMessage([...state.messages, newMessage]));
    dispatch(slice.actions.addMessage(tasks));
  };
}

export function updateTaskStatus(updatedTask: Task) {
  return () => {
    const { taskId, info, status: newStatus } = updatedTask;

    if (!isExistingTask(updatedTask) || taskId === undefined) {
      return;
    }

    const updatedTasks = useSelector((state) => state.agentmessage.tasks).map((task) => {
      if (task.taskId === taskId) {
        return {
          ...task,
          status: newStatus,
          info
        };
      }
      return task;
    });

    dispatch(slice.actions.updateTaskStatus(updatedTasks));
  };
}

export function deleteTask(taskId: string) {
  return () => {
    dispatch(slice.actions.deleteTask(useSelector((state) => state.agentmessage.tasks.filter((task) => task.taskId !== taskId))));
  };
}
