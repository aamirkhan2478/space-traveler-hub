import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Variables
const API = 'https://api.spacexdata.com/v3/rockets';

// Action Types
const SHOW_ROCKETS = 'SHOW_ROCKETS';
const RESERVED_ROCKETS = 'RESERVED_ROCKETS';
const CANCELED_ROCKETS = 'CANCELED_ROCKETS';

// Reducers
const initialState = {
  rockets: [],
  isLoading: false,
};
const rocketReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_ROCKETS:
      return {
        ...state,
        isLoading: false,
        rockets: payload,
      };
    case RESERVED_ROCKETS:
      return {
        ...state,
        isLoading: false,
        rockets: state.rockets.map((rocket) => (rocket.id !== payload ? rocket : { ...rocket, reserved: true })),
      };

    case CANCELED_ROCKETS:
      return {
        ...state,
        isLoading: false,
        rockets: state.rockets.map((rocket) => (rocket.id !== payload ? rocket : { ...rocket, reserved: false })),
      };
    default:
      return state;
  }
};

export default rocketReducer;

// Actions
export const showRockets = createAsyncThunk(
  SHOW_ROCKETS,
  async (args, { dispatch }) => {
    try {
      const { data } = await axios.get(API);
      const rockets = data.map((rocket) => ({
        id: rocket.id,
        flickr_images: rocket.flickr_images,
        rocket_name: rocket.rocket_name,
        description: rocket.description,
        reserved: false,
      }));
      dispatch({
        type: SHOW_ROCKETS,
        payload: rockets,
      });
    } catch (error) {
      console.error(error.message);
    }
    return args;
  },
);

export const reservedRocket = (id) => (dispatch) => {
  dispatch({
    type: RESERVED_ROCKETS,
    payload: id,
  });
};

export const canceledRocket = (id) => (dispatch) => {
  dispatch({
    type: CANCELED_ROCKETS,
    payload: id,
  });
};
