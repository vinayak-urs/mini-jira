import { configureStore } from "@reduxjs/toolkit";
import taskListSlice from "./taskListSlice";


export const store = configureStore({
  reducer: {
    tasks: taskListSlice,
  },
});