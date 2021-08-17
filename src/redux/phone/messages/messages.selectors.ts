import { createSelector } from '@reduxjs/toolkit';
import type { State } from '../../rootReducer';

const messagesState = (state: State) => state.phone.messages;

export const selectConversations = createSelector(messagesState, (state) => state.conversations);

export const selectError = createSelector(messagesState, (state) => state.error);

export const selectConversationById = (id: number) =>
  createSelector(messagesState, (state) => state.conversations.find((item) => item.id === id));

export const selectConversationByNumber = (from: string) =>
  createSelector(messagesState, (state) =>
    state.conversations.find((item) => `${item?.from || ''}` === `${from || ''}`),
  );

export const selectConversationsToDelete = createSelector(
  messagesState,
  (state) => state.conversationsToDelete,
);

export const selectDeleteMode = createSelector(messagesState, (state) => state.deleteMode);
