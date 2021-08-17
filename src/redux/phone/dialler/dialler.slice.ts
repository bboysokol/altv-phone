import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CallLog from 'interfaces/Dialler/CallLog';

export enum CallState {
  active = 'active',
  pending = 'pending',
  notReachable = 'notReachable',
  rejected = 'rejected',
  canceled = 'canceled',
  ended = 'ended',
  incomming = 'incomming',
  busy = 'busy',
  none = 'none',
}

export type DiallerState = {
  number: string;
  callState: CallState;
  callStart: Date | null;
  speakerphone: boolean;
  callLogs: CallLog[];
};

const initialState: DiallerState = {
  number: '',
  callState: CallState.none,
  callStart: null,
  speakerphone: false,
  callLogs: [],
};

export const diallerSlice = createSlice({
  name: 'phone/dialler',
  initialState,
  reducers: {
    pushDigit(state, action: PayloadAction<string>) {
      if (state.number.toString().length < 10) {
        state.number = `${state.number}${action.payload}`;
      }
    },
    popDigit(state) {
      state.number = `${state.number}`.slice(0, -1);
    },
    clearNumber(state) {
      state.number = '';
    },
    setCallState(state, action: PayloadAction<CallState>) {
      state.callState = action.payload;
    },
    setCallNumber(state, action: PayloadAction<string>) {
      state.number = action.payload;
    },
    setCallStart(state, action: PayloadAction<Date | null>) {
      state.callStart = action.payload;
    },
    setSpeakerphone(state, action: PayloadAction<boolean>) {
      state.speakerphone = action.payload;
    },
    setCallLogs(state, action: PayloadAction<CallLog[]>) {
      state.callLogs = action.payload;
    },
  },
});

export const {
  pushDigit,
  popDigit,
  clearNumber,
  setCallState,
  setCallLogs,
  setSpeakerphone,
} = diallerSlice.actions;
export default diallerSlice.reducer;
