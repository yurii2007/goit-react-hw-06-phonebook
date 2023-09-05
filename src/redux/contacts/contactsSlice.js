import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: '0', name: 'Learn HTML and CSS', number: '123456' },
    { id: '1', name: 'Get good at JavaScript', number: '123456' },
  ],
  reducers: {
    addContact: {
      prepare: newContact => ({ payload: { ...newContact, id: nanoid() } }),
      reducer: (state, { payload }) => { state.push(payload) },
    },
    deleteContact: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact, deleteContact } = contactsSlice.actions;
