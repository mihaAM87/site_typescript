import React, { useContext, Component } from 'react';
import classes from './caption.module.scss';
import { NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  LOGOTYPE,
  METRO_IMG,
  IMG_DIRECTORY,
  MAIN_IMGES_DIR,
} from '../../../../store/actions/content';
import { fetchAllContentByType } from '../../../../store/actions/contentSrc';
import { useDispatch, useStore } from 'react-redux';
import { ModalContext } from '../../../../context/modal/modalContext';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const { show } = useContext(ModalContext);
  // etc... other react-router-dom v6 hooks

  return (
    <WrappedComponent
      {...props}
      params={params}
      show={show}
      // etc...
    />
  );
};

class Caption extends Component {
  state = {
    contacts: {},
    show: null,
  };

  // Перед отрисовкой интерфейса, инициализация входных данных из Redux
  UNSAFE_componentWillMount() {
    this.props.onFetchAllContentByType('contacts');
  }

  render() {
    let { contacts, show } = this.props;
    contacts = contacts || {};

    let mainClass = [];

    mainClass.push('row');
    mainClass.push(classes.mainClass);

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
                className={classes.metroImg}
              ></img>
              <span>
                {contacts.city}, {contacts.street}, {contacts.home}, м.{' '}
                {contacts.undergrounds?.join(', м. ')}
              </span>
            </div>
            <div className="col-md-2">
              <div>
                <span>{contacts.emails?.join(', ')}</span>
                <br />
                <span>{contacts.phones?.join(', ')}</span>
              </div>
            </div>
            <div className="col-md-2">
              <button className="form-control btn btn-dark" onClick={show}>
                Заказать Звонок
              </button>
            </div>
            <div className="col-md-1"></div>
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
  connect(mapStateToProps, mapDiaspatchToProps)(Caption)
);
