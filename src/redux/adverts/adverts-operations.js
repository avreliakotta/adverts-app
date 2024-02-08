import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAdvertsAll } from 'servises/api/adverts/adverts';
export const fetchAll= createAsyncThunk(
    "adverts/fetchAll",
    async ({page,limit}, { rejectWithValue }) => {
        try {
          return await fetchAdvertsAll(page,limit);
        } catch (error) {
          return rejectWithValue(error.response.data);
        }
      }
)




