import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';
import classes from './carusel.module.scss';
import { connect } from 'react-redux';
import {
  IMG_DIRECTORY,
  GROUPTYPES_IMGES_DIR,
} from '../../../store/actions/content';
import { fetchAllContentByType } from '../../../store/actions/contentSrc';
import { useDispatch, useStore } from 'react-redux';
import { useParams } from 'react-router-dom';

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  // etc... other react-router-dom v6 hooks

  return (
    <WrappedComponent
      {...props}
      params={params}
      // etc...
    />
  );
};

class Carusel extends Component {
  state = {
    groupTypesArr: [],
  };

  // Перед отрисовкой интерфейса, инициализация входных данных из Redux
  UNSAFE_componentWillMount() {
    this.props.onFetchAllContentByType('groupTypes');
  }

  render() {
    let { groupTypesArr } = this.props;
    groupTypesArr = groupTypesArr || [];
    if (
      groupTypesArr &&
      groupTypesArr.contents &&
      groupTypesArr.contents.length > 0
    ) {
      groupTypesArr = groupTypesArr.contents.map((element) => {
        let itemClasses = [];
        let imgClasses = [];
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

    return <Carousel>{groupTypesArr}</Carousel>;
  }
}

// Регистрация параметров Redux
function mapStateToProps(state) {
  return {
    groupTypesArr: state.content.groupTypesArr,
  };
}

// Регистрация функций Redux
function mapDiaspatchToProps(dispatch) {
  return {
    onFetchAllContentByType: (seacrhFilter) =>
      dispatch(fetchAllContentByType(seacrhFilter)),
  };
}

// // Вывод Основного компонента с подключённым к нему Redux
export default withRouter(
  connect(mapStateToProps, mapDiaspatchToProps)(Carusel)
);
