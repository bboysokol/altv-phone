import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Contact from 'interfaces/Contacts/Contact';

export type ContactsState = {
  inProgress: boolean;
  contacts: Contact[];
  contactsToDelete: number[];
  error?: string;
  deleteMode: boolean;
};

const initialState: ContactsState = {
  inProgress: false,
  error: '',
  contactsToDelete: [],
  contacts: [],
  deleteMode: false,
};

export const contactsSlice = createSlice({
  name: 'phone/contacts',
  initialState,
  reducers: {
    setContacts(state, action: PayloadAction<Contact[]>) {
      state.contacts = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setProgress(state, action: PayloadAction<boolean>) {
      state.inProgress = action.payload;
    },
    addIdToDelete(state, action: PayloadAction<number>) {
      state.contactsToDelete.push(action.payload);
    },
    removeIdFromDelete(state, action: PayloadAction<number>) {
      state.contactsToDelete = state.contactsToDelete.filter((itemId) => itemId !== action.payload);
    },
    resetIdsToDelete(state) {
      state.contactsToDelete = [];
    },
    setDeleteMode(state, action: PayloadAction<boolean>) {
      state.deleteMode = action.payload;
    },
  },
});

export const {
  setContacts,
  setError,
  addIdToDelete,
  removeIdFromDelete,
  resetIdsToDelete,
  setDeleteMode,
} = contactsSlice.actions;
export default contactsSlice.reducer;
