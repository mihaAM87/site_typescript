import React, { useContext } from 'react';
import { AlertContext } from '../../../context/alert/alertContext';
import './alert.module.scss';
// import { BiXCircle } from 'react-icons/bi';

export const Alert = () => {
  // const { alert, hide } = useContext(AlertContext);

  if (!alert) return null;

  return (
    <div
      className={`alert alert-${'type' || 'secondary'} alert-dismissible 
        alert`}
      role="alert"
    >
      {/* {alert.text} */}
      {/* <BiXCircle
        aria-hidden="true"
        type="button"
        className={`close ${classes.btn}`}
        aria-label="Close"
        onClick={hide}
      /> */}
    </div>
  );
};
