import { createAction } from '@reduxjs/toolkit';
import { TransferPayload } from 'types/bank';

export const getBankAccount = createAction<number>('phone/mazeBank/getBankAccount');
export const sendBankTransfer = createAction<TransferPayload>('phone/mazeBank/sendBankTransfer');

export default {
  getBankAccount,
  sendBankTransfer,
};
