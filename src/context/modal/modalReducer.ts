import { HIDE_MODAL, SHOW_MODAL } from '../types';

const handlers = {
  [SHOW_MODAL]: (state: string, action: { type: string; payload: number }) =>
    action.payload,
  [HIDE_MODAL]: () => null,
  DEFAULT: (state) => state,
};

export const modalReducer = (
  state: string,
  action: { type: string; payload: number }
) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
