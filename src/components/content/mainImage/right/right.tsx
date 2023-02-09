import React, { Component } from 'react';
import './right.module.scss';
import {
  MAIN_IMG,
  IMG_DIRECTORY,
  MAIN_IMGES_DIR,
} from '../../../../store/actions/content';

export default function Right() {
  const imgClass: string[] = [];

  imgClass.push('mainImg');

  imgClass.push('row');

  return (
    <div className="col-md-6">
      <img
        alt="Главное изображение"
        src={IMG_DIRECTORY + MAIN_IMGES_DIR + MAIN_IMG}
        className={imgClass.join(' ')}
      ></img>
    </div>
  );
}
