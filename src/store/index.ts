import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import content from './reducers/content';
import { apiSource } from './actions/source.api';

export const store = configureStore({
  reducer: {
    [apiSource.reducerPath]: apiSource.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSource.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
