import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from '../redux/eventsSlice';

export const store = configureStore({
  reducer: eventsReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
