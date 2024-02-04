import { createSlice } from '@reduxjs/toolkit';


// const initialState = {
//   items: [], 
// };

// const favoritesSlice = createSlice({
//   name: 'favorites',
//   initialState,
//   reducers: {
//     addToFavorites: (state,{payload}) => {
//       state.items.push(payload);
//     },
//     removeFromFavorites: (state,{payload}) => {
//       return state.items.filter((id) => id !== payload.id);
//     },
//   },
// });
// favoritesSlice.js

const initialState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    removeFromFavorites: (state, action) => {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    },
  },
});






export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
