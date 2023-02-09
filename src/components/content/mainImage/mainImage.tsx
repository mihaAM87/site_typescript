import React, { Component } from 'react';
import './mainImage.module.scss';
import Left from './left/left';
import Right from './right/right';

export default function MainImage() {
  const rowClass: string[] = [];

  rowClass.push('row');
  rowClass.push('mainRow');

  let mainClass: string[] = [];

  mainClass.push('row');
  mainClass.push('mainClass');
  // rowClass.push('d-flex align-items-stretch')
  return (
    <div className={mainClass.join(' ')}>
      <div className="container">
        <div className={rowClass.join(' ')}>
          <Left />
          <Right />
        </div>
      </div>
    </div>
  );
}
