import React from 'react';
import classes from './Loader.module.scss';

export default function Loader(props) {
  return (
    <div className={classes.center}>
      <div className={classes.Loader}>
        <div />
        <div />
      </div>
    </div>
  );
}
