import React, { Component } from 'react';
import Caption from './caption/caption';
import MyMenu from './myMenu/myMenu';

export default function Header() {
  return (
    <div>
      <Caption />
      <MyMenu />
    </div>
  );
}
