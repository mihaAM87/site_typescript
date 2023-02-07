import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';
import classes from './carusel.module.scss';
import { connect } from 'react-redux';
import {
  IMG_DIRECTORY,
  GROUPTYPES_IMGES_DIR,
} from '../../../store/actions/content';
import { useAllGroupTypesSourceQuery } from '../../../store/actions/source.api';
import { useDispatch, useStore } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function Carusel() {
  const {
    isLoading: groupTypesIsLoading,
    isError: groupTypesIsError,
    data: groupTypesData,
  } = useAllGroupTypesSourceQuery();

  let groupTypesDataElement;

  if (
    groupTypesData &&
    groupTypesData.contents &&
    groupTypesData.contents.length > 0
  ) {
    groupTypesDataElement = groupTypesData?.contents.map((element) => {
      let itemClasses: string[] = [];
      let imgClasses: string[] = [];
      itemClasses.push('carousel-item');

      if (element.name.toLowerCase() === 'женщины') {
        itemClasses.push('active');
      }

      itemClasses.push(classes.mainItem);

      imgClasses.push(classes.mainImg);

      let itemKey = Math.random();

      return (
        <Carousel.Item className={itemClasses.join(' ')}>
          <img
            key={itemKey}
            className={imgClasses.join(' ')}
            src={IMG_DIRECTORY + GROUPTYPES_IMGES_DIR + element.content.img}
            alt={element.content.header}
          />
          <Carousel.Caption>
            <h3>{element.content.header}</h3>
            <p>{element.content.content}.</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  }

  return <Carousel>{groupTypesDataElement}</Carousel>;
}
