import { createAction } from '@reduxjs/toolkit';
import SendSmsData from 'interfaces/Messages/SendSmsData';

export const fetchConversations = createAction('phone/messages/fetchConversations');
export const getSmsById = createAction<number>('phone/messages/getSmsById');
export const getSmsByNumber = createAction<number>('phone/messages/getSmsByNumber');
export const sendMessage = createAction<SendSmsData>('phone/messages/sendMessage');
export const deleteConversations = createAction<number[]>('messages/deleteConversations');

export default {
  fetchConversations,
  sendMessage,
};
