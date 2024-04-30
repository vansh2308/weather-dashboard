import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    value: {
      latitude: "26.2389",
      longitude: '73.0243',
      locationName: "Jodhpur, India"
    }
  },
  reducers: {
    setLocation: (state, action) => {
      state.value = action.payload
    },
  }
})

export const {setLocation} = locationSlice.actions;
export default locationSlice.reducer

