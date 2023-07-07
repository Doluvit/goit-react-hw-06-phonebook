import { createSlice } from '@reduxjs/toolkit';

const filtersIinitialState = '';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersIinitialState,
  reducers: {
    setFilter: {
      reducer(state, action) {
        return action.payload;
      },
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
