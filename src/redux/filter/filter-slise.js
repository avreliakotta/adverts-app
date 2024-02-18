import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: '',
  price: null,
  mileageFrom: null,
  mileageTo: null,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilters: (state,{payload}) => {
      state.brand = payload.brand ;
      state.price = payload.price ;
      state.mileageFrom = payload.mileageFrom;
      state.mileageTo = payload.mileageTo;
     
    },
   
  },
});

export const {  setFilters} = filterSlice.actions;
export default filterSlice.reducer;
