/**
 * Contacts state management
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../../types';

interface ContactsState {
  items: Contact[];
  loading: boolean;
  error: string | null;
}

const initialState: ContactsState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts: (state, action: PayloadAction<Contact[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    addContact: (state, action: PayloadAction<Contact>) => {
      state.items.unshift(action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setContacts, addContact, setLoading, setError } = contactsSlice.actions;
export default contactsSlice.reducer;
