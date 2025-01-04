import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    // Add reducers here
    user: useReducer
  },
})

export default appStore;