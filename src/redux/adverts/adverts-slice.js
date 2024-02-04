import { createSlice } from '@reduxjs/toolkit';
import { fetchAll,loadMore  } from './adverts-operations';
const initialState = {
  item: [],
  loading: false,
  error: null,
  page:1
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
        state.item = payload;
      })
      .addCase(fetchAll.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(loadMore.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadMore.fulfilled, (state, { payload }) => {
        state.loading = false;
        
        state.item=payload;
        state.page++; 
      })
      .addCase(loadMore.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});
export const advertsReducer = advertsSlice.reducer;
