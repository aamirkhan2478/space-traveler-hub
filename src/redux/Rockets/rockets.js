import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Variables
const API = 'https://api.spacexdata.com/v3/rockets';

// Action Types
const SHOW_ROCKETS = 'SHOW_ROCKETS';

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

