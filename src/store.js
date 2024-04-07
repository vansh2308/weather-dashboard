
import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./features/locationSlice";
import weatherReducer from "./features/weatherSlice"

export default configureStore({
  reducer: {
    location: locationReducer,
    weather: weatherReducer
  }
})