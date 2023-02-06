import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  ICoachesSource,
  IContactsSource,
  IGroupTypesSource,
  IPricesSource,
  IScheduleSource,
  ISessionsSource,
  ISportTypesSource,
} from '../../models/models';

export const apiSource = createApi({
  reducerPath: 'site/api',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (build) => ({
    allCoaches: build.query<ICoachesSource, void>({
      query: () => ({
        url: '../source/coachesSource.json',
      }),
    }),
    allContactsSource: build.query<IContactsSource, void>({
      query: () => ({
        url: '../source/contactsSource.json',
      }),
    }),
    allGroupTypesSource: build.query<IGroupTypesSource, void>({
      query: () => ({
        url: '../source/groupTypesSource.json',
      }),
    }),
    allPricesSource: build.query<IPricesSource, void>({
      query: () => ({
        url: '../source/pricesSource.json',
      }),
    }),
    allScheduleSource: build.query<IScheduleSource, void>({
      query: () => ({
        url: '../source/scheduleSource.json',
      }),
    }),
    allSessionsSource: build.query<ISessionsSource, void>({
      query: () => ({
        url: '../source/sessionsSource.json',
      }),
    }),
    allSportTypesSource: build.query<ISportTypesSource, void>({
      query: () => ({
        url: '../source/sportTypesSource.json',
      }),
    }),
  }),
});

export const {
  useAllCoachesQuery,
  useAllContactsSourceQuery,
  useAllGroupTypesSourceQuery,
  useAllPricesSourceQuery,
  useAllScheduleSourceQuery,
  useAllSessionsSourceQuery,
  useAllSportTypesSourceQuery,
} = apiSource;
