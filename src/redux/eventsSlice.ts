import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { CATEGORY_ALL, INITIAL_EVENTS } from '../constants';
import { Event } from '../interfaces';

export interface EventsState {
  events: Event[];
  categoryFilter: string;
  searchKey: string;
}

const initialState: EventsState = {
  events: INITIAL_EVENTS,
  categoryFilter: CATEGORY_ALL,
  searchKey: '',
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    createEvent: (state, action: PayloadAction<Event>) => {
      state.events.push(action.payload);
    },
    updateEvent: (state, action: PayloadAction<Event>) => {
      const eventIndex = state.events.findIndex(
        event => event.id === action.payload.id,
      );
      state.events[eventIndex] = action.payload;
    },
    deleteEvent: (state, action: PayloadAction<Event['id']>) => {
      state.events = state.events.filter(event => event.id !== action.payload);
    },
    setCategoryFilter: (state, action: PayloadAction<string>) => {
      state.categoryFilter = action.payload;
    },
    clearCategoryFilter: state => {
      state.categoryFilter = initialState.categoryFilter;
    },
    setSearchKey: (state, action: PayloadAction<string>) => {
      state.searchKey = action.payload;
    },
    clearSearchKey: state => {
      state.searchKey = initialState.searchKey;
    },
  },
});

export const {
  createEvent,
  updateEvent,
  deleteEvent,
  setCategoryFilter,
  clearCategoryFilter,
  setSearchKey,
  clearSearchKey,
} = eventsSlice.actions;

export default eventsSlice.reducer;
