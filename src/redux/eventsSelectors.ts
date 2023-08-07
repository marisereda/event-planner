import { CATEGORY_ALL } from '../constants';
import { RootState } from './eventsStore';

export const selectEvents = (state: RootState) => state.events;

// export const selectEventById = (state: RootState) => state.events.find(event => event.id === event);
export const selectSearchKey = (state: RootState) => state.searchKey;
export const selectCategoryFilter = (state: RootState) => state.categoryFilter;

export const selectFilteredEvents = (state: RootState) => {
  const searchKey = state.searchKey.toLowerCase();
  return state.events.filter(event => {
    const isSearchMatched =
      event.title.toLowerCase().includes(searchKey) ||
      event.description?.toLowerCase().includes(searchKey) ||
      event.location?.toLowerCase().includes(searchKey);
    const isCategoryMatched =
      state.categoryFilter === CATEGORY_ALL ||
      event.category.includes(state.categoryFilter);
    return isSearchMatched && isCategoryMatched;
  });
};
