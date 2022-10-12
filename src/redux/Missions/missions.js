import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Variables
const API = 'https://api.spacexdata.com/v3/missions';

// Action Types
const SHOW_MISSIONS = 'SHOW_MISSIONS';
const JOINED_MISSIONS = 'JOINED_MISSIONS';
const LEAVED_MISSIONS = 'LEAVED_MISSIONS';

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
    case JOINED_MISSIONS:
      return {
        ...state,
        isLoading: false,
        missions: state.missions.map((mission) => (mission.mission_id !== payload ? mission : { ...mission, joined: true })),
      };

    case LEAVED_MISSIONS:
      return {
        ...state,
        isLoading: false,
        missions: state.missions.map((mission) => (mission.mission_id !== payload ? mission : { ...mission, joined: false })),
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

export const joinedMissions = (id) => (dispatch) => {
  dispatch({
    type: JOINED_MISSIONS,
    payload: id,
  });
};

export const leavedMissions = (id) => (dispatch) => {
  dispatch({
    type: LEAVED_MISSIONS,
    payload: id,
  });
};
