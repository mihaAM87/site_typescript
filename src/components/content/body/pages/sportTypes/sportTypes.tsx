import React, { useReducer, Component, useContext } from 'react';
import PropTypes from 'prop-types';
// import classes from './sportTypes.module.scss';
import { useDispatch, useStore } from 'react-redux';
import {
  IMG_DIRECTORY,
  SPORTTYPES_IMGES_DIR,
} from '../../../../../store/actions/content';
import { useAllSportTypesSourceQuery } from '../../../../../store/actions/source.api';
import Coaches from '../coaches/coaches';
import Carusel from '../../../carusel/carusel';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { ModalContext } from '../../../../../context/modal/modalContext';

export default function SportTypes() {
  const {
    isLoading: scheduleIsLoading,
    isError: scheduleIsError,
    data,
  } = useAllSportTypesSourceQuery();

  const name = this.props?.params?.name;

  let sportTypeItem;

  if (data?.contents && data?.contents.length > 0) {
    sportTypeItem = data?.contents?.find(
      (item) => item.name?.toLowerCase() === name?.toLowerCase()
    );
  }

  // let sportTypeItem = sportTypesArr;

  const navClass = [];

  // navClass.push('text-white');

  return (
    <div className="row">
      <Carusel />
      {sportTypeItem ? (
        <div className={navClass.join(' ')}>
          <h1 className="text-black">{data?.header}</h1>
          <div className="row">
            <div className="col-8">
              <h2>{sportTypeItem.header}</h2>
              <h3
              // className={classes.textLeft}
              >
                {sportTypeItem.content}
              </h3>
              <button
                type="button"
                className="btn btn-primary btn-lg col-2"
                // variant="primary"
                // onClick={show}
              >
                Записаться
              </button>
            </div>
            <div
              // className={`
              // // ${classes.mainContent}
              //  col-4`}
              style={{
                backgroundImage:
                  'url(' +
                  IMG_DIRECTORY +
                  SPORTTYPES_IMGES_DIR +
                  sportTypeItem.img +
                  ')',
              }}
            ></div>
          </div>

          <Coaches sportType={sportTypeItem.name} />
        </div>
      ) : (
        <Coaches sportType={''} />
      )}
    </div>
  );
}
