import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rocketReducer from "./Rockets/rockets";

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
