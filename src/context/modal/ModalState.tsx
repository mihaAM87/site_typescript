import React, { useReducer } from 'react';
import { ModalContext } from './modalContext';
import { modalReducer } from './modalReducer';
import { HIDE_MODAL, SHOW_MODAL } from '../types';

export const ModalState = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, null);

  const hide = () => dispatch({ type: HIDE_MODAL });

  const show = () => {
    dispatch({
      type: SHOW_MODAL,
      payload: {},
    });
  };

  return (
    <ModalContext.Provider
      value={{
        hide,
        show,
        modal: state,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
