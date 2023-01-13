import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import { WeatherState, WeatherData } from './types'
import axios from 'axios'

// Define the initial state for the weather
const initialState: WeatherState = {
  data: null,
  loading: false,
  err: '',
}

// Fetch the weather data from the API
export const fetchWeatherByCity = createAsyncThunk<WeatherData, string>(
    'weather/fetchWeatherByCity',
    async (city = "Medellin", thunkAPI) => {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const URL = 'http://api.openweathermap.org/data/2.5/weather'
        const response = await axios.get(`${URL}?q=${city}&appid=${API_KEY}`);
        const resData: WeatherData = response.data;
        return resData;
    }
)

// Create the reductors and actions for the weather
export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherByCity.pending, (state, action) => {
        state.loading = true;
    })
    builder.addCase(fetchWeatherByCity.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
    })
    builder.addCase(fetchWeatherByCity.rejected, (state, action) => {
        state.data = null;
        state.loading = false;
        state.err = 'City Not Found';
    })
  }
})

// Export the reductor and actions
export const weatherSelector = (state: RootState): WeatherState => state.weather;

export default weatherSlice.reducer;
