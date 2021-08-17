import { createAction } from '@reduxjs/toolkit';
import Wallpaper from 'interfaces/Settings/Wallpaper';

export const getPhoneInfo = createAction('phone/settings/getPhoneInfo');
export const setWallpaper = createAction<Wallpaper>('phone/settings/setWallpaper');
export const getWallpaper = createAction('phone/settings/getWallpaper');

export default {
  getPhoneInfo,
  setWallpaper,
};
