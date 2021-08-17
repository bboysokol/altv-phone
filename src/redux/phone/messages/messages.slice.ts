import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Conversation from 'interfaces/Messages/Conversation';

export type MessagesState = {
  conversations: Conversation[];
  error?: string;
  deleteMode: boolean;
  conversationsToDelete: number[];
};

const initialState: MessagesState = {
  error: '',
  conversations: [],
  deleteMode: false,
  conversationsToDelete: [],
};

export const messagesSlice = createSlice({
  name: 'phone/messages',
  initialState,
  reducers: {
    setConversations(state, action: PayloadAction<Conversation[]>) {
      state.conversations = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setDeleteMode(state, action: PayloadAction<boolean>) {
      state.deleteMode = action.payload;
    },
    addIdToDelete(state, action: PayloadAction<number>) {
      state.conversationsToDelete.push(action.payload);
    },
    removeIdFromDelete(state, action: PayloadAction<number>) {
      state.conversationsToDelete = state.conversationsToDelete.filter(
        (itemId) => itemId !== action.payload,
      );
    },
    resetIdsToDelete(state) {
      state.conversationsToDelete = [];
    },
  },
});

export const {
  setConversations,
  setError,
  setDeleteMode,
  addIdToDelete,
  removeIdFromDelete,
  resetIdsToDelete,
} = messagesSlice.actions;
export default messagesSlice.reducer;
