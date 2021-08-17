import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import PhoneInfo from 'interfaces/Settings/PhoneInfo';
import Wallpaper from 'interfaces/Settings/Wallpaper';

export type SettingsState = {
  data?: PhoneInfo;
  error?: string;
  wallpapers: Wallpaper[];
  wallpaper: Wallpaper;
};

const wallpapersList: Wallpaper[] = [
  {
    id: 1,
    url: 'https://cdn.v-rp.pl/wallpaper/wallpaper1.jpg',
  },
  {
    id: 2,
    url: 'https://cdn.v-rp.pl/wallpaper/wallpaper2.jpg',
  },
  {
    id: 3,
    url: 'https://cdn.v-rp.pl/wallpaper/wallpaper3.jpg',
  },
  {
    id: 4,
    url: 'https://cdn.v-rp.pl/wallpaper/wallpaper4.jpg',
  },
  {
    id: 5,
    url: 'https://cdn.v-rp.pl/wallpaper/wallpaper5.jpg',
  },
  {
    id: 6,
    url: 'https://cdn.v-rp.pl/wallpaper/wallpaper6.jpg',
  },
];

const initialState: SettingsState = {
  data: undefined,
  error: '',
  wallpapers: wallpapersList,
  wallpaper: { id: -1, url: '' },
};

export const settingsSlice = createSlice({
  name: 'phone/settings',
  initialState,
  reducers: {
    setPhoneInfo(state, action: PayloadAction<PhoneInfo>) {
      state.data = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setCurrentWallpaper(state, action: PayloadAction<Wallpaper>) {
      state.wallpaper = action.payload;
    },
  },
});

export const { setPhoneInfo, setError, setCurrentWallpaper } = settingsSlice.actions;
export default settingsSlice.reducer;
