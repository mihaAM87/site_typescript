import React, { Component } from 'react';
import classes from './contacts.module.scss';
import { connect } from 'react-redux';
import {
  METRO_IMG,
  IMG_DIRECTORY,
  MAIN_IMGES_DIR,
} from '../../../../../store/actions/content';
import { useDispatch, useStore } from 'react-redux';
import { fetchAllContentByType } from '../../../../../store/actions/contentSrc';
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

class Contacts extends Component {
  state = {
    contacts: {},
  };

  // Перед отрисовкой интерфейса, инициализация входных данных из Redux
  UNSAFE_componentWillMount() {
    this.props.onFetchAllContentByType('contacts');
  }

  render() {
    let { contacts } = this.props;
    contacts = contacts || {};

    return (
      <div className="container">
        <div className="row">
          <h1 className="col-md-12">{contacts.header?.toUpperCase()}</h1>
          <div className="col-md-12">
            <h3>
              <strong>Адрес: </strong>
              <img
                alt="Знак Метрополитена"
                src={IMG_DIRECTORY + MAIN_IMGES_DIR + METRO_IMG}
                className={classes.metroImg}
              ></img>
              <strong>
                {contacts.city}, {contacts.street}, {contacts.home}, м.{' '}
                {contacts.undergrounds?.join(', м. ')}
              </strong>
            </h3>
          </div>
          <div className="col-md-12">
            <h3>
              <span>Электронная почта: {contacts.emails?.join(', ')}</span>
              <br />
              <span>Номер телефона: {contacts.phones?.join(', ')}</span>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

// Регистрация параметров Redux
function mapStateToProps(state) {
  return {
    contacts: state.content.contacts,
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
  connect(mapStateToProps, mapDiaspatchToProps)(Contacts)
);
