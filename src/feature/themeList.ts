import { createSlice } from '@reduxjs/toolkit';
import { Theme } from '../models';
import { themes } from '../styles/themes';

export interface TodoState {
  theme: Theme;
}

const initialState: TodoState = {
  theme: themes["light"],
};

export const themeSlice = createSlice({
  name: 'themeList',
  initialState,
  reducers: {
    toggleThemeAction: (state) => {
      state.theme = state.theme.name === 'light' ? themes['dark'] : themes['light'];
    },
  },
});

// Action creators are generated for each case reducer function
export const {toggleThemeAction} = themeSlice.actions;

export default themeSlice.reducer;