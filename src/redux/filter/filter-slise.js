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
      return {
        ...state,
        brand: payload.brand,
        price: payload.price,
        mileageFrom: payload.mileageFrom,
        mileageTo: payload.mileageTo,
      };
      
     
    },
    
  },
});

export const {  setFilters} = filterSlice.actions;
export default filterSlice.reducer;
