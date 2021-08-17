import { actions } from 'rdx/phone/contacts';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Screen } from '../../elements/Screen';
import { ContactsHeader } from './ContactsHeader';
import { ContactsList } from './ContactsList';
import { NewContact } from './NewContact';

export const Contacts = () => {
  const [isCreating, setIsCreating] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(actions.resetIdsToDelete());
      dispatch(actions.setDeleteMode(false));
    };
  }, []);

  return (
    <Screen bg="black">
      <ContactsHeader onCreate={() => setIsCreating(true)} />
      <ContactsList />
      <NewContact enabled={isCreating} onCancel={() => setIsCreating(false)} />
    </Screen>
  );
};
