import { createAction } from '@reduxjs/toolkit';
import Contact from 'interfaces/Contacts/Contact';

export const addContact = createAction<Contact>('phone/contacts/addContact');
export const getContacts = createAction('phone/contacts/getContacts');
export const sendVC = createAction('phone/contacts/sendVCard');
export const removeContacts = createAction<number[]>('phone/contacts/removeContacts');

export default {
  addContact,
  getContacts,
  removeContacts,
  sendVC,
};
