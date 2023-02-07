import React, { Component } from 'react';
import classes from './contacts.module.scss';
import { connect } from 'react-redux';
import {
  METRO_IMG,
  IMG_DIRECTORY,
  MAIN_IMGES_DIR,
} from '../../../../../store/actions/content';
import { useDispatch, useStore } from 'react-redux';
import { useAllContactsSourceQuery } from '../../../../../store/actions/source.api';
import { useParams } from 'react-router-dom';

export default function Contacts() {
  const {
    isLoading: contactsIsLoading,
    isError: contactsIsError,
    data: contactsData,
  } = useAllContactsSourceQuery();

  return (
    <div className="container">
      <div className="row">
        <h1 className="col-md-12">{contactsData?.header.toUpperCase()}</h1>
        <div className="col-md-12">
          <h3>
            <strong>Адрес: </strong>
            <img
              alt="Знак Метрополитена"
              src={IMG_DIRECTORY + MAIN_IMGES_DIR + METRO_IMG}
              className={classes.metroImg}
            ></img>
            <strong>
              {contactsData?.city}, {contactsData?.street}, {contactsData?.home}
              , м. {contactsData?.undergrounds?.join(', м. ')}
            </strong>
          </h3>
        </div>
        <div className="col-md-12">
          <h3>
            <span>Электронная почта: {contactsData?.emails?.join(', ')}</span>
            <br />
            <span>Номер телефона: {contactsData?.phones?.join(', ')}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
