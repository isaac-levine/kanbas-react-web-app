import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import coursesReducer from "../Dashboard/coursesReducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    coursesReducer,
  },
});

export default store;
