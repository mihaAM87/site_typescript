import React, { useContext, Component } from 'react';
import {
  IMG_DIRECTORY,
  COACHES_IMGES_DIR,
} from '../../../../../store/actions/content';
import { useAllCoachesQuery } from '../../../../../store/actions/source.api';
import Card from 'react-bootstrap/Card';
import Carusel from '../../../carusel/carusel';
import classes from './coaches.module.scss';
import { useDispatch, useStore } from 'react-redux';
import { ModalContext } from '../../../../../context/modal/modalContext';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

export function Coaches() {
  const { isLoading, isError, data } = useAllCoachesQuery();

  const header = data?.header;

  const itemClass = [];
  const mainDiv = [];

  mainDiv.push('container');
  mainDiv.push(classes.mainDiv);

  itemClass.push('col-md-4');

  if (
    sportType &&
    sportType != '' &&
    coachesArr?.contents &&
    coachesArr?.contents.length > 0
  ) {
    coachesArr = data?.contents?.filter(
      (item) => item.content.type.toLowerCase() === sportType?.toLowerCase()
    );
  } else {
    coachesArr = data?.contents;
  }

  if (data && data.length > 0) {
    data = data.map((element) => {
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
                variant="primary"
                onClick={show}
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
        <div className="row">{coachesArr ? coachesArr : <br />}</div>
      </div>
    </div>
  );
}
