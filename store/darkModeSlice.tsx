// store/darkModeSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface DarkModeState {
    value: boolean;
}

const initialState: DarkModeState = {
    value: false,
};

// Create a slice for the darkMode state and the toggle action to toggle the darkMode value
export const darkModeSlice = createSlice({ 
    name: 'darkMode', // Slice name
    initialState, // Initial state
    reducers: { // Define the actions
        toggle: (state) => { // Define the toggle action
            state.value = !state.value; // Toggle the value
        },
    },
});

export const { toggle } = darkModeSlice.actions; // Export the toggle action

export default darkModeSlice.reducer; // Export the reducer