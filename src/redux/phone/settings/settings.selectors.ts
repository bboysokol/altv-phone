import { createSelector } from '@reduxjs/toolkit';
import type { State } from '../../rootReducer';

const settingsState = (state: State) => state.phone.settings;

export const selectPhoneInfo = createSelector(settingsState, (state) => state.data);

export const selectError = createSelector(settingsState, (state) => state.error);

export const selectWallpapers = createSelector(settingsState, (state) => state.wallpapers);

export const selectWallpaper = createSelector(settingsState, (state) => {
  console.log(import.meta.env.NODE_ENV === 'development');
  if (import.meta.env.NODE_ENV === 'development')
    return { url: 'https://cdn.v-rp.pl/wallpaper/wallpaper5.jpg' };
  return state.wallpapers.find((item) => item.url === state.wallpaper.url);
});
