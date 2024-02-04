import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { advertsReducer } from './adverts/adverts-slice';
import { favoritesReducer } from './favorites/favorites-slice';
import filterReducer from './filter/filter-slise';
const persistConfig = {
  key: 'favorites',
  storage,
};
const persistedReducer = persistReducer(persistConfig, favoritesReducer);
export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    favorites: persistedReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);
