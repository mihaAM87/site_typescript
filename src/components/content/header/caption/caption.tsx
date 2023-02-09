import React, { useContext, Component } from 'react';
import './caption.module.scss';
import { NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  LOGOTYPE,
  METRO_IMG,
  IMG_DIRECTORY,
  MAIN_IMGES_DIR,
} from '../../../../store/actions/content';
import { useAllContactsSourceQuery } from '../../../../store/actions/source.api';
import { useDispatch, useStore } from 'react-redux';
import { ModalContext } from '../../../../context/modal/modalContext';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

export default function Caption() {
  const {
    isLoading: contactsIsLoading,
    isError: contactsIsError,
    data: contactsData,
  } = useAllContactsSourceQuery();

  let mainClass: string[] = [];

  mainClass.push('row');
  mainClass.push('mainClass');

  return (
    <div className={mainClass.join(' ')}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            {/* <NavbarBrand as={NavLink} to="/">
                <img
                  alt="Логотип"
                  src={IMG_DIRECTORY + MAIN_IMGES_DIR + LOGOTYPE}
                  className={classes.logotype}
                ></img>
              </NavbarBrand> */}
            <h4>СК Люблино</h4>
          </div>
          <div className="col-md-3">
            <img
              alt="Знак метрополитена"
              src={IMG_DIRECTORY + MAIN_IMGES_DIR + METRO_IMG}
              className="metroImg"
            ></img>
            <span>
              {contactsData?.city}, {contactsData?.street}, {contactsData?.home}
              , м. {contactsData?.undergrounds?.join(', м. ')}
            </span>
          </div>
          <div className="col-md-2">
            <div>
              <span>{contactsData?.emails?.join(', ')}</span>
              <br />
              <span>{contactsData?.phones?.join(', ')}</span>
            </div>
          </div>
          <div className="col-md-2">
            <button
              className="form-control btn btn-dark"
              // onClick={contactsIsLoading}
            >
              Заказать Звонок
            </button>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
}
