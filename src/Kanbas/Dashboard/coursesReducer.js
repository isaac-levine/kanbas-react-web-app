import { createSlice } from "@reduxjs/toolkit";
import db from "../Database";

const initialState = {
  courses: db.courses,
  course: { name: "New Course", number: "123" },
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, action) => {
      state.courses = [
        { ...action.payload, _id: new Date().getTime().toString() }, // id is based off time
        ...state.courses,
      ];
    },
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(
        (course) => course._id !== action.payload // delete the course whose id matches action payload
      );
    },
    updateCourse: (state, action) => {
      state.courses = state.courses.map((course) => {
        if (course._id === action.payload._id) {
          return action.payload;
        } else {
          return course;
        }
      });
    },
    setCourse: (state, action) => {
      state.course = action.payload; // set the course to this payload
    },
  },
});

export const { addCourse, deleteCourse, updateCourse, setCourse } =
  coursesSlice.actions;
export default coursesSlice.reducer;
