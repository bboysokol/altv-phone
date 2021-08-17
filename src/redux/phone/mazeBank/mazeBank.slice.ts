import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import BankUserData from '../../../interfaces/Bank/BankUserData';

export type MazeBankState = {
  data?: BankUserData;
  error?: string;
  inProgres: boolean;
  transferStatus?: boolean;
};

const initialState: MazeBankState = {
  data: undefined,
  error: '',
  inProgres: false,
  transferStatus: undefined,
};

export const mazeBankSlice = createSlice({
  name: 'phone/mazeBank',
  initialState,
  reducers: {
    setBankData(state, action: PayloadAction<BankUserData>) {
      state.data = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setProgress(state, action: PayloadAction<boolean>) {
      state.inProgres = action.payload;
    },
    setTransferStatus(state, action: PayloadAction<boolean | undefined>) {
      state.transferStatus = action.payload;
    },
  },
});

export const { setBankData, setError, setTransferStatus, setProgress } = mazeBankSlice.actions;
export default mazeBankSlice.reducer;
