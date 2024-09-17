import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface IAsideState {
  isOpen: boolean;
  number: number;
}

const initialState: IAsideState = {
  isOpen: false,
  number: 0,
};

export const asideSlice = createSlice({
  name: 'aside',
  initialState,
  reducers: {
    switchAsideMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    shownumber: (state) => {
      state.number = state.number
    }
  },
});

export const { switchAsideMenu, shownumber } = asideSlice.actions;
export default asideSlice.reducer;
