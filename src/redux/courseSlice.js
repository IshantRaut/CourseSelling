import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  selectedCategory: "All",
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setCourses, setCategory } = courseSlice.actions;
export default courseSlice.reducer;
