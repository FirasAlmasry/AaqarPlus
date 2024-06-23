import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        selectedItem: [],
        selectedChildId: null
    },
    reducers: {
        setSelectedItem: (state, action) => {
            state.selectedItem = action.payload;
        },
        setSelectedChildId: (state, action) => {
            state.selectedChildId = action.payload;
        },
        resetSearchInputs: (state) => {
            state.selectedItem = [];
            state.selectedChildId = null;
        }
    }
});

export const { setSelectedItem, setSelectedChildId, resetSearchInputs } = searchSlice.actions;

export default searchSlice.reducer;
