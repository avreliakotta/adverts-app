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
const  favoritesPersistConfig = {
  key: 'favorites',
  storage,
  
};
const filterPersistConfig = {
  key: 'filter',
  storage,
};

const persistedFavoritesReducer = persistReducer( favoritesPersistConfig, favoritesReducer);
const persistedFilterReducer = persistReducer(filterPersistConfig, filterReducer);
export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    favorites: persistedFavoritesReducer,
    filter:persistedFilterReducer ,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);
