// slices/themeSlice.ts
import {createSlice} from '@reduxjs/toolkit';
import {Appearance} from 'react-native';

type ThemeMode = 'light' | 'dark';

interface ThemeState {
  theme: ThemeMode;
}

const initialState: ThemeState = {
  theme: Appearance.getColorScheme() ?? 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const {toggleTheme, setTheme} = themeSlice.actions;
export default themeSlice.reducer;
