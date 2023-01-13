import { createSlice } from '@reduxjs/toolkit'

// Define a type for the button state
interface switchState {
    switchSide: boolean;
}

// Define the initial state for the button
const initialState: switchState = {
    switchSide: false,
}

// Create the reductors and actions for the button to switch units
const switchSlice = createSlice({
    name: 'swicth',
    initialState,
    reducers: {
        switchToogle(state) {
            state.switchSide = !state.switchSide;
        },
    },
});

export const swicthActions = switchSlice.actions;
export default switchSlice.reducer;
