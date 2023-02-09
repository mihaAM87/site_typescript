import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './body.module.scss';
import { connect } from 'react-redux';
import SportTypes from './pages/sportTypes/sportTypes';
import Coaches from './pages/coaches/coaches';
import Prices from './pages/prices/prices';
import Contacts from './pages/contacts/contacts';
import Home from './pages/home/home';
import Schedule from './pages/schedule/schedule';

export default function Body() {
  let myBody: string[] = [];
  myBody.push('container');
  myBody.push('myBody');

  return (
    <div className={myBody.join(' ')}>
      <Routes>
        <Route path="/sportTypes/:name" element={<SportTypes />} />
        <Route path="/coaches" element={<Coaches sportType={''} />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
