import { createSelector } from '@reduxjs/toolkit';
import type { State } from '../../rootReducer';

const mazeBankState = (state: State) => state.phone.mazeBank;

export const selectInProgress = createSelector(mazeBankState, (state) => state.inProgres);

export const selectBankData = createSelector(mazeBankState, (state) => state.data);

export const selectError = createSelector(mazeBankState, (state) => state.error);

export const selectTransferStatus = createSelector(mazeBankState, (state) => state.transferStatus);
