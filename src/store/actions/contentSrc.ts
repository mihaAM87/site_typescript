import {
  LOAD_ALL_CONTENTS,
  SPORT_TYPES,
  GROUP_TYPES,
  SPORT_TYPES_ITEM,
  COACHES,
  PRICES,
  START,
  ERROR,
  SEND_USER_INFO,
  SCHEDULE,
  SESSIONS,
  CONTACTS,
} from './content';
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

export const apiSite = createApi({
  reducerPath: 'site/api',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (build) => ({
    allCoaches: build.query<ICoachesSource[], string>({
      query: (search: string) => ({
        url: 'coaches',
      }),
    }),
    allContactsSource: build.query<IContactsSource[], string>({
      query: (search: string) => ({
        url: 'contacts',
      }),
    }),
    allGroupTypesSource: build.query<IGroupTypesSource[], string>({
      query: (search: string) => ({
        url: 'groupTypes',
      }),
    }),
    allPricesSource: build.query<IPricesSource[], string>({
      query: (search: string) => ({
        url: 'prices',
      }),
    }),
    allScheduleSource: build.query<IScheduleSource[], string>({
      query: (search: string) => ({
        url: 'schedule',
      }),
    }),
    allSessionsSource: build.query<ISessionsSource[], string>({
      query: (search: string) => ({
        url: 'sessions',
      }),
    }),
    allSportTypesSource: build.query<ISportTypesSource[], string>({
      query: (search: string) => ({
        url: 'sportTypes',
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
} = apiSite;
