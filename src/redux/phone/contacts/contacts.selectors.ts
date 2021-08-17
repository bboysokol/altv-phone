import { createSelector } from '@reduxjs/toolkit';
import type { State } from '../../rootReducer';

const contactsState = (state: State) => state.phone.contacts;

export const selectContacts = createSelector(contactsState, (state) => state.contacts);
export const selectError = createSelector(contactsState, (state) => state.error);
export const selectContactByNumber = (number: number) =>
  createSelector(contactsState, (state) => state.contacts.find((i) => i.number === number));
export const selectInProgress = createSelector(contactsState, (state) => state.inProgress);
export const selectContactsToDelete = createSelector(
  contactsState,
  (state) => state.contactsToDelete,
);
export const selectDeleteMode = createSelector(contactsState, (state) => state.deleteMode);
