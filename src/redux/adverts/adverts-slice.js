import { createSlice } from '@reduxjs/toolkit';
import { fetchAll } from './adverts-operations';
const initialState = {
  item: [],
  loading: false,
  error: null,
};
const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAll.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAll.fulfilled, (state, { payload }) => {
        state.loading = false;

        const uniquePayload = payload.filter(
          item => !state.item.some(existingItem => existingItem.id === item.id)
        );
        state.item = [...state.item, ...uniquePayload];
      })
      .addCase(fetchAll.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});
export const advertsReducer = advertsSlice.reducer;
