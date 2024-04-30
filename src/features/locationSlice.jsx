import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    value: {
      latitude: null,
      longitude: null,
      locationName: null
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

