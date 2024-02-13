import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state,{payload}) => {
      return {
        ...state,
        items: [...state.items, payload],
      };
    },
    removeFromFavorites: (state, {payload}) => {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload.id),
      };
    },
  },
});






export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
