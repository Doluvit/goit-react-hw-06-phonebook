import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice/contactsSlice';
import { filtersReducer } from './filtersSlice/filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filtersReducer,
  },
});
