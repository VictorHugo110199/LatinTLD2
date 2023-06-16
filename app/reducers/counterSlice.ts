import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface ICounterState {
  total: number;
}

const initialState: ICounterState = {
  total: 0,
};

export const counterSlice = createSlice({
  name: 'Counter',
  initialState,
  reducers: {
    increaseByX: (state, action: PayloadAction<number>) => {
      state.total = state.total + action.payload;
    },
    increaseByOne: (state) => {
      state.total += 1;
    },
    decreaseByOne: (state) => {
      state.total -= 1;
    },
  },
});

export const { increaseByX, increaseByOne, decreaseByOne } = counterSlice.actions;
export default counterSlice.reducer;
