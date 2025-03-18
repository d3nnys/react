import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'changeFilter',
  initialState: {
    status: 'all',
  },
  reducers: {
    setStatusFilter(action, action) {
      action.status = action.payload;
    },
  },
});

export const { setStatusFilter } = slice.actions;

export default slice.reducer;
