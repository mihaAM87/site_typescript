import { HIDE_ALERT, SHOW_ALERT } from '../types';

const handlers = {
  [SHOW_ALERT]: (state: string, action: { type: string; payload: number }) =>
    action.payload,
  [HIDE_ALERT]: () => null,
  DEFAULT: (state: string) => state,
};

export const alertReducer = (
  state: string,
  action: { type: string; payload: number }
) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
