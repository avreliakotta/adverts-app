import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAdvertsAll } from 'servises/api/adverts/adverts';
export const fetchAll= createAsyncThunk(
    "adverts/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
          return await fetchAdvertsAll();
        } catch (error) {
          return rejectWithValue(error.response.data);
        }
      }
)
export const loadMore = createAsyncThunk(
  'adverts/loadMore',
  async (_, { getState, rejectWithValue }) => {
    const { page } = getState().adverts;
    try {
      return await fetchAdvertsAll(page + 1); 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

