import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "../weatherFeature/weatherSlice";
import switchSlice from "../weatherFeature/switchSlice";

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    switch: switchSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
