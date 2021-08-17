import { createAction } from '@reduxjs/toolkit';

export const makeCall = createAction<number>('phone/dialler/makeCall');
export const acceptCall = createAction('phone/dialler/acceptCall');
export const endCall = createAction('phone/dialler/endCall');
export const speakerStatusChange = createAction<boolean>('phone/dialler/speakerStatusChange');
export const getCallLogs = createAction('phone/dialler/updateCallLogs');

export default {
  makeCall,
  acceptCall,
  endCall,
  speakerStatusChange,
};
