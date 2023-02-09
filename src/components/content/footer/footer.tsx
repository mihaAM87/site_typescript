import React, { Component } from 'react';
import './footer.module.scss';
import { useDispatch, useStore } from 'react-redux';
import { useAllContactsSourceQuery } from '../../../store/actions/source.api';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

export default function Footer() {
  const {
    isLoading: contactsIsLoading,
    isError: contactsIsError,
    data: contactsData,
  } = useAllContactsSourceQuery();

  const mainClass: string[] = [];

  mainClass.push('container');
  mainClass.push('blackBackground');
  mainClass.push('whiteColor');
  return (
    <div className={mainClass.join(' ')}>
      <h4>{contactsData?.phones?.join(', ')}</h4>
      <h5>
        <span className="redColor">Тренировка</span> (с) 2022. Все права
        защищены.
      </h5>
    </div>
  );
}
