import { HIDE_MODAL, SHOW_MODAL } from '../types';

const handlers = {
  [SHOW_MODAL]: (state, action) => action.payload,
  [HIDE_MODAL]: () => null,
  DEFAULT: (state) => state,
};

export const modalReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
