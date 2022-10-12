import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketReducer from './Rockets/rockets';
import missionReducer from './Missions/missions';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    mission: missionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
