import { configureStore, type ThunkAction, type Action } from '@reduxjs/toolkit';
import aside from '~/reducers/asideSlice';

// INSERT REDUCERS HERE
export const store = configureStore({
  reducer: {
    aside,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
