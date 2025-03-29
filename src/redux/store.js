import contactReducer from './contactsSlice.js';
import filterReducer from './filtersSlice.js';
import { configureStore } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';

const contactPersistConfig = {
  key: 'contact',
  storage,
  whitelist: ['items'],
};

const contactPersistedReducer = persistReducer(
  contactPersistConfig,
  contactReducer
);

export const store = configureStore({
  reducer: {
    contacts: contactPersistedReducer,
    filters: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
