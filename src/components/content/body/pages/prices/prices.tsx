import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classes from './prices.module.scss';
import { connect } from 'react-redux';
import { useAllPricesSourceQuery } from '../../../../../store/actions/source.api';
import Card from 'react-bootstrap/Card';
import Carusel from '../../../carusel/carusel';
import { useDispatch, useStore } from 'react-redux';
import { useParams } from 'react-router-dom';

export function Prices() {
  const { isLoading, isError, data } = useAllPricesSourceQuery();

  const header = data?.header;

  // const itemClass = [];

  // itemClass.push('col-md-3');
  // itemClass.push(classes.itemImg);

  let pricesArr: JSX.Element[];

  if (data && data?.contents && data?.contents.length > 0) {
    pricesArr = data?.contents.map((element) => {
      let itemKey = Math.random();
      return (
        <div
          key={itemKey}
          // className={itemClass.join(' ')}
        >
          <Card
          // className={classes.itemImg}
          >
            <Card.Body>
              <Card.Title>
                <h3>{element.header}</h3>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {element.content.conditions ? (
                  <p>{element.content.conditions}</p>
                ) : (
                  <div>
                    <p></p>
                    <br />
                  </div>
                )}
              </Card.Subtitle>
              <Card.Text>
                <h2>{element.content.price}.</h2>
              </Card.Text>
              <button className="btn btn-light">Купить</button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  }

  return (
    <div className="row">
      <Carusel />
      <div className="conteiner">
        <div className="row">
          <h1>{header}</h1>
          {pricesArr}
        </div>
      </div>
    </div>
  );
}
