import React from 'react';
import { QueryRoute } from 'routes/QueryRouter/QueryRoute';
import { ConversationList } from './components/ConversationsList/ConversationsList';
import { ConversationView } from './components/ConversationView/ConverstionView';

export const Messages = () => {
  return (
    <>
      <QueryRoute path="phone~~messages" component={() => <ConversationList />} exact />
      <QueryRoute path="phone~~messages~message" component={() => <ConversationView />} exact />
    </>
  );
};
