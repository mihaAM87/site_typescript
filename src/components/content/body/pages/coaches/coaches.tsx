import React, { useContext, Component } from 'react';
import {
  IMG_DIRECTORY,
  COACHES_IMGES_DIR,
} from '../../../../../store/actions/content';
import { useAllCoachesQuery } from '../../../../../store/actions/source.api';
import Card from 'react-bootstrap/Card';
import Carusel from '../../../carusel/carusel';
// import classes from './coaches.module.scss';
import { useDispatch, useStore } from 'react-redux';
import { ModalContext } from '../../../../../context/modal/modalContext';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

export default function Coaches({ sportType: string }) {
  const {
    isLoading: cachesLoading,
    isError: cachesIsError,
    data: cachesData,
  } = useAllCoachesQuery();

  const header: string = cachesData?.header || '';
  const sportType: string = this.props.sportType || '';

  const itemClass: string[] = [];
  const mainDiv: string[] = [];

  mainDiv.push('container');
  // mainDiv.push(classes.mainDiv);

  itemClass.push('col-md-4');

  if (
    sportType &&
    sportType != '' &&
    cachesData?.contents?.length &&
    cachesData?.contents?.length > 0
  ) {
    cachesData.contents = cachesData?.contents?.filter(
      (item) => item.content.type.toLowerCase() === sportType?.toLowerCase()
    );
  }

  let cachesDataElement;

  if (cachesData && cachesData.contents.length > 0) {
    cachesDataElement = cachesData.contents.map((element) => {
      let elementContent = element.content;
      let itemKey = Math.random();
      return (
        <div className={itemClass.join(' ')} key={itemKey}>
          <Card>
            <Card.Img
              variant="top"
              src={IMG_DIRECTORY + COACHES_IMGES_DIR + elementContent.img}
            />
            <Card.Body>
              <Card.Title>{elementContent.header}</Card.Title>
              <Card.Text>{elementContent.content}</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
              <button
                className="form-control btn btn-primary"
                // variant="primary"
                // onClick={show}
              >
                Записаться
              </button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  }

  return (
    <div className="row">
      {!sportType || sportType == '' ? <Carusel /> : <br />}

      <div className={mainDiv.join(' ')}>
        <h1>{header}</h1>
        <div className="row">
          {cachesDataElement ? cachesDataElement : <br />}
        </div>
      </div>
    </div>
  );
}
