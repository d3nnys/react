import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare(contacts) {
        return {
          payload: {
            id: crypto.randomUUID(),
            ...contacts,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;
