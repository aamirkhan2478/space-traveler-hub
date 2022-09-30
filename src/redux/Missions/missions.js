import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Variables
const API = 'https://api.spacexdata.com/v3/missions';

// Action Types
const SHOW_MISSIONS = 'SHOW_MISSIONS';

// Reducers
const initialState = {
  missions: [],
  isLoading: false,
};
const missionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_MISSIONS:
      return {
        ...state,
        isLoading: false,
        missions: payload,
      };

    default:
      return state;
  }
};

export default missionReducer;

// Actions
export const showMissions = createAsyncThunk(
  SHOW_MISSIONS,
  async (args, { dispatch }) => {
    try {
      const { data } = await axios.get(API);
      dispatch({
        type: SHOW_MISSIONS,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
    return args;
  },
);
