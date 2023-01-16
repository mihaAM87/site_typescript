import React, { Component } from 'react';
//import 'react-select/dist/react-select.css'
import MainContent from './components/mainContent';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { ModalState } from './context/modal/ModalState';
import Modal from './components/content/modal/modal';
import { AlertState } from './context/alert/alertState';
import { Alert } from './components/content/alert/alert';

export default function () {
  return (
    <div className="App">
      <AlertState>
        <ModalState>
          <BrowserRouter>
            <Alert />
            <Modal />
            <MainContent />
          </BrowserRouter>
        </ModalState>
      </AlertState>
    </div>
  );
}
