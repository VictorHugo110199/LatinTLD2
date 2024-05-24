import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface IAsideState {
  isOpen: boolean;
}

const initialState: IAsideState = {
  isOpen: false,
};

export const asideSlice = createSlice({
  name: 'aside',
  initialState,
  reducers: {
    switchAsideMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { switchAsideMenu } = asideSlice.actions;
export default asideSlice.reducer;
