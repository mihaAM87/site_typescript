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
import { IRepo, IUser, ServerResponse } from '../../models/models';

import coachesSource from '../source/coachesSource.json';
import groupTypesSource from '../source/groupTypesSource.json';
import pricesSource from '../source/pricesSource.json';
import scheduleSource from '../source/scheduleSource.json';
import sessionsSource from '../source/sessionsSource.json';
import sportTypesSource from '../source/sportTypesSource.json';
import contactsSource from '../source/contactsSource.json';

export function fetchContentStart(contentArr) {
  return {
    type: LOAD_ALL_CONTENTS + START,
    contentArr,
  };
}

export function fetchContentError(e) {
  return {
    type: LOAD_ALL_CONTENTS + ERROR,
    error: e,
  };
}

export function getSportTypeContent(contentArr, header) {
  return {
    type: LOAD_ALL_CONTENTS + SPORT_TYPES,
    contentArr,
    header,
  };
}

export function getSportTypeItemContent(contentArr) {
  return {
    type: LOAD_ALL_CONTENTS + SPORT_TYPES_ITEM,
    contentArr,
  };
}

export function getGroupTypesContent(contentArr) {
  return {
    type: LOAD_ALL_CONTENTS + GROUP_TYPES,
    contentArr,
  };
}

export function onSendContent(userName, userEmail, userPhone) {
  return {
    type: SEND_USER_INFO,
    userName,
    userEmail,
    userPhone,
  };
}

export function getCoachesContent(contentArr) {
  return {
    type: LOAD_ALL_CONTENTS + COACHES,
    contentArr,
  };
}

export function getPricesContent(contentArr) {
  return {
    type: LOAD_ALL_CONTENTS + PRICES,
    contentArr,
  };
}

export function getScheduleContent(contentArr) {
  return {
    type: LOAD_ALL_CONTENTS + SCHEDULE,
    contentArr,
  };
}

export function getSessionsContent(contentArr) {
  return {
    type: LOAD_ALL_CONTENTS + SESSIONS,
    contentArr,
  };
}

export function getContactsContent(content) {
  return {
    type: LOAD_ALL_CONTENTS + CONTACTS,
    content,
  };
}

export function fetchAllContentByType(type) {
  return async (dispatch) => {
    dispatch(fetchContentStart());

    try {
      switch (type) {
        case 'sportTypes': {
          const header = sportTypesSource.header;
          // let sportTypesSourceResult = [];
          // if (name && name != '') {
          //   sportTypesSourceResult = sportTypesSource.contents?.find(
          //     (item) => item.name?.toLowerCase() === name?.toLowerCase()
          //   );
          // } else {
          //   sportTypesSourceResult = sportTypesSource;
          // }

          dispatch(getSportTypeContent(sportTypesSource, header));
          break;
        }
        case 'coaches': {
          dispatch(getCoachesContent(coachesSource));
          break;
        }
        case 'groupTypes': {
          dispatch(getGroupTypesContent(groupTypesSource));
          break;
        }
        case 'prices': {
          dispatch(getPricesContent(pricesSource));
          break;
        }
        case 'schedule': {
          dispatch(getScheduleContent(scheduleSource));
          break;
        }
        case 'sessions': {
          dispatch(getSessionsContent(sessionsSource));
          break;
        }
        case 'contacts': {
          dispatch(getContactsContent(contactsSource));
          break;
        }
      }
    } catch (e) {
      dispatch(fetchContentError(e));
    }
  };
}

const LS_FAV_KEY = 'rfk';

interface GithubState {
  favourites: string[];
}

const initialState: GithubState = {
  favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]'),
};

export const githubSlice = createSlice({
  reducerPath: 'site',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  fetchContentStart: (build) => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: 'sportTypes',
        params: {
          q: search,
          per_page: 10,
        },
      }),
      // transformResponse: (response: ServerResponse<IUser>) => response.items,
    }),
fetchContentError: (build) => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: 'coaches',
        params: {
          q: search,
          per_page: 10,
        },
      }),
      // transformResponse: (response: ServerResponse<IUser>) => response.items,
    }),
    getSportTypeContent: (build) => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: 'groupTypes',
        params: {
          q: search,
          per_page: 10,
        },
      }),
      // transformResponse: (response: ServerResponse<IUser>) => response.items,
    }),

    getSportTypeItemContent: (build) => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: 'search/users',
        params: {
          q: search,
          per_page: 10,
        },
      }),
      // transformResponse: (response: ServerResponse<IUser>) => response.items,
    }),
    getGroupTypesContent: (build) => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: 'search/users',
        params: {
          q: search,
          per_page: 10,
        },
      }),
      // transformResponse: (response: ServerResponse<IUser>) => response.items,
    }),
    onSendContent: (build) => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: 'search/users',
        params: {
          q: search,
          per_page: 10,
        },
      }),
      // transformResponse: (response: ServerResponse<IUser>) => response.items,
    }),
    getCoachesContent: (build) => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: 'search/users',
        params: {
          q: search,
          per_page: 10,
        },
      }),
      // transformResponse: (response: ServerResponse<IUser>) => response.items,
    }),
    getScheduleContent: (build) => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: 'search/users',
        params: {
          q: search,
          per_page: 10,
        },
      }),
      // transformResponse: (response: ServerResponse<IUser>) => response.items,
    }),
    getSessionsContent: (build) => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: 'search/users',
        params: {
          q: search,
          per_page: 10,
        },
      }),
      // transformResponse: (response: ServerResponse<IUser>) => response.items,
    }),
    getContactsContent: (build) => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: 'search/users',
        params: {
          q: search,
          per_page: 10,
        },
      }),
      // transformResponse: (response: ServerResponse<IUser>) => response.items,
    }),
    
  },
});
