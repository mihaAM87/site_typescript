import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './prices.module.scss';
import { connect } from 'react-redux';
import { fetchAllContentByType } from '../../../../../store/actions/contentSrc';
import Card from 'react-bootstrap/Card';
import Carusel from '../../../carusel/carusel';
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

class Prices extends Component {
  state = {
    pricesArr: [],
  };

  // Перед отрисовкой интерфейса, инициализация входных данных из Redux
  UNSAFE_componentWillMount() {
    this.props.onFetchAllContentByType('prices');
  }

  render() {
    let { pricesArr } = this.props;
    pricesArr = pricesArr || [];

    const header = pricesArr?.header;

    const itemClass = [];

    itemClass.push('col-md-3');
    itemClass.push(classes.itemImg);

    if (pricesArr && pricesArr.contents && pricesArr.contents.length > 0) {
      pricesArr = pricesArr.contents.map((element) => {
        let itemKey = Math.random();
        return (
          <div key={itemKey} className={itemClass.join(' ')}>
            <Card className={classes.itemImg}>
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
}

// Регистрация параметров Redux
function mapStateToProps(state) {
  return {
    pricesArr: state.content.pricesArr,
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
  connect(mapStateToProps, mapDiaspatchToProps)(Prices)
);
