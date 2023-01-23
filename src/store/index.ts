import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import content from './reducers/content';
import sourceApi from './actions/contentSrc';

export const store = configureStore({
  reducer: {
    content,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sourceApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
