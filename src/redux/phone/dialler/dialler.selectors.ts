import { createSelector } from '@reduxjs/toolkit';
import type { State } from '../../rootReducer';

const diallerState = (state: State) => state.phone.dialler;

export const selectNumber = createSelector(diallerState, (state) => state.number);

export const selectStatus = createSelector(diallerState, (state) => state.callState);

export const selectStart = createSelector(diallerState, (state) => state.callStart);

export const selectSpeakerphone = createSelector(diallerState, (state) => state.speakerphone);
export const selectCallLog = createSelector(diallerState, (state) => state.callLogs);
