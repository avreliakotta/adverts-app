import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedBrand: '', 
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setBrand: (state, action) => {
      state.selectedBrand = action.payload;
    },
   
  },
});

export const { setBrand } = filterSlice.actions;
export default filterSlice.reducer;
